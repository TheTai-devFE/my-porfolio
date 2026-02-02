import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navLinks } from '../data';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const location = useLocation();
    const navigate = useNavigate();

    // Handle scroll effect for background and glassmorphism
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll Spy - Improved to track all sections including hero
    useEffect(() => {
        if (location.pathname !== '/') {
            setActiveSection('');
            return;
        }

        const handleScrollSpy = () => {
            const sections = ['hero', 'about', 'projects', 'skills', 'timeline', 'connect'];
            const threshold = 200; // Trigger detection when section is 200px from top

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the top of the section is above the threshold 
                    // and the bottom is still below the threshold, it's the active one
                    if (rect.top <= threshold && rect.bottom >= threshold) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScrollSpy);
        handleScrollSpy();
        return () => window.removeEventListener('scroll', handleScrollSpy);
    }, [location.pathname]);

    // Smooth scroll handler
    const handleNavClick = (e, link) => {
        if (link.isSection) {
            e.preventDefault();
            const sectionId = link.to.replace('/#', '');

            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    const element = document.getElementById(sectionId);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            } else {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
            setIsMenuOpen(false);
        }
    };

    // Determine current active status
    const isLinkActive = (to) => {
        if (to.includes('#')) {
            const sectionId = to.split('#')[1];
            return activeSection === sectionId && location.pathname === '/';
        }
        return location.pathname === to;
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-60 p-4 md:p-6 transition-all duration-300 pointer-events-none">
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`max-w-4xl mx-auto border flex items-center justify-between px-4 md:px-6 py-3 md:py-4 rounded-full transition-all duration-500 pointer-events-auto ${isScrolled
                    ? 'glass-white border-gray-200/50 shadow-xl shadow-gray-200/20'
                    : 'bg-white/50 backdrop-blur-sm border-transparent'
                    }`}
            >
                {/* Logo */}
                <Link
                    to="/"
                    onClick={(e) => handleNavClick(e, { to: '/#hero', isSection: true })}
                    className="flex items-center gap-2 group shrink-0"
                >
                    <div className="w-8 h-8 md:w-9 md:h-9 bg-gray-900 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
                        <span className="text-white font-bold text-lg md:text-xl">T</span>
                    </div>
                    <span className="text-lg md:text-xl font-bold tracking-tight text-gray-900">
                        TheTai<span className="text-emerald-500">.</span>dev
                    </span>
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center bg-gray-100/50 rounded-full p-1.5 border border-gray-200/30">
                    <ul className="flex items-center gap-1">
                        {navLinks.map((link) => {
                            const active = isLinkActive(link.to);
                            return (
                                <li key={link.to} className="relative">
                                    <a
                                        href={link.to}
                                        onClick={(e) => handleNavClick(e, link)}
                                        className={`px-4 py-2 text-sm font-medium transition-colors relative flex items-center justify-center ${active ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
                                            }`}
                                    >
                                        <span className="relative z-10">{link.label}</span>
                                        {active && (
                                            <motion.div
                                                layoutId="nav-active"
                                                className="absolute inset-0 bg-white rounded-full shadow-sm z-0"
                                                transition={{ type: 'spring', duration: 0.6 }}
                                            />
                                        )}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-3">
                    <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href="/#connect"
                        onClick={(e) => handleNavClick(e, { to: '/#connect', isSection: true })}
                        className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all shadow-lg shadow-gray-200"
                    >
                        Let's talk
                    </motion.a>

                    {/* Mobile Toggle */}
                    <button
                        className="flex md:hidden items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 active:scale-90 transition-transform"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="md:hidden mt-4 mx-auto max-w-lg glass-white border border-gray-200 rounded-3xl p-6 shadow-2xl pointer-events-auto"
                    >
                        <ul className="space-y-2">
                            {navLinks.map((link) => {
                                const active = isLinkActive(link.to);
                                return (
                                    <li key={link.to}>
                                        <a
                                            href={link.to}
                                            onClick={(e) => handleNavClick(e, link)}
                                            className={`block px-5 py-3.5 rounded-2xl text-lg font-medium transition-all ${active
                                                ? 'bg-gray-900 text-white shadow-lg'
                                                : 'text-gray-600 hover:bg-gray-100'
                                                }`}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="mt-6 pt-6 border-t border-gray-100">
                            <a
                                href="/#connect"
                                className="flex items-center justify-center gap-3 w-full py-4 bg-gray-900 text-white font-semibold rounded-2xl shadow-xl active:scale-95 transition-transform"
                                onClick={(e) => handleNavClick(e, { to: '/#connect', isSection: true })}
                            >
                                Let's Talk
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Navbar;
