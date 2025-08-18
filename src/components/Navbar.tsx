'use client';
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest('.nav-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div className={`nav-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <Link href="/" onClick={closeMenu}>
          Muhammad Hamza Ashraf
        </Link>
      </div>
      
      {/* Hamburger Menu Button */}
      <button 
        className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Links */}
      <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <button onClick={() => scrollToSection('about')} className="nav-link">
          About
        </button>
        <button onClick={() => scrollToSection('skills')} className="nav-link">
          Skills
        </button>
        <button onClick={() => scrollToSection('projects')} className="nav-link">
          Projects
        </button>
        <button onClick={() => scrollToSection('contact')} className="nav-link">
          Contact
        </button>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-btn" onClick={closeMenu}>
          Resume
        </a>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
    </div>
  )
}

export default Navbar;