import React from 'react';
import { Smartphone, Cpu, Palette, Users, Award, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Flutter Expert",
      description: "Building smooth cross-platform mobile apps that work like a charm"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "IoT Innovation",
      description: "Creating smart solutions with IoT and PCB design expertise"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Design",
      description: "Adobe Creative Suite, Final Cut Pro X, and Blender for stunning visuals"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Leadership",
      description: "Managing Director at PRO26, leading teams and driving innovation"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Tech Mentor",
      description: "Teaching and guiding the next generation of developers"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Problem Solver",
      description: "Solving tricky problems with smart, practical fixes"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-6">
              Full Stack Flutter Developer & IoT Innovator
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I'm a Full Stack Flutter Developer who loves building user-friendly mobile apps and smart solutions. 
                As the Managing Director at PRO26, I lead innovative projects that combine cutting-edge technology 
                with practical solutions.
              </p>
              
              <p>
                I specialize in Flutter, making smooth cross-platform apps that work like a charm. I'm also into 
                IoT and PCB design — basically, I like solving tricky problems with smart, practical fixes. 
                Plus, I've got a creative side, working with Adobe Creative Suite, Final Cut Pro X, and Blender 
                to make projects look and feel great.
              </p>
              
              <p>
                With experience spanning from video editing at Wisdom Media School to technical assistance at 
                Peace Radio, I bring a unique blend of technical expertise and creative vision to every project. 
                Always learning, always improving — hit me up if you want to collaborate or chat about cool projects!
              </p>
            </div>

            <div className="pt-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                What I Bring to the Table
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  5+ years of experience in development and technical roles
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Managing Director at PRO26 with leadership experience
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Expertise in Flutter, IoT, and PCB design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Creative skills in video editing and design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Currently pursuing Bachelor's in Computer Science
                </li>
              </ul>
            </div>

            {/* Education */}
            <div className="pt-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Education
              </h4>
              <div className="space-y-3">
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-gray-900 dark:text-white">Bachelor of Science - Computer Science</h5>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">College of Applied Sciences, IHRD, Vazhakkad (2023-2026)</p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-gray-900 dark:text-white">Higher Secondary - Computer Science</h5>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">VHSS (2021-2023)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;