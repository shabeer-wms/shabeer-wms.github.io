import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  // Text-only for marquee rows (fast, no external CDN)
  const row1 = [
    'Flutter', 'React', 'Dart', 'Node.js', 'Docker', 'Nginx',
    'PostgreSQL', 'Firebase', 'MongoDB', 'JavaScript', 'TypeScript', 'Figma',
  ];
  const row2 = [
    'IoT', 'PCB Design', 'Arduino', 'Raspberry Pi', 'MQTT', 'Python',
    'Blender', 'Adobe Creative Suite', 'Final Cut Pro', 'Git', 'GitHub', 'VS Code',
  ];

  const categories = [
    {
      title: 'Mobile & Cross-Platform',
      pill: 'pill-blue',
      skills: ['Flutter', 'Dart', 'Kotlin', 'React Native', 'Android SDK'],
    },
    {
      title: 'Web & Frontend',
      pill: 'pill-pink',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Node.js'],
    },
    {
      title: 'Backend & Cloud',
      pill: 'pill-yellow',
      skills: ['Node.js', 'PostgreSQL', 'Docker', 'Nginx', 'Firebase', 'MongoDB', 'Appwrite'],
    },
    {
      title: 'IoT & Hardware',
      pill: 'pill-green',
      skills: ['Arduino', 'Raspberry Pi', 'PCB Design', 'MQTT', 'Mosquitto', 'Ubiquiti'],
    },
    {
      title: 'Creative Tools',
      pill: 'pill-pink',
      skills: ['Adobe Photoshop', 'Illustrator', 'After Effects', 'Blender', 'Final Cut Pro', 'Figma'],
    },
    {
      title: 'Dev Tools',
      pill: 'pill-dark',
      skills: ['Git', 'GitHub Actions', 'VS Code', 'Postman', 'PlatformIO', 'Trello'],
    },
  ];

  const MarqueeRow = ({ items, reverse = false }: { items: string[]; reverse?: boolean }) => (
    <div className="overflow-hidden w-full py-2">
      <div className={`${reverse ? 'marquee-track-rev' : 'marquee-track'} flex gap-3`}>
        {/* Duplicate for seamless loop */}
        {[...items, ...items].map((skill, i) => (
          <div
            key={i}
            className="px-4 py-2 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-full text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[rgba(255,255,255,0.15)] transition-colors flex-shrink-0"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );


  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--accent-blue)] opacity-[0.04] blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="pill pill-dark mb-6 inline-block">SKILLS & TECH</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] leading-tight">
            Tools I Use to{' '}
            <motion.span
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="inline-block rounded-full px-4 pill-shimmer-yellow cursor-default"
              style={{ color: '#1c1b21' }}
            >
              Build Things
            </motion.span>
          </h2>
          <p className="mt-4 text-[var(--text-secondary)] text-lg max-w-xl">
            Here are the technologies and platforms I work with to bring ideas to life.
          </p>
        </motion.div>

        {/* Marquee Rows */}
        <div className="mb-16 space-y-3">
          <MarqueeRow items={row1} />
          <MarqueeRow items={row2} reverse />
        </div>

        {/* Category Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="card-dark p-6 hover:border-[rgba(255,255,255,0.12)] transition-colors group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`pill text-xs ${cat.pill}`}>{cat.title}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((sk) => (
                  <span key={sk} className="tag-hover px-3 py-1 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-full text-xs text-[var(--text-secondary)] font-medium">
                    {sk}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
