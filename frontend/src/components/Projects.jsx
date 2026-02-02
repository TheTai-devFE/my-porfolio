import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import {
    ArrowRight,
    ArrowUpRight,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    X,
} from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { heroSocialLinks, projects } from '../data';

/**
 * Image Carousel Component for Modal
 */
function ImageCarousel({ images, title }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const goToPrevious = () => {
        setIsLoading(true);
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setIsLoading(true);
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden group/carousel">
            {/* Loading Placeholder */}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="w-10 h-10 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
                </div>
            )}

            {/* Main Image Container */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt={`${title} - Image ${currentIndex + 1}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className={`max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                        onLoad={() => setIsLoading(false)}
                        onError={() => setIsLoading(false)}
                    />
                </AnimatePresence>
            </div>

            {/* Dark overlay for better image visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/5 via-transparent to-gray-900/10 pointer-events-none" />

            {/* Navigation Arrows */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/95 hover:bg-white rounded-full shadow-xl opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:scale-110 z-10"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={20} className="text-gray-800" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/95 hover:bg-white rounded-full shadow-xl opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:scale-110 z-10"
                        aria-label="Next image"
                    >
                        <ChevronRight size={20} className="text-gray-800" />
                    </button>
                </>
            )}

            {/* Dots Indicator */}
            {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-black/30 px-3 py-2 rounded-full backdrop-blur-sm">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setIsLoading(true);
                                setCurrentIndex(idx);
                            }}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex
                                ? 'bg-white w-6'
                                : 'bg-white/50 hover:bg-white/75'
                                }`}
                            aria-label={`Go to image ${idx + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

/**
 * Project Detail Modal Component
 */
function ProjectModal({ project, isOpen, onClose }) {
    // Close on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    const infoItems = project ? [
        { label: 'Type:', value: project.type },
        { label: 'Technologies:', value: project.languages?.join(', ') },
        { label: 'Time:', value: project.platform },
        {
            label: 'Links:',
            value: project.links
                ? Object.entries(project.links)
                    .filter(([_, url]) => url && url !== '#')
                    .map(([label, url]) => ({
                        label: label.charAt(0).toUpperCase() + label.slice(1),
                        url
                    }))
                : project.liveUrl
                    ? [{ label: 'Live URL', url: project.liveUrl }]
                    : null,
            isLink: true
        },
    ] : [];

    return (
        <AnimatePresence>
            {isOpen && project && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
                    role="dialog"
                    aria-modal="true"
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
                            aria-label="Close modal"
                        >
                            <X size={20} className="text-gray-700" />
                        </button>

                        <div className="flex flex-col lg:flex-row h-full max-h-[90vh] overflow-y-auto">
                            {/* Left Side - Image Carousel */}
                            <div className="lg:w-1/2 h-64 lg:h-auto lg:min-h-[500px] shrink-0">
                                <ImageCarousel
                                    images={project.images}
                                    title={project.title}
                                />
                            </div>

                            {/* Right Side - Content */}
                            <div className="lg:w-1/2 p-8 lg:p-10">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {/* Title */}
                                    <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-6 leading-tight">
                                        {project.title}
                                    </h2>

                                    {/* Description */}
                                    <div className="mb-6">
                                        {Array.isArray(project.description) ? (
                                            <ul className="space-y-2">
                                                {project.description.map((point, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-gray-600 leading-relaxed">
                                                        <span className="text-gray-400 shrink-0">-</span>
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-gray-600 leading-relaxed">
                                                {project.description}
                                            </p>
                                        )}
                                    </div>

                                    {project.longDescription && (
                                        <p className="text-gray-600 leading-relaxed mb-8">
                                            {project.longDescription}
                                        </p>
                                    )}

                                    {/* Project Info */}
                                    <div className="space-y-4 border-t border-gray-100 pt-6">
                                        {infoItems.map(
                                            (item, idx) =>
                                                item.value && (
                                                    <div
                                                        key={idx}
                                                        className="flex items-start gap-4"
                                                    >
                                                        <span className="text-gray-900 font-medium min-w-[120px]">
                                                            {item.label}
                                                        </span>
                                                        <div className="flex-1">
                                                            {Array.isArray(item.value) ? (
                                                                <div className="flex flex-wrap gap-x-4 gap-y-2">
                                                                    {item.value.map((link, lIdx) => (
                                                                        <a
                                                                            key={lIdx}
                                                                            href={link.url.startsWith('http') ? link.url : `https://${link.url}`}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 hover:underline transition-colors font-medium"
                                                                        >
                                                                            {link.label}
                                                                            <ArrowUpRight size={14} />
                                                                        </a>
                                                                    ))}
                                                                </div>
                                                            ) : item.isLink ? (
                                                                <a
                                                                    href={item.value.startsWith('http') ? item.value : `https://${item.value}`}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 hover:underline transition-colors font-medium"
                                                                >
                                                                    {item.value}
                                                                    <ArrowUpRight size={14} />
                                                                </a>
                                                            ) : (
                                                                <span className="text-gray-600">
                                                                    {item.value}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                )
                                        )}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

/**
 * Project Card Component
 */
function ProjectCard({ project, onClick }) {
    const [isLoading, setIsLoading] = useState(true);
    const [imageError, setImageError] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -8 }}
            className="group cursor-pointer"
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onClick()}
        >
            {/* Card Image Container */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                {/* Loading Skeleton */}
                {isLoading && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse" />
                )}

                {/* Image Container with centering */}
                <div className="absolute inset-0 flex items-center justify-center p-3">
                    {!imageError ? (
                        <img
                            src={project.thumbnail}
                            alt={project.shortTitle}
                            className={`max-w-full max-h-full w-auto h-auto object-contain rounded-xl shadow-lg transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-xl ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                            onLoad={() => setIsLoading(false)}
                            onError={() => {
                                setIsLoading(false);
                                setImageError(true);
                            }}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-xl">
                            <span className="text-6xl">{project.image || '🖼️'}</span>
                        </div>
                    )}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
            </div>

            {/* Card Content */}
            <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                        {project.shortTitle}
                    </h3>
                    <p className="text-sm text-gray-500">{project.category}</p>
                </div>
                {/* Arrow Button */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-white group-hover:bg-gray-700 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                    <ArrowRight size={18} />
                </motion.button>
            </div>
        </motion.div>
    );
}

/**
 * Main Projects Section Component
 */
function Projects() {
    const [showAll, setShowAll] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const visibleProjects = showAll ? projects : projects.slice(0, 3);

    // Get GitHub link from socials data
    const githubLink = heroSocialLinks?.find((link) => link.name === 'GitHub');

    const handleProjectClick = useCallback((project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    return (
        <LayoutGroup>
            <section id="projects" className="py-24 px-6 overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="flex items-end justify-between mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">
                                Projects
                            </p>
                            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
                                Selected Work
                            </h2>
                        </motion.div>

                        {githubLink && (
                            <motion.a
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                href={githubLink.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                            >
                                View all
                                <ArrowUpRight size={16} />
                            </motion.a>
                        )}
                    </div>

                    {/* Projects Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {visibleProjects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    onClick={() => handleProjectClick(project)}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* See More Button */}
                    {projects.length > 3 && (
                        <motion.div
                            layout
                            className="text-center mt-12"
                        >
                            <motion.button
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setShowAll(!showAll)}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all"
                            >
                                {showAll ? 'Show Less' : 'See More Projects'}
                                <ChevronDown
                                    size={18}
                                    className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                                />
                            </motion.button>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Project Detail Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </LayoutGroup>
    );
}

export default Projects;
