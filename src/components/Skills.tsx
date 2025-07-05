import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      skills: [
        { name: "Flutter", level: 95 },
        { name: "Dart", level: 95 },
        { name: "Cross-platform Development", level: 90 },
        { name: "Mobile UI/UX", level: 85 },
        { name: "App Store Deployment", level: 80 },
        { name: "Firebase Integration", level: 85 }
      ]
    },
    {
      title: "IoT & Hardware",
      skills: [
        { name: "Internet of Things (IoT)", level: 90 },
        { name: "Raspberry Pi", level: 85 },
        { name: "PCB Design", level: 80 },
        { name: "Arduino", level: 75 },
        { name: "Sensor Integration", level: 80 },
        { name: "Hardware Troubleshooting", level: 85 }
      ]
    },
    {
      title: "Creative & Technical",
      skills: [
        { name: "Adobe Creative Suite", level: 85 },
        { name: "Final Cut Pro X", level: 90 },
        { name: "Blender", level: 75 },
        { name: "Video Editing", level: 95 },
        { name: "Audio/Visual Production", level: 90 },
        { name: "Microsoft Excel", level: 80 }
      ]
    }
  ];

  const certifications = [
    {
      title: "Getting Started with Microsoft Excel",
      issuer: "Microsoft",
      year: "2024"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Top Skills Highlight */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Top Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Internet of Things (IoT)", "Flutter", "Raspberry Pi", "Video Editing", "PCB Design", "Adobe Creative Suite"].map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                  {cert.issuer}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {cert.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Stats */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            GitHub Activity
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <img
                src="https://github-readme-stats.vercel.app/api?username=shabeer-wms&show_icons=true&theme=default&hide_border=true"
                alt="GitHub Stats"
                className="w-full rounded-lg"
              />
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=shabeer-wms&layout=compact&theme=default&hide_border=true"
                alt="Top Languages"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;