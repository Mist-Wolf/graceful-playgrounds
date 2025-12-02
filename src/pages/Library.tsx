import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import headerImage from '../assets/images/b.jpg';

const Library = () => {
  const [activeCategory, setActiveCategory] = useState('Online Bible');

  const categories = [
    { icon: 'fa-book', name: 'Online Bible', color: 'bg-blue-500' },
    { icon: 'fa-video-camera', name: 'Online Meetings', color: 'bg-purple-500' },
    { icon: 'fa-child', name: 'Childrens', color: 'bg-pink-500' },
    { icon: 'fa-graduation-cap', name: 'Teenagers', color: 'bg-green-500' },
    { icon: 'fa-users', name: 'Family', color: 'bg-orange-500' },
    { icon: 'fa-calendar', name: 'Programs and Events', color: 'bg-red-500' },
  ];

  const resources = [
    { title: 'Online Bible Study', description: 'Access comprehensive Bible study materials and interactive lessons.', icon: 'fa-book-open' },
    { title: 'Video Sermons', description: 'Watch recorded sermons and teachings from our pastors.', icon: 'fa-video-camera' },
    { title: 'Children\'s Resources', description: 'Fun and educational content designed specifically for kids.', icon: 'fa-puzzle-piece' },
    { title: 'Family Devotionals', description: 'Strengthen your family\'s faith with guided devotional materials.', icon: 'fa-heart' },
    { title: 'Worship Music', description: 'Inspiring worship songs and hymns for personal or group use.', icon: 'fa-music' },
    { title: 'Prayer Resources', description: 'Guided prayers and meditation materials for spiritual growth.', icon: 'fa-praying-hands' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <div 
        className="relative bg-cover bg-center h-[500px]"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.55)), url(${headerImage})` 
        }}
      >
        <Navbar />
        <div className="flex items-center justify-center h-full">
          <div className="text-center px-4">
            <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-semibold mb-4">
              RESOURCE CENTER
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-bold mb-4 animate-slide-down">Library</h1>
            <p className="text-white/90 text-xl md:text-2xl animate-slide-up">Explore our spiritual resources and teachings</p>
          </div>
        </div>
      </div>
      
      {/* Library Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-xl sticky top-8">
              <div className="flex items-center gap-2 mb-6">
                <i className="fa fa-filter text-orange-600 text-xl"></i>
                <p className="text-2xl font-bold text-gray-800">Categories</p>
              </div>
              <nav className="space-y-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(category.name)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 text-left ${
                      activeCategory === category.name
                        ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg transform scale-105'
                        : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                    }`}
                  >
                    <i className={`fa ${category.icon} text-lg`}></i>
                    <span className="font-medium">{category.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
          
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Library Resources</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Explore our extensive collection of biblical resources, teachings, and multimedia content. 
                Select a category to discover materials tailored to your spiritual journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {resources.map((resource, index) => (
                <div 
                  key={index}
                  className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <i className={`fa ${resource.icon} text-2xl text-white`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-orange-600 transition-colors">{resource.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{resource.description}</p>
                      <button className="mt-4 text-orange-600 hover:text-orange-700 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                        Explore <i className="fa fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Featured Section */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="text-center mb-8">
                <i className="fa fa-star text-5xl text-orange-600 mb-4"></i>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">New This Week</h3>
                <p className="text-gray-700 text-lg">Check out our latest additions to the library</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <i className="fa fa-file-pdf-o text-4xl text-red-500 mb-3"></i>
                  <h4 className="font-bold text-gray-800 mb-2">Bible Study Guide</h4>
                  <p className="text-sm text-gray-600">Comprehensive study on Romans</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <i className="fa fa-headphones text-4xl text-blue-500 mb-3"></i>
                  <h4 className="font-bold text-gray-800 mb-2">Audio Sermon</h4>
                  <p className="text-sm text-gray-600">Faith in Challenging Times</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <i className="fa fa-gamepad text-4xl text-green-500 mb-3"></i>
                  <h4 className="font-bold text-gray-800 mb-2">Kids Game</h4>
                  <p className="text-sm text-gray-600">Bible Heroes Adventure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Library;
