import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { Menu, X, Globe } from 'lucide-react';

const Header: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/products', label: t('nav.products') },
    { path: '/partnership', label: t('nav.partnership') },
    { path: '/recipes-blog', label: t('nav.recipes') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const activeLinkClass = 'text-brand-green font-semibold';
  const inactiveLinkClass = 'text-gray-600 hover:text-brand-green transition-colors duration-300';

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* ✅ Updated Logo */}
          <NavLink to="/" className="flex-shrink-0 group">
            <img
              src="/logo.svg"
              alt="Dollar Cardamoms Logo"
              className="w-16 h-auto filter grayscale brightness-90 transition duration-300 group-hover:grayscale-0 group-hover:brightness-100 group-hover:invert-[25%] group-hover:sepia group-hover:saturate-[400%] group-hover:hue-rotate-[5deg] group-hover:[filter:brightness(1)_sepia(1)_hue-rotate(10deg)_saturate(300%)_contrast(0.9)]"
              style={{ transitionProperty: 'filter, transform' }}
            />
          </NavLink>

          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? activeLinkClass : inactiveLinkClass
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="hidden md:flex items-center text-gray-600 hover:text-brand-green transition-colors duration-300"
            >
              <Globe size={20} className="me-2" />
              <span>{language === 'en' ? 'عربي' : 'English'}</span>
            </button>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-brand-green"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'bg-brand-green text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <button
            onClick={() => {
              toggleLanguage();
              setIsOpen(false);
            }}
            className="w-full flex items-center justify-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
          >
            <Globe size={20} className="me-2" />
            <span>{language === 'en' ? 'عربي' : 'English'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
