import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Moon, Sun } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';
import LOGO from '../../Images/1500x500.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="py-4 backdrop-blur-sm bg-neutral-900/80 sticky top-0 z-50 border-b border-cyan-500/20">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
  <img
    src={LOGO}
    alt="Logo"
    className="h-20 w-20 rounded-full object-cover"
  />
  <span className="text-xl font-mono font-bold text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300">
    0x0shad0w
  </span>
</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-cyan-400 transition-colors duration-300 px-1 py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-cyan-500 after:transition-all after:duration-300 ${
                  location.pathname === link.path
                    ? 'text-cyan-500 after:w-full'
                    : 'after:w-0 hover:after:w-full'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-neutral-800 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-indigo-400" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-neutral-800 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-indigo-400" />
            )}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-neutral-800 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-cyan-500" />
            ) : (
              <Menu className="h-6 w-6 text-cyan-500" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-neutral-900 border-b border-cyan-500/20 py-4 backdrop-blur-sm bg-opacity-95 z-50 animate-fadeIn">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`py-2 px-4 ${
                  location.pathname === link.path
                    ? 'text-cyan-500 bg-neutral-800/50'
                    : 'hover:bg-neutral-800/50 hover:text-cyan-400'
                } rounded transition-colors duration-300`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;