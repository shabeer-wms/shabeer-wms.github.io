import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
}

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Project data based on your experience and skills
  const projects: Project[] = [
    {
      id: 1,
      title: "Smart Bell System",
      description: "A modern bell system designed for educational institutions, utilizing IoT and Flutter for seamless integration and automation.",
      category: "iot",
      image: "./project/smart_bell.jpeg",
      tags: ["Flutter", "IoT", "Raspberry Pi", "Firebase"],
      github: "#",
      live: "https://play.google.com/store/apps/details?id=com.pro26.smartbell&hl=en_IN"
    },
    {
      id: 2,
      title: "Aero Ai",
      description: "An IoT solution for aeroponics cultivation automation with a Flutter dashboard to control moisture, temperature, and insect security systems.",
      category: "iot",
      image: "./project/aero_ai.jpeg",
      tags: ["IoT", "Flutter", "Node.js", "Hardware Design"],
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "FarmLink IoT System",
      description: "An IoT farm management system for monitoring and controlling farm activities through a mobile app.",
      category: "iot",
      image: "./project/farmlink_logo.png",
      tags: ["Flutter", "PCB Design", "IoT", "Firebase", "Farm Management"],
      github: "#",
      live: "#"
    },
    {
      id: 4,
      title: "Tic Tac Toe Game",
      description: "A multiplayer Tic Tac Toe game built using Flutter, featuring real-time interaction and intuitive design.",
      category: "mobile",
      image: "./project/tic_tac_toe.webp",
      tags: ["Flutter", "Real-time", "Multiplayer", "Game"],
      github: "#",
      live: "https://play.google.com/store/apps/details?id=com.vectorcrop.tic_tac_toe&hl=en_IN"
    }
  ];

  // Filter projects based on active tab
  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-blue mx-auto mb-6"></div>
          <p className="text-gray max-w-3xl mx-auto">
            Here are some of my notable projects. These represent my skills and experience in various technologies.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-10">
            <TabsList className="bg-gray-100">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="iot">IoT Projects</TabsTrigger>
              <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <div className="aspect-video relative overflow-hidden group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white rounded-full text-blue hover:bg-gray-100 transition-colors"
                          >
                            <Github size={20} />
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white rounded-full text-blue hover:bg-gray-100 transition-colors"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-dark mb-2">{project.title}</h3>
                    <p className="text-gray mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs bg-blue/10 text-blue px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-blue text-blue hover:bg-blue/10">
            <a href="https://github.com/shabeer-wms" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Github size={18} className="mr-2" />
              See All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
