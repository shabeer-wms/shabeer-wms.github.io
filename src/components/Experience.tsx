import React from 'react';
import { Calendar, MapPin, Briefcase, Building } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Managing Director",
      company: "PRO26",
      location: "Kerala, India",
      period: "April 2025 - Present",
      duration: "4 months",
      description: [
        "Leading strategic initiatives and business development",
        "Overseeing technology projects and innovation",
        "Managing cross-functional teams and operations",
        "Driving company growth and market expansion"
      ],
      technologies: ["Leadership", "Strategy", "Innovation", "Team Management"]
    },
    {
      title: "Flutter Developer",
      company: "VectorCrop",
      location: "Kerala, India",
      period: "October 2021 - Present",
      duration: "3 years 10 months",
      description: [
        "Write clean and efficient Flutter code for cross-platform applications",
        "Work with designers and backend developers to ensure seamless integration",
        "Test thoroughly to maintain reliable and high-performance applications",
        "Collaborate on mobile app architecture and development best practices"
      ],
      technologies: ["Flutter", "Dart", "Mobile Development", "Cross-platform"]
    },
    {
      title: "Director of Development",
      company: "VectorCrop",
      location: "Kerala, India",
      period: "2021 - Present",
      duration: "4 years",
      description: [
        "Lead development teams and set technical direction",
        "Oversee project planning and execution",
        "Ensure code quality and development standards",
        "Mentor junior developers and foster team growth"
      ],
      technologies: ["Team Leadership", "Project Management", "Code Review", "Mentoring"]
    },
    {
      title: "A/V Studio Staff",
      company: "Peace Radio",
      location: "Kozhikode, Kerala, India",
      period: "December 2024 - Present",
      duration: "8 months",
      description: [
        "Manage audio/visual equipment and studio operations",
        "Support live broadcasts and ensure clear sound quality",
        "Handle technical troubleshooting during broadcasts",
        "Maintain broadcasting systems and equipment"
      ],
      technologies: ["Audio Engineering", "Broadcasting", "Live Production", "Equipment Management"]
    },
    {
      title: "Technical Assistant",
      company: "Peace Radio",
      location: "Kozhikode, Kerala, India",
      period: "2020 - Present",
      duration: "5 years",
      description: [
        "Fix hardware and software issues across various systems",
        "Set up and maintain audio equipment for broadcasts",
        "Manage network setups and ensure connectivity",
        "Keep broadcasting systems running smoothly and efficiently"
      ],
      technologies: ["Hardware Troubleshooting", "Network Management", "Audio Systems", "Technical Support"]
    },
    {
      title: "Crisis Manager",
      company: "Wisdom Media School",
      location: "Perintalmanna, Kerala, India",
      period: "March 2023 - Present",
      duration: "2 years 5 months",
      description: [
        "Handle crisis situations and emergency response",
        "Coordinate with teams during critical incidents",
        "Develop and implement crisis management protocols",
        "Ensure business continuity during challenging situations"
      ],
      technologies: ["Crisis Management", "Emergency Response", "Team Coordination", "Problem Solving"]
    },
    {
      title: "Video Editor",
      company: "Wisdom Media School",
      location: "Perintalmanna, Kerala, India",
      period: "2020 - January 2025",
      duration: "5 years",
      description: [
        "Edit videos by selecting the best shots and sequences",
        "Add transitions, graphics, and visual effects",
        "Sync audio to create smooth, professional content",
        "Work closely with directors and producers to achieve desired outcomes"
      ],
      technologies: ["Final Cut Pro X", "Video Editing", "Motion Graphics", "Audio Sync"]
    },
    {
      title: "Tutor",
      company: "Skilshore",
      location: "Manjeri, Kerala, India",
      period: "December 2024 - Present",
      duration: "8 months",
      description: [
        "Teach technical skills and programming concepts",
        "Mentor students in Flutter and mobile development",
        "Create educational content and curriculum",
        "Guide students through practical projects"
      ],
      technologies: ["Teaching", "Flutter", "Mentoring", "Curriculum Development"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey through various roles, building expertise in Flutter development, IoT, and technical leadership
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

            {experiences.map((experience, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>

                {/* Content */}
                <div className="ml-20">
                  <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {experience.title}
                          </h3>
                          <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold mb-2">
                            <Building size={18} className="mr-2" />
                            {experience.company}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                            <Calendar size={16} className="mr-2" />
                            {experience.period}
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                            <MapPin size={16} className="mr-2" />
                            {experience.location}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {experience.duration}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <ul className="space-y-3">
                        {experience.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start text-gray-600 dark:text-gray-300">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                        Key Skills & Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Education
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Bachelor of Science - Computer Science
              </h4>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                College of Applied Sciences, IHRD, Vazhakkad
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                August 2023 - March 2026
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Currently pursuing degree with focus on software development and computer science fundamentals.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Higher Secondary - Computer Science
              </h4>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                VHSS
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                June 2021 - June 2023
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Specialized in computer science with strong foundation in programming and technology.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                High School Diploma - Computational Science
              </h4>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                AKMHSS
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                June 2015 - July 2021
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Early exposure to computational science and technology fundamentals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;