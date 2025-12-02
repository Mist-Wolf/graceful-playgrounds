import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import headerImage from '../assets/images/pexels-arshad-sutar-1749303.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    requestType: 'prayer',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', requestType: 'prayer', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            <h1 className="text-white text-5xl md:text-7xl font-bold mb-4 animate-fade-in">Contact Us</h1>
            <p className="text-white/90 text-xl md:text-2xl animate-fade-in">We're here to pray with you and support your journey</p>
          </div>
        </div>
      </div>
      
      {/* Contact Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="mb-8">
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                GET IN TOUCH
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
              <p className="text-gray-600 text-lg">
                Whether you need prayer, have questions, or want to share your testimony, we'd love to hear from you.
              </p>
            </div>

            {submitted && (
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded animate-fade-in">
                <div className="flex items-center gap-2">
                  <i className="fa fa-check-circle text-xl"></i>
                  <p className="font-semibold">Thank you! We've received your message and will be in prayer.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Your Name <span className="text-orange-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email Address <span className="text-orange-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="requestType" className="block text-gray-700 font-semibold mb-2">
                  Request Type <span className="text-orange-600">*</span>
                </label>
                <select
                  id="requestType"
                  name="requestType"
                  value={formData.requestType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none transition-colors"
                >
                  <option value="prayer">Prayer Request</option>
                  <option value="question">Question</option>
                  <option value="testimony">Testimony</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Your Message <span className="text-orange-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-600 focus:outline-none transition-colors resize-none"
                  placeholder="Share your prayer request or message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-lg hover:from-orange-700 hover:to-orange-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <i className="fa fa-paper-plane"></i>
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Prayer Times */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <i className="fa fa-info-circle text-orange-600"></i>
                Connect With Us
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa fa-envelope text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">contact@gracefulplaygrounds.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa fa-phone text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Prayer Line</h4>
                    <p className="text-gray-600">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa fa-clock-o text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Response Time</h4>
                    <p className="text-gray-600">We respond within 24-48 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <i className="fa fa-praying-hands text-orange-600"></i>
                Prayer Commitment
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our dedicated prayer team commits to praying over every request we receive. You are not alone in your journey.
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  "Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours." - Mark 11:24
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl p-8 shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Follow Our Journey</h3>
              <p className="mb-6 text-orange-100">Stay connected through social media for daily inspiration and updates</p>
              <div className="flex gap-4">
                <button className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors">
                  <i className="fa fa-facebook text-2xl"></i>
                </button>
                <button className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors">
                  <i className="fa fa-twitter text-2xl"></i>
                </button>
                <button className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors">
                  <i className="fa fa-instagram text-2xl"></i>
                </button>
                <button className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors">
                  <i className="fa fa-youtube-play text-2xl"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
