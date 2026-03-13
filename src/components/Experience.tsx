import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Managing Director',
    company: 'PRO26',
    location: 'Kerala, India',
    period: 'Apr 2025 – Present',
    duration: '4 months',
    description: [
      'Leading strategic initiatives and business development',
      'Overseeing technology projects and innovation pipeline',
      'Managing cross-functional teams and operations',
    ],
    tags: ['Leadership', 'Strategy', 'Innovation'],
    pill: 'pill-yellow',
  },
  {
    title: 'Flutter Developer',
    company: 'VectorCrop',
    location: 'Kerala, India',
    period: 'Oct 2021 – Present',
    duration: '3 yrs 10 mo',
    description: [
      'Write clean and efficient Flutter code for cross-platform apps',
      'Work with designers and backend devs for seamless integration',
      'Test thoroughly to maintain reliable, high-performance applications',
    ],
    tags: ['Flutter', 'Dart', 'Mobile'],
    pill: 'pill-blue',
  },
  {
    title: 'Director of Development',
    company: 'VectorCrop',
    location: 'Kerala, India',
    period: '2021 – Present',
    duration: '4 years',
    description: [
      'Lead development teams and set technical direction',
      'Oversee project planning and execution across products',
      'Mentor junior developers and foster team growth',
    ],
    tags: ['Team Leadership', 'Code Review', 'Architecture'],
    pill: 'pill-pink',
  },
  {
    title: 'A/V Studio Staff',
    company: 'Peace Radio',
    location: 'Kozhikode, India',
    period: 'Dec 2024 – Present',
    duration: '8 months',
    description: [
      'Manage audio/visual equipment and studio operations',
      'Support live broadcasts and ensure clear sound quality',
      'Handle technical troubleshooting during broadcasts',
    ],
    tags: ['Audio Engineering', 'Broadcasting', 'Live Production'],
    pill: 'pill-green',
  },
  {
    title: 'Technical Assistant',
    company: 'Peace Radio',
    location: 'Kozhikode, India',
    period: '2020 – Present',
    duration: '5 years',
    description: [
      'Fix hardware and software issues across various systems',
      'Manage network setups and ensure connectivity',
      'Keep broadcasting systems running smoothly',
    ],
    tags: ['Hardware', 'Networking', 'Troubleshooting'],
    pill: 'pill-dark',
  },
  {
    title: 'Video Editor',
    company: 'Wisdom Media School',
    location: 'Perintalmanna, India',
    period: '2020 – Jan 2025',
    duration: '5 years',
    description: [
      'Edit videos with professional-grade transitions and graphics',
      'Sync audio to create smooth, broadcast-quality content',
      'Collaborate with directors to achieve desired outcomes',
    ],
    tags: ['Final Cut Pro X', 'Motion Graphics', 'Audio Sync'],
    pill: 'pill-yellow',
  },
  {
    title: 'Tutor',
    company: 'Skilshore',
    location: 'Manjeri, India',
    period: 'Dec 2024 – Present',
    duration: '8 months',
    description: [
      'Teach Flutter & mobile development to students',
      'Mentor learners through real-world projects',
      'Create curriculum and educational content',
    ],
    tags: ['Teaching', 'Flutter', 'Mentoring'],
    pill: 'pill-blue',
  },
];

const SHOW_INITIAL = 4;

const Experience: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? experiences : experiences.slice(0, SHOW_INITIAL);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="pill pill-dark mb-6 inline-block">EXPERIENCE</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] leading-tight">
            Professional{' '}
            <motion.span
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="inline-block rounded-full px-4 pill-shimmer-pink cursor-default"
              style={{ color: '#1c1b21' }}
            >
              Journey
            </motion.span>
          </h2>
          <p className="mt-4 text-[var(--text-secondary)] text-lg max-w-xl">
            Roles across Flutter development, IoT, broadcasting, and leadership.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent-yellow)] via-[var(--accent-pink)] to-[var(--accent-blue)] opacity-30" />

          <div className="space-y-6">
            {visible.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="relative pl-10 sm:pl-14"
              >
                {/* Dot */}
                <div className="absolute left-1 sm:left-2 top-6 w-4 h-4 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent-yellow)] shadow-[0_0_10px_var(--accent-yellow)] opacity-80" />

                <div className="card-dark p-6 hover:border-[rgba(255,255,255,0.12)] transition-colors group">
                  {/* Top row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-yellow)] transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-[var(--text-secondary)] font-semibold text-sm mt-1">{exp.company}</p>
                    </div>
                    <div className="flex flex-col gap-1 items-start sm:items-end">
                      <div className="flex items-center gap-1 text-[var(--text-secondary)] text-xs">
                        <Calendar size={12} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1 text-[var(--text-secondary)] text-xs">
                        <MapPin size={12} />
                        {exp.location}
                      </div>
                      <span className={`pill text-xs mt-1 ${exp.pill}`}>{exp.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-1.5 mb-4">
                    {exp.description.map((d, j) => (
                      <li key={j} className="flex items-start gap-2 text-[var(--text-secondary)] text-sm">
                        <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-[var(--accent-yellow)] opacity-70" />
                        {d}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((t) => (
                      <span key={t} className="px-3 py-1 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-full text-xs text-[var(--text-secondary)] font-medium tag-hover">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show more */}
          {!showAll && experiences.length > SHOW_INITIAL && (
            <div className="mt-8 pl-10 sm:pl-14">
              <button
                onClick={() => setShowAll(true)}
                className="pill pill-yellow px-6 py-3 text-sm font-bold hover:scale-105 transition-transform"
              >
                Show {experiences.length - SHOW_INITIAL} More Roles ↓
              </button>
            </div>
          )}

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-[var(--border-color)]"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="pill pill-blue">EDUCATION</span>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { deg: 'BSc Computer Science', inst: 'CAS IHRD, Vazhakkad', period: 'Aug 2023 – Mar 2026', status: 'Current', pill: 'pill-green' },
                { deg: 'Higher Secondary – CS', inst: 'VHSS', period: 'Jun 2021 – Jun 2023', status: 'Completed', pill: 'pill-dark' },
                { deg: 'High School – Comp. Sci', inst: 'AKMHSS', period: 'Jun 2015 – Jul 2021', status: 'Completed', pill: 'pill-dark' },
              ].map((e, i) => (
                <div key={i} className="card-dark p-5">
                  <span className={`pill text-xs mb-3 inline-block ${e.pill}`}>{e.status}</span>
                  <h4 className="font-bold text-[var(--text-primary)] text-sm mb-1">{e.deg}</h4>
                  <p className="text-[var(--text-secondary)] text-xs">{e.inst}</p>
                  <p className="text-[var(--text-secondary)] text-xs mt-1 opacity-70">{e.period}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;