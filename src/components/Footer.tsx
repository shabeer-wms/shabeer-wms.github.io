import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp, Phone, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-blue-400">M</span>uhammed <span className="text-purple-400">S</span>habeer OP
            </div>
            <p className="text-gray-300 leading-relaxed">
              Managing Director at PRO26 | Full Stack Flutter Developer | IoT Innovator | Tech Mentor. 
              Building user-friendly mobile apps and smart solutions that make a real impact.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/shabeer-wms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/shabeer-wms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:androlite4@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://wa.me/916238261610"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#skills', label: 'Skills' },
                { href: '#experience', label: 'Experience' },
                { href: '#contact', label: 'Contact' }
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+916238261610" className="hover:text-blue-400 transition-colors duration-200">
                  +91 6238261610
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:androlite4@gmail.com" className="hover:text-blue-400 transition-colors duration-200">
                  androlite4@gmail.com
                </a>
              </div>
              <p>📍 Kottakkal, Kerala, India</p>
              <p>🌐 Available for Remote Work</p>
            </div>
            <div className="pt-4">
              <a
                href="/Profile.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Professional Highlights */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-white mb-4">Professional Highlights</h4>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-blue-600 rounded-full text-sm">Managing Director at PRO26</span>
              <span className="px-4 py-2 bg-purple-600 rounded-full text-sm">Flutter Developer</span>
              <span className="px-4 py-2 bg-green-600 rounded-full text-sm">IoT Innovator</span>
              <span className="px-4 py-2 bg-orange-600 rounded-full text-sm">Tech Mentor</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-300 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>by Muhammed Shabeer OP</span>
          </div>
          
          <div className="text-gray-300 text-center md:text-right">
            <p>&copy; {currentYear} Muhammed Shabeer OP. All rights reserved.</p>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 z-40"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;