import { Menu, X, Phone, Facebook } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Newsletter', path: '/newsletter' },
    { label: 'History', path: '/history' },
    { label: 'Aims', path: '/aims' },
    { label: 'Testimonials', path: '/testimonials' },
  ];

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <nav className="bg-blue-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-28">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <img
              src="/logo.jpg"
              alt="IOOB Logo"
              className="h-16 w-auto"
            />
            <div>
              <h1 className="text-3xl font-bold text-white">IOOB</h1>
              <p className="text-sm text-blue-100 font-semibold">Melbourne</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.path)}
                className="text-white text-lg font-semibold hover:text-amber-300 transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-amber-300 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-2 text-white">
              <Phone size={24} />
              <span className="text-lg font-semibold">0417 538 095</span>
            </div>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-300 transition-colors"
            >
              <Facebook size={28} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 border-t border-blue-700">
            <div className="space-y-3 py-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.path)}
                  className="block w-full text-left px-6 py-3 text-lg text-white hover:bg-blue-800 hover:text-amber-300 transition-colors rounded font-semibold"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="border-t border-blue-700 pt-6 px-6 space-y-4">
              <div className="flex items-center space-x-3 text-white">
                <Phone size={24} />
                <span className="text-lg font-semibold">0417 538 095</span>
              </div>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-white hover:text-amber-300 transition-colors"
              >
                <Facebook size={24} />
                <span className="text-lg font-semibold">Facebook</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
