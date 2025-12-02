import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/images/Asset 3.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Mission */}
          <div className="flex flex-col items-start">
            <img src={logo} alt="Logo" className="w-28 h-28 mb-4 drop-shadow-lg" />
            <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Graceful Playgrounds</h2>
            <p className="text-gray-300 leading-relaxed">Spreading the Word of God and nurturing faith in the digital age.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-amber-400">Quick Links</h3>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2">
                <i className="fa fa-angle-right"></i> Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2">
                <i className="fa fa-angle-right"></i> About Us
              </Link>
              <Link to="/library" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2">
                <i className="fa fa-angle-right"></i> Library
              </Link>
              <Link to="/news" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2">
                <i className="fa fa-angle-right"></i> News & Events
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2">
                <i className="fa fa-angle-right"></i> Contact Us
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-amber-400">Connect With Us</h3>
            <p className="text-gray-300 mb-4">Join our community and stay updated with the latest teachings and events.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition-all duration-300 transform hover:scale-110">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition-all duration-300 transform hover:scale-110">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition-all duration-300 transform hover:scale-110">
                <i className="fa fa-youtube-play"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition-all duration-300 transform hover:scale-110">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700 pt-12 pb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2 text-amber-400">Stay Inspired</h3>
            <p className="text-gray-300 mb-6">Subscribe to receive daily devotionals and updates</p>
            {subscribed ? (
              <div className="bg-green-600 text-white py-3 px-6 rounded-lg inline-flex items-center gap-2 animate-fade-in">
                <i className="fa fa-check-circle"></i>
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-600 transition-colors text-white"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Graceful Playgrounds. All rights reserved. | Built with ❤️ for spreading God's love
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
