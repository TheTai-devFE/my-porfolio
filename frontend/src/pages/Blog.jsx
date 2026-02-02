import { ArrowRight, Calendar, Clock, Filter, Search, Tag } from 'lucide-react';
import { useState } from 'react';
import './Blog.css';

// Sample blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Bắt đầu với React: Hướng dẫn cho người mới",
        excerpt: "Tìm hiểu cách xây dựng ứng dụng web hiện đại với React từ những bước cơ bản nhất. Bài viết này sẽ giúp bạn hiểu rõ về components, state và props.",
        category: "React",
        date: "2025-01-25",
        readTime: "8 min",
        image: "⚛️",
        tags: ["React", "JavaScript", "Frontend"]
    },
    {
        id: 2,
        title: "FastAPI: Xây dựng REST API siêu nhanh với Python",
        excerpt: "Khám phá cách sử dụng FastAPI để xây dựng API hiệu suất cao. Từ cài đặt, routing đến authentication và deployment.",
        category: "Backend",
        date: "2025-01-20",
        readTime: "12 min",
        image: "⚡",
        tags: ["Python", "FastAPI", "API"]
    },
    {
        id: 3,
        title: "Tailwind CSS: Tips & Tricks cho Developer",
        excerpt: "Những mẹo và thủ thuật giúp bạn làm việc hiệu quả hơn với Tailwind CSS. Từ custom config đến responsive design.",
        category: "CSS",
        date: "2025-01-15",
        readTime: "6 min",
        image: "🎨",
        tags: ["Tailwind", "CSS", "Design"]
    },
    {
        id: 4,
        title: "Giới thiệu về AI và Machine Learning",
        excerpt: "Tổng quan về Trí tuệ nhân tạo và Machine Learning. Những khái niệm cơ bản bạn cần biết khi bắt đầu học AI.",
        category: "AI",
        date: "2025-01-10",
        readTime: "10 min",
        image: "🤖",
        tags: ["AI", "Machine Learning", "Python"]
    },
];

const categories = ["All", "React", "Backend", "CSS", "AI"];

function Blog() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = activeCategory === "All" || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="blog-page">
            <div className="blog-container">
                {/* Hero Section */}
                <section className="blog-hero">
                    <h1 className="blog-title">
                        <span className="gradient-text">Blog</span> & Articles
                    </h1>
                    <p className="blog-subtitle">
                        Chia sẻ kiến thức, kinh nghiệm và những điều thú vị về lập trình,
                        công nghệ và hành trình trở thành developer.
                    </p>
                </section>

                {/* Search & Filter */}
                <section className="blog-filters">
                    <div className="search-box">
                        <Search size={20} />
                        <input
                            type="text"
                            placeholder="Tìm kiếm bài viết..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="category-filters">
                        <Filter size={18} />
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Blog Posts Grid */}
                <section className="blog-grid">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post) => (
                            <article key={post.id} className="blog-card">
                                <div className="blog-card-image">
                                    <span>{post.image}</span>
                                </div>
                                <div className="blog-card-content">
                                    <div className="blog-card-meta">
                                        <span className="blog-category">{post.category}</span>
                                        <span className="blog-date">
                                            <Calendar size={14} />
                                            {new Date(post.date).toLocaleDateString('vi-VN')}
                                        </span>
                                        <span className="blog-read-time">
                                            <Clock size={14} />
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <h2 className="blog-card-title">{post.title}</h2>
                                    <p className="blog-card-excerpt">{post.excerpt}</p>
                                    <div className="blog-card-tags">
                                        {post.tags.map((tag, idx) => (
                                            <span key={idx} className="blog-tag">
                                                <Tag size={12} />
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <button className="blog-read-more">
                                        Đọc thêm
                                        <ArrowRight size={16} />
                                    </button>
                                </div>
                            </article>
                        ))
                    ) : (
                        <div className="no-posts">
                            <span>📭</span>
                            <p>Không tìm thấy bài viết nào</p>
                        </div>
                    )}
                </section>

                {/* Newsletter CTA */}
                <section className="newsletter-section">
                    <div className="newsletter-content">
                        <h3>📬 Đăng ký nhận bài viết mới</h3>
                        <p>Nhận thông báo khi có bài viết mới về lập trình, công nghệ và AI.</p>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Email của bạn..." />
                            <button type="submit">Đăng ký</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Blog;
