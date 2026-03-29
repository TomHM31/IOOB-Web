import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  const highlights = [
    {
      id: 'about',
      title: 'About IOOB',
      description: "Discover our mission, values, and the community we've built over the years. Learn what makes IOOB a unique organization dedicated to friendship and support.",
      icon: '👥',
      image: '/ioob1.jpg',
    },
    {
      id: 'history',
      title: 'Our History',
      description: 'From our founding in 1984 to today, explore the remarkable journey of IOOB and the milestones that shaped our organization.',
      icon: '📖',
      image: '/ioob2.jpg',
    },
    {
      id: 'aims',
      title: 'Our Aims',
      description: 'Understand the core objectives that guide our mission. We aim to build community, provide support, and make a lasting charitable impact.',
      icon: '🎯',
      image: '/ioob3.jpg',
    },
    {
      id: 'testimonials',
      title: 'Member Stories',
      description: 'Hear from our members and community partners about how IOOB has made a difference in their lives and our community.',
      icon: '💬',
      image: '/ioob1.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Hero />

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">Welcome to IOOB Melbourne</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our community, learn about our mission, and discover how we're making a difference through friendship, support, and charitable action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">{highlight.icon}</span>
                  <h3 className="text-2xl font-bold text-blue-900">{highlight.title}</h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  {highlight.description}
                </p>

                <button
                  onClick={() => navigate(`/${highlight.id}`)}
                  className="inline-flex items-center gap-2 text-red-700 hover:text-red-800 font-bold text-lg group/btn"
                >
                  Read More
                  <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-red-900 text-white p-12 rounded-lg text-center mb-20">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter to receive the latest updates, event announcements, and inspiring stories from our community.
          </p>
          <button
            onClick={() => navigate('/newsletter')}
            className="bg-amber-300 hover:bg-amber-400 text-blue-900 font-bold py-3 px-8 rounded-lg transition-colors text-lg"
          >
            Subscribe to Newsletter
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-20">
          <div className="p-8 bg-blue-50 rounded-lg">
            <div className="text-5xl font-bold text-red-700 mb-2">500+</div>
            <p className="text-xl text-gray-700 font-semibold">Active Members</p>
            <p className="text-gray-600 mt-2">Dedicated to community and support</p>
          </div>

          <div className="p-8 bg-blue-50 rounded-lg">
            <div className="text-5xl font-bold text-red-700 mb-2">40+</div>
            <p className="text-xl text-gray-700 font-semibold">Years of Impact</p>
            <p className="text-gray-600 mt-2">Since our founding in 1984</p>
          </div>

          <div className="p-8 bg-blue-50 rounded-lg">
            <div className="text-5xl font-bold text-red-700 mb-2">100+</div>
            <p className="text-xl text-gray-700 font-semibold">Charities Supported</p>
            <p className="text-gray-600 mt-2">Making a real difference</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Get Involved</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Interested in joining our community? We'd love to meet you. Reach out to learn more about membership and how you can be part of something special.
          </p>
          <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-4 px-10 rounded-lg transition-colors text-lg">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}
