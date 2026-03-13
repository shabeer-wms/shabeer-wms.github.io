import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    company: 'PRO26',
    title: 'Smart IoT Home Automation System',
    description: 'A comprehensive IoT solution using Raspberry Pi for home automation. Features include smart lighting, temperature control, security monitoring, and a Flutter mobile app for remote control.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['IoT', 'Raspberry Pi', 'PCB Design'],
    pill: 'pill-yellow',
    github: 'https://github.com/shabeer-wms',
    live: '#',
  },
  {
    company: 'VECTORCROP',
    title: 'Cross-Platform Flutter Mobile App',
    description: 'A feature-rich cross-platform application with real-time Firebase sync, offline capabilities, and polished UI/UX. Built with Flutter for both iOS and Android.',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Flutter', 'Dart', 'Firebase'],
    pill: 'pill-blue',
    github: 'https://github.com/shabeer-wms',
    live: '#',
  },
  {
    company: 'PEACE RADIO',
    title: 'Broadcasting System Management',
    description: 'Complete infrastructure for radio broadcasting operations including audio routing, live streaming, and equipment monitoring. Built for Peace Radio\'s technical infrastructure.',
    image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Audio Engineering', 'Networking', 'Broadcasting'],
    pill: 'pill-pink',
    github: 'https://github.com/shabeer-wms',
    live: '#',
  },
  {
    company: 'SKILSHORE',
    title: 'Educational Flutter Course Platform',
    description: 'Interactive learning platform for teaching Flutter development with hands-on projects, code examples, and progress tracking for students.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Flutter', 'Education Tech', 'React'],
    pill: 'pill-green',
    github: 'https://github.com/shabeer-wms',
    live: '#',
  },
  {
    company: 'WISDOM MEDIA',
    title: 'Professional Video Production Suite',
    description: 'Complete video editing and production workflow using Final Cut Pro X and Adobe Creative Suite. Includes motion graphics, color grading, and audio synchronization.',
    image: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Final Cut Pro X', 'Motion Graphics', 'Adobe CC'],
    pill: 'pill-yellow',
    github: 'https://github.com/shabeer-wms',
    live: '#',
  },
  {
    company: 'HARDWARE',
    title: 'Custom PCB Design for IoT Devices',
    description: 'Custom PCB designs for various IoT applications including sensor modules, communication boards, and power management systems.',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['PCB Design', 'Electronics', 'IoT'],
    pill: 'pill-blue',
    github: 'https://github.com/shabeer-wms',
    live: '#',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--accent-pink)] opacity-[0.04] blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="pill pill-dark mb-6 inline-block">PROJECTS</span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] leading-tight">
              Featured{' '}
              <motion.span
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="inline-block rounded-full px-4 pill-shimmer-blue cursor-default"
                style={{ color: '#1c1b21' }}
              >
                Work
              </motion.span>
            </h2>
            <a
              href="https://github.com/shabeer-wms"
              target="_blank"
              rel="noopener noreferrer"
              className="pill pill-dark flex items-center gap-2 w-fit hover:border-[var(--accent-yellow)] hover:text-[var(--text-primary)] transition-all"
            >
              <Github size={14} />
              More on GitHub ↗
            </a>
          </div>
          <p className="mt-4 text-[var(--text-secondary)] text-lg max-w-xl">
            A selection of projects spanning Flutter, IoT, broadcasting, and creative production.
          </p>
        </motion.div>

        {/* Projects list - stacked like Deepti's */}
        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="card-dark p-6 sm:p-8 flex flex-col sm:flex-row gap-6 hover:border-[rgba(255,255,255,0.12)] transition-colors group"
            >
              {/* Image */}
              <div className="flex-shrink-0 w-full sm:w-56 h-40 rounded-2xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`pill text-xs ${project.pill}`}>{project.company}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-yellow)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <span key={t} className="px-3 py-1 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-full text-xs text-[var(--text-secondary)] font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 mt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill pill-dark flex items-center gap-2 text-xs hover:border-[var(--accent-yellow)] hover:text-[var(--text-primary)] transition-all"
                  >
                    <Github size={13} /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill pill-yellow flex items-center gap-2 text-xs hover:scale-105 transition-transform"
                  >
                    <ExternalLink size={13} /> View ↗
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://github.com/shabeer-wms"
            target="_blank"
            rel="noopener noreferrer"
            className="pill pill-yellow px-8 py-3 font-bold hover:scale-105 transition-transform flex items-center gap-2"
          >
            <Github size={16} />
            More Projects on GitHub ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;