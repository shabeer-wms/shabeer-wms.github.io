import { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Smartphone, Cpu, Palette, Users, GraduationCap, Lightbulb } from 'lucide-react';

// 3D tilt card on mouse hover
const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 200, damping: 20 });
  const rotX = useTransform(smoothY, [-60, 60], [6, -6]);
  const rotY = useTransform(smoothX, [-80, 80], [-6, 6]);
  const [isHovered, setIsHovered] = useState(false);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };
  const onLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 600 }}
      onMouseMove={onMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={onLeave}
      className={className}
      animate={{ scale: isHovered ? 1.02 : 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

const highlights = [
  {
    Icon: Smartphone,
    label: 'Flutter Expert',
    desc: 'Cross-platform mobile apps that feel native on every device.',
    pill: 'pill-blue' as const,
    glowColor: 'rgba(185,228,255,0.15)',
  },
  {
    Icon: Cpu,
    label: 'IoT Innovation',
    desc: 'Smart systems with IoT & PCB design expertise.',
    pill: 'pill-green' as const,
    glowColor: 'rgba(130,255,31,0.15)',
  },
  {
    Icon: Palette,
    label: 'Creative Vision',
    desc: 'Adobe Creative Suite, Blender & Final Cut Pro for stunning visuals.',
    pill: 'pill-pink' as const,
    glowColor: 'rgba(242,164,211,0.15)',
  },
  {
    Icon: Users,
    label: 'CTO & Co-Founder',
    desc: 'Leading technology at PRO26, bridging engineering and design.',
    pill: 'pill-yellow' as const,
    glowColor: 'rgba(249,211,76,0.15)',
  },
  {
    Icon: GraduationCap,
    label: 'Tech Mentor',
    desc: 'Teaching the next generation of developers at Skilshore.',
    pill: 'pill-blue' as const,
    glowColor: 'rgba(185,228,255,0.15)',
  },
  {
    Icon: Lightbulb,
    label: 'Problem Solver',
    desc: 'Turning complex challenges into elegant, efficient solutions.',
    pill: 'pill-pink' as const,
    glowColor: 'rgba(242,164,211,0.15)',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="pill pill-dark mb-6 inline-block cursor-default"
          >
            ABOUT ME
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] leading-tight">
            Design Shaped by{' '}
            <motion.span
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.04 }}
              className="inline-block rounded-full px-4 pill-shimmer-pink cursor-default"
              style={{ color: '#1c1b21' }}
            >
              Experience
            </motion.span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Profile image + Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="relative overflow-hidden rounded-3xl aspect-[4/3] bg-[var(--bg-card)] border border-[var(--border-color)] group">
              <img
                src="/profile.jpg"
                alt="Muhammed Shabeer OP"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay badges */}
              <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                <motion.span whileHover={{ scale: 1.1, y: -2 }} className="pill pill-yellow text-xs cursor-default">Flutter Dev</motion.span>
                <motion.span whileHover={{ scale: 1.1, y: -2 }} className="pill pill-pink text-xs cursor-default">IoT Expert</motion.span>
              </div>
              {/* Scan line effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent-blue)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card-dark p-6 space-y-4"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.span whileHover={{ scale: 1.05 }} className="pill pill-blue text-xs cursor-default">EDUCATION</motion.span>
              </div>
              {[
                { deg: 'BSc Computer Science', inst: 'CAS IHRD Vazhakkad', period: '2023–2026', status: 'Current' },
                { deg: 'Higher Secondary – CS', inst: 'VHSS', period: '2021–2023', status: 'Completed' },
                { deg: 'High School – Comp. Science', inst: 'AKMHSS', period: '2015–2021', status: 'Completed' },
              ].map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-start justify-between gap-4 py-3 border-t border-[var(--border-color)] first:border-t-0 first:pt-0"
                >
                  <div>
                    <div className="font-semibold text-[var(--text-primary)] text-sm">{edu.deg}</div>
                    <div className="text-[var(--text-secondary)] text-xs mt-1">{edu.inst} · {edu.period}</div>
                  </div>
                  <motion.span
                    whileHover={{ scale: 1.08 }}
                    className={`pill text-xs flex-shrink-0 cursor-default ${edu.status === 'Current' ? 'pill-green' : 'pill-dark'}`}
                  >
                    {edu.status}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Bio text + highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="space-y-5 text-[var(--text-secondary)] text-base leading-relaxed">
              <p>
                My work is shaped by the many projects I've built, the teams I've led, and the problems I've solved.
                Curiosity, precision, and adaptability are the core of how I develop and innovate.
              </p>
              <p>
                As <strong className="text-[var(--text-primary)]">CTO & Co-Founder at PRO26</strong> and Technical Head at Edutalim, 
                I bridge the gap between complex engineering and user-friendly design. My passion lies in building 
                scalable ecosystems—whether that's a cross-platform mobile app, a complex ERP system, or an IoT automation network.
              </p>
              <p>
                What I bring to the table is a mix of <strong className="text-[var(--text-primary)]">Full Stack Architecture</strong> 
                (Node.js, Docker, Nginx, PostgreSQL, Flutter, React) and hardware innovation through IoT and custom PCB design.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { n: '5+', l: 'Years' },
                { n: '50+', l: 'Projects' },
                { n: '8+', l: 'Roles' },
              ].map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.06, y: -2 }}
                  className="card-dark p-4 text-center cursor-default"
                >
                  <div className="text-2xl font-bold text-[var(--text-primary)]">{s.n}</div>
                  <div className="text-xs text-[var(--text-secondary)] mt-1">{s.l}</div>
                </motion.div>
              ))}
            </div>

            {/* 3D Tilt highlight cards with lucide icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <TiltCard
                  key={i}
                  className="card-dark p-5 cursor-default relative overflow-hidden"
                >
                  {/* Glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[20px]"
                    style={{ background: `radial-gradient(circle at 50% 50%, ${h.glowColor}, transparent 70%)` }}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        whileHover={{ rotate: 15, scale: 1.2 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: h.glowColor }}
                      >
                        <h.Icon size={16} className="text-[var(--text-primary)]" />
                      </motion.div>
                      <span className={`pill text-xs ${h.pill}`}>{h.label}</span>
                    </div>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{h.desc}</p>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
