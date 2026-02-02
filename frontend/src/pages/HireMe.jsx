import {
    ArrowRight,
    CheckCircle2,
    Clock,
    Code2,
    DollarSign,
    Globe,
    MessageSquare,
    Palette,
    Rocket,
    Server,
    Star,
    Zap
} from 'lucide-react';
import './HireMe.css';

// Services data
const services = [
    {
        id: 1,
        icon: <Code2 size={32} />,
        title: "Frontend Development",
        description: "Xây dựng giao diện web hiện đại, responsive với React, Tailwind CSS và các công nghệ frontend mới nhất.",
        features: [
            "Landing Page đẹp mắt",
            "Single Page Applications (SPA)",
            "Responsive Design",
            "Performance Optimization"
        ],
        price: "Từ 3.000.000đ"
    },
    {
        id: 2,
        icon: <Server size={32} />,
        title: "Backend Development",
        description: "Phát triển API và hệ thống backend mạnh mẽ với FastAPI, Node.js và các database phổ biến.",
        features: [
            "RESTful API",
            "Authentication & Authorization",
            "Database Design",
            "API Documentation"
        ],
        price: "Từ 5.000.000đ"
    },
    {
        id: 3,
        icon: <Globe size={32} />,
        title: "WordPress Development",
        description: "Thiết kế và phát triển website WordPress chuyên nghiệp, tối ưu SEO.",
        features: [
            "Theme Customization",
            "Plugin Development",
            "SEO Optimization",
            "Performance Tuning"
        ],
        price: "Từ 2.000.000đ"
    },
    {
        id: 4,
        icon: <Palette size={32} />,
        title: "UI/UX Design",
        description: "Thiết kế giao diện người dùng đẹp mắt và trải nghiệm người dùng tối ưu với Figma.",
        features: [
            "Wireframing",
            "UI Design",
            "Prototyping",
            "Design System"
        ],
        price: "Từ 2.500.000đ"
    }
];

// Process steps
const processSteps = [
    {
        step: 1,
        title: "Trao đổi & Phân tích",
        description: "Lắng nghe và hiểu rõ yêu cầu, mục tiêu của dự án."
    },
    {
        step: 2,
        title: "Đề xuất & Báo giá",
        description: "Đưa ra giải pháp kỹ thuật và báo giá chi tiết."
    },
    {
        step: 3,
        title: "Phát triển",
        description: "Bắt đầu code, cập nhật tiến độ thường xuyên."
    },
    {
        step: 4,
        title: "Bàn giao & Hỗ trợ",
        description: "Bàn giao sản phẩm và hỗ trợ sau bàn giao."
    }
];

// FAQs
const faqs = [
    {
        q: "Thời gian hoàn thành dự án bao lâu?",
        a: "Tùy thuộc vào độ phức tạp của dự án, thường từ 1-4 tuần cho các dự án nhỏ và vừa."
    },
    {
        q: "Bạn có hỗ trợ sau khi bàn giao không?",
        a: "Có, tôi cung cấp hỗ trợ miễn phí 1 tháng sau khi bàn giao sản phẩm."
    },
    {
        q: "Thanh toán như thế nào?",
        a: "Thường chia làm 2 đợt: 50% khi bắt đầu và 50% khi hoàn thành."
    },
    {
        q: "Có nhận dự án từ xa không?",
        a: "Có, tôi có thể làm việc từ xa với khách hàng ở bất kỳ đâu."
    }
];

function HireMe() {
    return (
        <div className="hire-page">
            <div className="hire-container">
                {/* Hero Section */}
                <section className="hire-hero">
                    <div className="hire-hero-badge">
                        <Zap size={16} />
                        <span>Available for Freelance</span>
                    </div>
                    <h1 className="hire-title">
                        Hãy biến ý tưởng của bạn <br />
                        thành <span className="gradient-text">sản phẩm thực tế</span>
                    </h1>
                    <p className="hire-subtitle">
                        Tôi giúp các doanh nghiệp và cá nhân xây dựng website, ứng dụng web
                        với công nghệ hiện đại, hiệu suất cao và trải nghiệm người dùng tuyệt vời.
                    </p>
                    <div className="hire-hero-cta">
                        <a href="mailto:taithedev2003@gmail.com" className="cta-primary">
                            <MessageSquare size={20} />
                            Liên hệ ngay
                        </a>
                        <a href="#services" className="cta-secondary">
                            Xem dịch vụ
                            <ArrowRight size={18} />
                        </a>
                    </div>
                    <div className="hire-stats">
                        <div className="hire-stat">
                            <span className="hire-stat-number">6+</span>
                            <span className="hire-stat-label">Projects</span>
                        </div>
                        <div className="hire-stat">
                            <span className="hire-stat-number">1+</span>
                            <span className="hire-stat-label">Years Exp</span>
                        </div>
                        <div className="hire-stat">
                            <span className="hire-stat-number">100%</span>
                            <span className="hire-stat-label">Satisfaction</span>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="services-section">
                    <div className="section-header">
                        <h2 className="section-title">Dịch vụ của tôi</h2>
                        <p className="section-subtitle">
                            Các dịch vụ chuyên nghiệp giúp bạn hiện thực hóa ý tưởng
                        </p>
                    </div>
                    <div className="services-grid">
                        {services.map((service) => (
                            <div key={service.id} className="service-card">
                                <div className="service-icon">{service.icon}</div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-desc">{service.description}</p>
                                <ul className="service-features">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <CheckCircle2 size={16} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="service-price">
                                    <DollarSign size={18} />
                                    <span>{service.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Process Section */}
                <section className="process-section">
                    <div className="section-header">
                        <h2 className="section-title">Quy trình làm việc</h2>
                        <p className="section-subtitle">
                            Quy trình đơn giản, minh bạch và hiệu quả
                        </p>
                    </div>
                    <div className="process-steps">
                        {processSteps.map((step, index) => (
                            <div key={step.step} className="process-step">
                                <div className="step-number">{step.step}</div>
                                <div className="step-content">
                                    <h4>{step.title}</h4>
                                    <p>{step.description}</p>
                                </div>
                                {index < processSteps.length - 1 && (
                                    <div className="step-connector">
                                        <ArrowRight size={20} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Why Choose Me */}
                <section className="why-section">
                    <div className="section-header">
                        <h2 className="section-title">Tại sao chọn tôi?</h2>
                    </div>
                    <div className="why-grid">
                        <div className="why-item">
                            <Clock size={24} />
                            <h4>Đúng deadline</h4>
                            <p>Cam kết bàn giao đúng thời hạn đã thỏa thuận</p>
                        </div>
                        <div className="why-item">
                            <Star size={24} />
                            <h4>Chất lượng cao</h4>
                            <p>Code sạch, tối ưu và dễ bảo trì</p>
                        </div>
                        <div className="why-item">
                            <MessageSquare size={24} />
                            <h4>Giao tiếp tốt</h4>
                            <p>Cập nhật tiến độ thường xuyên và phản hồi nhanh</p>
                        </div>
                        <div className="why-item">
                            <Rocket size={24} />
                            <h4>Công nghệ mới</h4>
                            <p>Sử dụng các công nghệ hiện đại và phổ biến</p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="faq-section">
                    <div className="section-header">
                        <h2 className="section-title">Câu hỏi thường gặp</h2>
                    </div>
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <h4 className="faq-question">{faq.q}</h4>
                                <p className="faq-answer">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="hire-cta-section">
                    <div className="hire-cta-content">
                        <h2>Sẵn sàng bắt đầu dự án?</h2>
                        <p>Liên hệ ngay để thảo luận về ý tưởng của bạn!</p>
                        <div className="hire-cta-buttons">
                            <a href="mailto:taithedev2003@gmail.com" className="cta-primary">
                                <MessageSquare size={20} />
                                taithedev2003@gmail.com
                            </a>
                            <a href="tel:0865370761" className="cta-secondary">
                                📞 0865 370 761
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default HireMe;
