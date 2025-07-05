import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Phone, Mail, Star, Code, Cpu } from 'lucide-react';


const Hero: React.FC = () => {

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"></div>

      {/* Animated Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 dark:bg-pink-800 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Floating Tech Icons */}
      <div className="absolute top-32 left-1/4 opacity-20 dark:opacity-10 animate-pulse">
        <Code size={40} className="text-blue-500" />
      </div>
      <div className="absolute top-1/3 right-1/4 opacity-20 dark:opacity-10 animate-bounce" style={{ animationDelay: '1s' }}>
        <Cpu size={32} className="text-purple-500" />
      </div>
      <div className="absolute bottom-1/3 left-1/3 opacity-20 dark:opacity-10 animate-pulse" style={{ animationDelay: '2s' }}>
        <Star size={28} className="text-yellow-500" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Enhanced Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="mb-8">
              {/* Greeting with animation */}
              <div className="mb-4">
                <span className="inline-block text-lg text-blue-600 dark:text-blue-400 font-medium mb-2 animate-fade-in">
                  👋 Hello, I'm
                </span>
              </div>

              <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight tracking-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 animate-gradient-x">
                  Muhammed Shabeer OP
                </span>
              </h1>


              {/* Static Subtitle */}
              <div className="h-16 lg:h-20 mb-4">
                <h2 className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-light">
                  Full Stack Flutter Developer
                </h2>
              </div>

              <h3 className="text-xl lg:text-2xl text-blue-600 dark:text-blue-400 mb-6 font-medium">
                Managing Director at PRO26 | IoT Innovator | Tech Mentor
              </h3>

              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                Passionate about crafting exceptional digital experiences through innovative mobile apps and cutting-edge IoT solutions.
                I bring ideas to life with Flutter's cross-platform magic and hardware expertise in PCB design.
              </p>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="tel:+916238261610"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Phone size={18} />
                +91 6238261610
              </a>
              <a
                href="mailto:androlite4@gmail.com"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Mail size={18} />
                androlite4@gmail.com
              </a>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="/Profile.pdf"
                download
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Download CV
              </a>
              <button
                onClick={scrollToAbout}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start mb-8">
              <a
                href="https://www.linkedin.com/in/shabeer-wms"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Linkedin size={24} className="group-hover:animate-pulse" />
              </a>
              <a
                href="https://github.com/shabeer-wms"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Github size={24} className="group-hover:animate-pulse" />
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Done</div>
              </div>
            </div>
          </div>

          {/* Enhanced Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Glowing ring animation */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-spin opacity-75 blur-sm" style={{ animationDuration: '3s' }}></div>

              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white dark:border-gray-700 transform hover:scale-105 transition-all duration-500 hover:shadow-3xl">
                <img
                  src="/profile.jpg"
                  alt="Muhammed Shabeer OP"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating Skill Badges */}
              <div className="pointer-events-none">
                {/* Top Right - Flutter */}
                <div className="absolute -top-4 -right-12 px-4 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg border border-blue-200 dark:border-gray-600 transform rotate-12 hover:rotate-0 transition-transform duration-300">
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Flutter</span>
                </div>
                
                {/* Top Left - IoT */}
                <div className="absolute -top-8 -left-8 px-3 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg border border-purple-200 dark:border-gray-600 transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                  <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">IoT</span>
                </div>
                
                {/* Bottom Left - PCB */}
                <div className="absolute -bottom-6 -left-10 px-3 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg border border-green-200 dark:border-gray-600 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <span className="text-sm font-semibold text-green-600 dark:text-green-400">PCB</span>
                </div>
                
                {/* Bottom Right - Mobile */}
                <div className="absolute -bottom-4 -right-16 px-4 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg border border-orange-200 dark:border-gray-600 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">Mobile Apps</span>
                </div>
                
                {/* Subtle Tech Icons */}
                <div className="absolute top-8 right-8 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center opacity-60 animate-pulse">
                  <Code size={14} className="text-blue-600 dark:text-blue-400" />
                </div>
                
                <div className="absolute bottom-12 left-6 w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center opacity-60 animate-pulse" style={{ animationDelay: '1s' }}>
                  <Cpu size={14} className="text-purple-600 dark:text-purple-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-center">
              <div className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Discover My Journey</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Scroll down to explore</div>
            </div>
            <button
              onClick={scrollToAbout}
              className="group relative p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full shadow-lg hover:shadow-2xl border border-blue-200/30 dark:border-blue-400/30 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-500 animate-bounce hover:animate-none"
            >
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-400/50 animate-ping"></div>
              <div className="absolute inset-2 rounded-full border border-purple-400/30 animate-pulse"></div>
              
              {/* Arrow icon */}
              <ArrowDown 
                size={20} 
                className="relative z-10 text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:transform group-hover:translate-y-1 transition-all duration-300" 
              />
            </button>
            
            {/* Scroll dots indicator */}
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-blue-200 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;