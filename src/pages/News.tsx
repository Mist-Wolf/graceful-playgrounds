import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import headerImage from '../assets/images/pexels-arshad-sutar-1749303.jpg';
import eventImage1 from '../assets/images/1446922.jpg';
import eventImage2 from '../assets/images/4576406.jpg';
import newsImage1 from '../assets/images/choice1.jpg';
import newsImage2 from '../assets/images/pexels-danny-mwebaza-2903236.jpg';

const News = () => {
  const events = [
    { image: eventImage1, date: '24 August', title: 'John 3:4', author: 'Brother Kane' },
    { image: eventImage2, date: '02 May', title: 'Mark 5:7', author: 'Brother Davies' },
    { image: eventImage1, date: '19 March', title: 'Psalm 26', author: 'Brother Davies' },
  ];

  const newsItems = [
    { date: { day: 24, month: 'March' }, text: 'This week will be having a Bible Teaching specifically for youths.' },
    { date: { day: 15, month: 'April' }, text: 'Children will be having a Quiz. There will be people from other villages.' },
    { date: { day: 30, month: 'May' }, text: 'Join us for our monthly prayer and worship service this weekend.' },
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
            <h1 className="text-white text-5xl md:text-7xl font-bold mb-4 animate-slide-down">News & Events</h1>
            <p className="text-white/90 text-xl md:text-2xl animate-slide-up">Stay updated with our latest teachings and activities</p>
          </div>
        </div>
      </div>
      
      {/* Events Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        {/* Featured Events */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              FEATURED
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Upcoming Teachings</h2>
            <p className="text-gray-600 text-lg">Join us for these inspiring biblical studies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={event.image} 
                    alt="Event" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <i className="fa fa-calendar text-orange-600"></i>
                    <h5 className="text-sm font-medium text-gray-500">{event.date}</h5>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 pt-3 border-t border-gray-200">
                    <i className="fa fa-user-circle text-gray-400"></i>
                    <h5 className="text-sm text-gray-600">{event.author}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Latest News */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              LATEST UPDATES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Recent Announcements</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* News with Images */}
            <div className="space-y-6">
              <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 p-4">
                  <img 
                    src={newsImage1} 
                    alt="News" 
                    className="w-32 h-32 object-cover rounded-lg border-4 border-orange-200 group-hover:border-orange-400 transition-colors" 
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <i className="fa fa-bullhorn text-orange-600"></i>
                      <span className="text-xs font-semibold text-orange-600">ANNOUNCEMENT</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      This week will be having a Bible Teaching specifically for youths.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 p-4">
                  <img 
                    src={newsImage2} 
                    alt="News" 
                    className="w-32 h-32 object-cover rounded-lg border-4 border-orange-200 group-hover:border-orange-400 transition-colors" 
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <i className="fa fa-bullhorn text-orange-600"></i>
                      <span className="text-xs font-semibold text-orange-600">ANNOUNCEMENT</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Special family worship service this Sunday with guest speaker.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Timeline News */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <i className="fa fa-clock-o text-orange-600"></i>
                Upcoming Events
              </h3>
              <div className="space-y-6">
                {newsItems.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center w-16 shadow-md bg-white rounded-lg overflow-hidden">
                      <div className="w-full h-3 bg-orange-600"></div>
                      <div className="text-center py-2">
                        <div className="text-2xl font-bold text-gray-800">{item.date.day}</div>
                        <div className="text-xs text-gray-600">{item.date.month}</div>
                      </div>
                    </div>
                    <div className="flex-1 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <p className="text-gray-700">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default News;
