/**
 * Navigation Data
 * Edit this file to update navigation links
 */

// Main navigation links for Navbar
export const navLinks = [
    { to: '/#hero', label: 'Home', isSection: true },
    { to: '/#about', label: 'About', isSection: true },
    { to: '/#projects', label: 'Projects', isSection: true },
    { to: '/#skills', label: 'Skills', isSection: true },
    { to: '/#timeline', label: 'Timeline', isSection: true },


];

// Footer navigation (can be different from main nav)
export const footerLinks = {
    main: [
        { to: '/#hero', label: 'Home' },
        { to: '/#about', label: 'About' },
        { to: '/#projects', label: 'Projects' },
    ],
    pages: [
        { to: '/hire-me', label: "Let's talk" },
        { to: '/#connect', label: 'Contact' },
    ],
};
