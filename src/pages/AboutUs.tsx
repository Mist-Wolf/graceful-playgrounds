import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import headerImage from '../assets/images/2.jpg';

const AboutUs = () => {
  const values = [
    { icon: 'fa-heart', title: 'Compassion', description: 'Showing God\'s love through our actions' },
    { icon: 'fa-hand-peace-o', title: 'Grace', description: 'Extending forgiveness and kindness' },
    { icon: 'fa-praying-hands', title: 'Humility', description: 'Serving with a humble heart' },
    { icon: 'fa-users', title: 'Community', description: 'Building strong faith connections' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header 
        className="relative bg-cover bg-center h-[500px]"
        style={{ 
          backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.7), rgba(199, 69, 22, 0.6)), url(${headerImage})` 
        }}
      >
        <Navbar />
        <div className="flex items-center justify-center h-full">
          <div className="text-center px-4">
            <h1 className="text-white text-5xl md:text-7xl font-bold mb-4 animate-slide-down">About Us</h1>
            <p className="text-white/90 text-xl md:text-2xl animate-slide-up">Discover our mission and journey</p>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Welcome Section */}
        <section className="py-20">
          <div className="text-center mb-12">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR MISSION
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Welcome to Graceful Living
            </h2>
            <p className="text-xl text-orange-600 font-semibold">Sharing God's Love Since 2010</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 md:p-12 shadow-lg mb-12">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              At Graceful Living, we are dedicated to fostering a community centered on the 
              boundless love and teachings of Jesus Christ. Our mission is to provide a nurturing 
              space where individuals can grow in faith, find solace, and cultivate a deeper 
              understanding of Christian principles.
            </p>
            <blockquote className="text-2xl md:text-3xl font-light text-orange-600 italic border-l-4 border-orange-600 pl-6 py-4">
              "Rooted in the Gospel, we uphold the values of compassion, grace, and humility. We 
              believe in the power of love to transform lives and strive to embody Christ's 
              teachings in all aspects of our work."
            </blockquote>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center border-t-4 border-orange-600"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`fa ${value.icon} text-3xl text-orange-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                OUR STORY
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Journey</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Founded in 2010 by a group of passionate individuals seeking to create an online 
                sanctuary for spiritual growth, Graceful Living has since evolved into a vibrant 
                hub for believers seeking inspiration and connection.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our journey has been marked by the shared commitment to spread the message of hope 
                and faith through digital outreach, reaching thousands of hearts across the globe.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl p-8 text-white shadow-2xl">
                <div className="mb-6">
                  <div className="text-5xl font-bold mb-2">15+</div>
                  <p className="text-orange-100">Years of Ministry</p>
                </div>
                <div className="mb-6">
                  <div className="text-5xl font-bold mb-2">10K+</div>
                  <p className="text-orange-100">Community Members</p>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">500+</div>
                  <p className="text-orange-100">Online Resources</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="text-center mb-12">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              MEET THE TEAM
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Dedicated Team</h2>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Our team comprises devoted pastors, writers, counselors, and volunteers who share 
              a common zeal for serving our online community. Each member brings a unique perspective 
              and unwavering dedication to supporting and guiding our visitors on their spiritual journeys.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fa fa-book text-3xl text-white"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Pastors & Teachers</h3>
                <p className="text-gray-600 text-sm">Providing biblical guidance and spiritual leadership</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fa fa-pencil text-3xl text-white"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Writers & Creators</h3>
                <p className="text-gray-600 text-sm">Crafting inspiring content and resources</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fa fa-heart text-3xl text-white"></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Counselors & Volunteers</h3>
                <p className="text-gray-600 text-sm">Offering support and compassionate care</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
