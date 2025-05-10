import { Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () =>  {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="container section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">About Me</h2>
          <div className="h-1 w-20 bg-blue mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-blue rounded-full opacity-10"></div>
              {/* Profile image placeholder - replace with actual image when available */}
              <div className="absolute inset-4 bg-gray-200 rounded-full overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Profile Photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="animate-fade-in space-y-6 md:pr-10">
            <h3 className="text-2xl font-bold text-blue">Muhammed Shabeer OP</h3>
            <p className="text-gray-700 leading-relaxed">
              I am a passionate Full Stack Flutter Developer and IoT enthusiast with a strong focus on creating innovative and efficient solutions. With expertise in mobile app development and smart systems, I strive to build applications that make a positive impact.
            </p>
            <p className="text-gray-700 leading-relaxed">
              My journey in tech started with a fascination for building things that solve real-world problems. I enjoy the creative process of transforming ideas into functional solutions, whether it's a Flutter app with beautiful UI or an IoT system that enhances everyday experiences.
            </p>

            <div className="flex space-x-4 pt-4">
              <a
                href="https://www.linkedin.com/in/shabeer-wms/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue hover:text-blue-dark transition-colors"
              >
                <Linkedin className="mr-2" size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/shabeer-wms"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue hover:text-blue-dark transition-colors"
              >
                <Github className="mr-2" size={20} />
                <span>GitHub</span>
              </a>
            </div>

            <a href="/profile.pdf" download="MuhammedShabeerOP-Profile.pdf">
              <Button className="bg-blue hover:bg-blue-dark text-white mt-4">
                Download Profile
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
