/**
 * Navigation Data
 * Edit this file to update navigation links
 */

// Main navigation links for Navbar
export const navLinks = [
    { to: '/', label: 'Home', isSection: false },
    { to: '/#about', label: 'About', isSection: true },
    { to: '/#skills', label: 'Skills', isSection: true },
    { to: '/#projects', label: 'Projects', isSection: true },
    { to: '/blog', label: 'Blog', isSection: false },
    // { to: '/hire-me', label: 'Hire Me', isSection: false },
];

// Footer navigation (can be different from main nav)
export const footerLinks = {
    main: [
        { to: '/', label: 'Home' },
        { to: '/#about', label: 'About' },
        { to: '/#projects', label: 'Projects' },
        { to: '/blog', label: 'Blog' },
    ],
    pages: [
        { to: '/hire-me', label: 'Hire Me' },
        { to: '/#connect', label: 'Contact' },
    ],
};
