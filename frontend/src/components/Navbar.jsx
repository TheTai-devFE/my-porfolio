import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { navLinks, personalInfo } from '../data';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Handle page scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle section navigation (smooth scroll)
    const handleNavClick = (e, link) => {
        if (link.isSection) {
            e.preventDefault();
            const sectionId = link.to.replace('/#', '');

            // If we're not on homepage, navigate first then scroll
            if (location.pathname !== '/') {
                navigate('/');
                // Wait for navigation, then scroll
                setTimeout(() => {
                    const element = document.getElementById(sectionId);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
            } else {
                // Already on homepage, just scroll
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
            setIsMenuOpen(false);
        }
    };

    // Check if a section link is active based on scroll position
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        if (location.pathname !== '/') {
            setActiveSection('');
            return;
        }

        const handleScrollSpy = () => {
            const sections = ['about', 'skills', 'projects', 'connect'];
            const scrollPosition = window.scrollY + 150;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        return;
                    }
                }
            }
            // If near top of page
            if (window.scrollY < 300) {
                setActiveSection('');
            }
        };

        window.addEventListener('scroll', handleScrollSpy);
        handleScrollSpy(); // Initial check
        return () => window.removeEventListener('scroll', handleScrollSpy);
    }, [location.pathname]);

    // Determine if a nav link is active
    const isLinkActive = (link) => {
        if (link.isSection) {
            const sectionId = link.to.replace('/#', '');
            return activeSection === sectionId && location.pathname === '/';
        }
        return location.pathname === link.to;
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 p-5">
            {/* Navbar Container - Floating Minimal */}
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`max-w-6xl mx-auto border rounded-full px-6 py-4 flex items-center justify-between transition-all duration-300 ${isScrolled
                    ? 'glass-white border-gray-200 shadow-lg'
                    : 'glass-white border-gray-200 shadow-sm'
                    }`}
            >
                {/* Logo - Typography Based */}
                <NavLink to="/" className="group flex items-center gap-2">
                    <img src="/logo.svg" alt="TheTai Logo" className="w-8 h-8 rounded-lg" />
                    <span className="text-xl font-medium tracking-tight text-gray-900 group-hover:text-gray-600 transition-colors">
                        taithe<span className="text-gray-400">.</span><span className="font-bold">dev</span>
                    </span>
                </NavLink>

                {/* Desktop Navigation - Clean Text Links */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.to}>
                            {link.isSection ? (
                                <a
                                    href={link.to}
                                    onClick={(e) => handleNavClick(e, link)}
                                    className={`text-sm font-medium transition-colors duration-200 ${isLinkActive(link)
                                        ? 'text-gray-900'
                                        : 'text-gray-500 hover:text-gray-900'
                                        }`}
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <NavLink
                                    to={link.to}
                                    className={({ isActive }) =>
                                        `text-sm font-medium transition-colors duration-200 ${isActive
                                            ? 'text-gray-900'
                                            : 'text-gray-500 hover:text-gray-900'
                                        }`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            )}
                        </li>
                    ))}
                </ul>

                {/* CTA Button - Minimal */}
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`mailto:${personalInfo.email}`}
                    className="hidden md:block px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
                >
                    Get in Touch
                </motion.a>

                {/* Mobile Menu Toggle */}
                <button
                    className="flex md:hidden items-center justify-center w-10 h-10 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        className="md:hidden mt-3 mx-auto max-w-6xl glass-white border border-gray-200 rounded-2xl p-5 shadow-lg"
                    >
                        <ul className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <li key={link.to}>
                                    {link.isSection ? (
                                        <a
                                            href={link.to}
                                            onClick={(e) => handleNavClick(e, link)}
                                            className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${isLinkActive(link)
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                                }`}
                                        >
                                            {link.label}
                                        </a>
                                    ) : (
                                        <NavLink
                                            to={link.to}
                                            className={({ isActive }) =>
                                                `block px-4 py-3 rounded-xl text-base font-medium transition-colors ${isActive
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                                }`
                                            }
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {link.label}
                                        </NavLink>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="block mt-4 px-5 py-3 bg-gray-900 text-white text-center text-base font-medium rounded-xl hover:bg-gray-800 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Get in Touch
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Navbar;
