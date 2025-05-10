
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative pb-16">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent -z-10" />
      
      <div className="container section-padding">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-dark mb-4 leading-tight">
              Muhammed Shabeer OP
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-blue mb-6">
              Full Stack Flutter Developer | IoT Innovator
            </h2>
            <p className="text-lg md:text-xl text-gray mb-8 max-w-2xl">
              Building Future-Ready Apps & Smart Solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                onClick={scrollToContact}
                className="bg-blue hover:bg-blue-dark text-white py-2 px-8 rounded-md"
              >
                Let's Connect
              </Button>
              <Button 
                variant="outline" 
                onClick={scrollToAbout}
                className="border-blue text-blue hover:bg-blue/10 py-2 px-8 rounded-md"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="flex flex-col items-center text-blue hover:text-blue-dark transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
