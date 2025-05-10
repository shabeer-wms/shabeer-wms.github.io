import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">My Skills & Tech Stack</h2>
          <div className="h-1 w-20 bg-blue mx-auto mb-6"></div>
          <p className="text-gray max-w-3xl mx-auto">
            Here's a quick overview of my skills and the technologies I use in building innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Development Skills */}
          <Card className="rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-gray-dark mb-6 border-b pb-2">Development</h3>
              <ul className="list-disc pl-5 text-gray">
                <li>Flutter</li>
                <li>IoT (Raspberry Pi)</li>
                <li>Node.js</li>
                <li>Dart</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>PHP</li>
                <li>SQL (Postgres, MongoDB)</li>
                <li>Firebase</li>
              </ul>
            </CardContent>
          </Card>

          {/* Design Skills */}
          <Card className="rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-gray-dark mb-6 border-b pb-2">Design & Creativity</h3>
              <ul className="list-disc pl-5 text-gray">
                <li>PCB Design</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Blender (3D Design)</li>
                <li>Figma</li>
                <li>Adobe XD</li>
                <li>Final Cut Pro X (FCPX)</li>
                <li>Canva</li>
              </ul>
            </CardContent>
          </Card>

          {/* Tools & Platforms */}
          <Card className="rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-gray-dark mb-6 border-b pb-2">Tools & Platforms</h3>
              <ul className="list-disc pl-5 text-gray">
                <li>GitHub & Git</li>
                <li>Appwrite</li>
                <li>Node.js</li>
                <li>Flutter</li>
                <li>Raspberry Pi</li>
                <li>Postman</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>Arduino</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Social Links */}
        <div className="text-center mt-12">
          <p className="text-gray mb-6">Let's Connect! Feel free to reach out to me through my social links below:</p>
          <div className="flex justify-center gap-4">
            <a href="https://facebook.com/shabeer.wms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Facebook</a>
            <a href="https://instagram.com/shabeer.wms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Instagram</a>
            <a href="https://linkedin.com/in/shabeer-wms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
            <a href="https://x.com/shabeer_wms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">X</a>
            <a href="https://youtube.com/@shabeer_wms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">YouTube</a>
            <a href="mailto:androlite4@gmail.com" className="text-blue-600 hover:text-blue-800">Email</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
