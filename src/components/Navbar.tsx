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
    <>
      {/* Mobile Sidebar Overlay - Outside nav for proper layering */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998]"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-gray-900 to-black z-[9999] transform transition-transform duration-300 ease-in-out ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } shadow-2xl`}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
            <h2 className="text-white font-bold text-sm">GRACEFUL PLAYGROUNDS</h2>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-amber-400 transition-colors"
            aria-label="Close menu"
          >
            <i className="fa fa-times text-2xl"></i>
          </button>
        </div>

        {/* Sidebar Navigation */}
        <div className="flex flex-col py-6 overflow-y-auto h-[calc(100%-80px)]">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-4 px-6 py-4 text-white transition-all duration-300 ${
                isActive(link.to)
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 border-l-4 border-amber-400 shadow-lg'
                  : 'hover:bg-gray-800 hover:border-l-4 hover:border-amber-400'
              }`}
            >
              <i className={`fa ${link.icon} text-xl`}></i>
              <span className="font-semibold">{link.label}</span>
            </Link>
          ))}

          {/* Search in Sidebar */}
          <div className="px-6 py-4 mt-4 border-t border-gray-700">
            <p className="text-gray-400 text-xs uppercase mb-3 font-semibold">Quick Search</p>
            <SearchBar />
          </div>

          {/* Social Links in Sidebar */}
          <div className="px-6 py-4 mt-auto border-t border-gray-700">
            <p className="text-gray-400 text-xs uppercase mb-3 font-semibold">Follow Us</p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-all duration-300 transform hover:scale-110">
                <i className="fa fa-facebook text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-all duration-300 transform hover:scale-110">
                <i className="fa fa-twitter text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-all duration-300 transform hover:scale-110">
                <i className="fa fa-youtube-play text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-all duration-300 transform hover:scale-110">
                <i className="fa fa-instagram text-white"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="relative flex items-center justify-between h-32 px-6 lg:px-12 bg-gradient-to-b from-black/70 to-black/50 backdrop-blur-sm z-50">
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
          className="md:hidden text-white p-2 focus:outline-none z-[10000]"
          aria-label="Toggle menu"
        >
          <i className={`fa text-2xl ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
