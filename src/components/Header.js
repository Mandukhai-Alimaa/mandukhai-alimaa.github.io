import React, { useState, useContext } from 'react';
import { ThemeContext } from './App.js';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header className="header">
            <div className="name">
                <h1>Mandukhai Alimaa</h1>
            </div>
            <div className="header-controls">
                <button className="theme-toggle theme-toggle-mobile" onClick={toggleTheme} title={`Switch to ${theme === 'day' ? 'night' : 'day'} mode`}>
                    {theme === 'day' ? '🌙' : '☀️'}
                </button>
                <button className="menu-toggle" onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <span>&times;</span> // Close icon when menu is open
                    ) : (
                        <span>&#9776;</span> // Hamburger icon when menu is closed
                    )}
                </button>
            </div>
            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                <ul className="nav-links">
                    <li>
                        <button className="theme-toggle theme-toggle-desktop" onClick={toggleTheme} title={`Switch to ${theme === 'day' ? 'night' : 'day'} mode`}>
                            {theme === 'day' ? '🌙' : '☀️'}
                        </button>
                        <a href="#resume-section">Resume</a>
                    </li>
                    <li><a href="#project-section">Projects</a></li>
                    <li><a href="#course-section">Course Work</a></li>
                    <li><a href="#recommendation-section">Recommendation Letters</a></li>
                    <li><a href="#contact-section">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
