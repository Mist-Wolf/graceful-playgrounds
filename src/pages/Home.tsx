import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import FeaturedCard from '../components/FeaturedCard';
import Footer from '../components/Footer';
import DailyVerse from '../components/DailyVerse';
import heroImage from '../assets/images/b.jpg';
import assetImage from '../assets/images/Asset 3.png';
import featuredImage1 from '../assets/images/R.jfif';
import featuredImage2 from '../assets/images/4576406.jpg';
import featuredImage3 from '../assets/images/1446922.jpg';
import aboutImage from '../assets/images/pexels-pnw-production-7328448.jpg';
import galleryImage1 from '../assets/images/OIP.jfif';
import galleryImage2 from '../assets/images/rr.jpg';
import galleryImage3 from '../assets/images/mark-fletcher-brown-FbYccpZ5NAA-unsplash.jpg';

const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center min-h-screen flex flex-col">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/50"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          <Navbar />
        
        {/* Hero Content - Centered */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 text-center">
          <img 
            src={assetImage} 
            alt="Welcome" 
            className="w-32 h-32 md:w-40 md:h-40 mb-6 drop-shadow-2xl animate-bounce" 
          />
          <p className="text-white text-xl md:text-2xl mb-3 font-light tracking-wide animate-fade-in">YOU'RE WELCOME</p>
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-8 max-w-4xl leading-tight animate-fade-in animation-delay-150">
            "JESUS CHRIST LOVES YOU"
          </h1>
          <Link 
            to="/about" 
            className="group text-white bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-2"
          >
            Learn More About Us
            <i className="fa fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </Link>
        </div>
        
        {/* About Preview Section - Positioned at bottom */}
        <div className="px-4 pb-8">
          <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-6 transform hover:scale-[1.02] transition-all duration-300">
            <img 
              src={featuredImage1} 
              alt="About" 
              className="w-full md:w-48 h-40 md:h-32 object-cover rounded-xl shadow-lg" 
            />
            <div className="flex-1 text-center md:text-left">
              <Link to="/about" className="text-orange-600 hover:text-orange-700 text-lg font-semibold hover:underline transition-colors inline-flex items-center gap-2">
                About Our Ministry <i className="fa fa-external-link text-sm"></i>
              </Link>
              <h2 className="text-xl md:text-2xl font-bold mt-2 text-gray-800 leading-tight">
                Preaching. Worship. Entertainment. An Online Family
              </h2>
            </div>
          </div>
        </div>
        </div>
      </div>
      
      {/* Daily Verse Section */}
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-20">
        <DailyVerse />
      </div>
      
      {/* Featured Section */}
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-20">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">Featured Teachings</h2>
            <p className="text-gray-600">Explore our latest biblical insights and sermons</p>
          </div>
          <Link 
            to="/news" 
            className="text-orange-600 hover:text-orange-700 font-semibold flex items-center gap-2 group"
          >
            View All Events
            <i className="fa fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          <FeaturedCard 
            image={featuredImage1}
            date="24 August"
            title="John 3:4"
            author="Brother Kane"
          />
          <FeaturedCard 
            image={featuredImage2}
            date="02 May"
            title="Mark 5:7"
            author="Brother Davies"
          />
          <FeaturedCard 
            image={featuredImage3}
            date="19 March"
            title="Psalm 26"
            author="Brother Davies"
          />
        </div>
        
        {/* Call to Action */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gradient-to-br from-orange-50 to-amber-50 p-8 md:p-12 rounded-2xl shadow-lg">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 leading-tight">
              Share The Word of God Online
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Let us rejoice as we live our lives as <em className="text-orange-600 font-semibold">Children of God</em> by spreading 
              His Word across the globe and touching hearts worldwide.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center lg:items-start bg-white p-8 rounded-xl shadow-md">
            <i className="fa fa-book text-5xl text-orange-600 mb-4"></i>
            <p className="text-gray-700 mb-6 text-center lg:text-left">
              Discover our recently added videos, games, music, articles and inspiring news
            </p>
            <Link 
              to="/library" 
              className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-10 py-4 rounded-full hover:from-orange-700 hover:to-orange-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
            >
              Explore Library
              <i className="fa fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
      
      {/* About Children Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center max-w-7xl mx-auto px-4 md:px-8">
          <div className="lg:w-1/2">
            <img 
              src={aboutImage} 
              alt="Children Ministry" 
              className="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500" 
            />
          </div>
          <div className="lg:w-1/2">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              KIDS MINISTRY
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Investing in the <span className="text-orange-600">Next Generation</span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Have you got children that you would like to bring to Jesus? We run a specific program just 
              for kids! Our aim is to make sure every kid is brought to Jesus Christ.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <i className="fa fa-check-circle text-orange-600 text-xl mt-1 flex-shrink-0"></i>
                <p className="text-gray-700">Bible education specifically designed for children</p>
              </div>
              <div className="flex items-start gap-3">
                <i className="fa fa-check-circle text-orange-600 text-xl mt-1 flex-shrink-0"></i>
                <p className="text-gray-700">Entertainment based on Bible stories and animated events</p>
              </div>
              <div className="flex items-start gap-3">
                <i className="fa fa-check-circle text-orange-600 text-xl mt-1 flex-shrink-0"></i>
                <p className="text-gray-700">Interactive quizzes and games for engaging learning</p>
              </div>
            </div>
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-lg group"
            >
              Learn More About Our Programs
              <i className="fa fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Gallery Section */}
      <div className="py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          <div className="relative overflow-hidden group h-64 md:h-80">
            <img 
              src={galleryImage1} 
              alt="Gallery 1" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white text-xl font-semibold">Community Worship</p>
            </div>
          </div>
          <div className="relative overflow-hidden group h-64 md:h-80">
            <img 
              src={galleryImage2} 
              alt="Gallery 2" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white text-xl font-semibold">Fellowship & Prayer</p>
            </div>
          </div>
          <div className="relative overflow-hidden group h-64 md:h-80">
            <img 
              src={galleryImage3} 
              alt="Gallery 3" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white text-xl font-semibold">Teaching & Growth</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-orange-600 text-white w-14 h-14 rounded-full shadow-2xl hover:bg-orange-700 transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <i className="fa fa-arrow-up text-xl"></i>
        </button>
      )}
    </div>
  );
};

export default Home;
