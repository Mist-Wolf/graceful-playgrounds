import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/images/Untitled-1.png';
import SearchBar from './SearchBar';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', icon: 'fa-home', label: 'HOME' },
    { to: '/library', icon: 'fa-music', label: 'LIBRARY' },
    { to: '/news', icon: 'fa-globe', label: 'NEWS' },
    { to: '/about', icon: 'fa-users', label: 'ABOUT US' },
    { to: '/contact', icon: 'fa-envelope', label: 'CONTACT' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="relative flex items-center justify-between h-32 px-6 lg:px-12 bg-gradient-to-b from-black/70 to-black/50 backdrop-blur-sm">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3 px-4 py-3 border-l-2 border-t-2 border-b-2 border-amber-300/60 text-white rounded-l-md hover:border-amber-400 transition-all duration-300 shadow-lg">
        <img src={logo} alt="Graceful Playgrounds Logo" className="w-14 h-14 object-contain drop-shadow-lg" />
        <h2 className="hidden sm:block text-sm md:text-base lg:text-lg font-bold tracking-wide">GRACEFUL PLAYGROUNDS</h2>
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-4 lg:gap-6">
        <div className="flex items-center gap-6 lg:gap-8 text-white">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 pb-1 ${
                isActive(link.to)
                  ? 'border-b-2 border-amber-400 text-amber-400'
                  : 'hover:border-b-2 hover:border-white hover:text-amber-200'
              }`}
            >
              <i className={`fa ${link.icon}`}></i>
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
        <SearchBar />
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-white p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        <i className={`fa text-2xl ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-32 left-0 right-0 bg-black/95 backdrop-blur-md md:hidden z-50 shadow-2xl">
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-8 py-4 text-white transition-all duration-300 ${
                  isActive(link.to)
                    ? 'bg-amber-600 border-l-4 border-amber-400'
                    : 'hover:bg-amber-600/20 hover:border-l-4 hover:border-amber-400'
                }`}
              >
                <i className={`fa ${link.icon}`}></i>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
