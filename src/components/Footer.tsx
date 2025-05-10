
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-dark text-white pt-16 pb-8">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-light">Shabeer<span className="text-white">OP</span></h3>
            <p className="text-gray-300 mb-6 max-w-xs">
              Full Stack Flutter Developer & IoT Innovator based in India. Creating modern and effective digital solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/shabeer-wms"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-2 rounded-full text-white hover:bg-blue transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/shabeer-wms/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-2 rounded-full text-white hover:bg-blue transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:androlite4@gmail.com"
                className="bg-gray-700 p-2 rounded-full text-white hover:bg-blue transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-blue-light transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-blue-light transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-blue-light transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-blue-light transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-blue-light transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-blue-light" />
                <a href="mailto:androlite4@gmail.com" className="text-gray-300 hover:text-blue-light transition-colors">
                  androlite4@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-blue-light">📍</span>
                <span className="text-gray-300">Kerala, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Muhammed Shabeer OP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
