import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ArrowDown, Smartphone, Cpu, Code2, Globe, Wifi, Layers } from 'lucide-react';

// Animated counting number
const AnimatedCounter = ({ target, duration = 1.5 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const startTime = performance.now();
        const animate = (now: number) => {
          const elapsed = (now - startTime) / (duration * 1000);
          const progress = Math.min(elapsed, 1);
          // Ease out expo
          const eased = 1 - Math.pow(2, -10 * progress);
          setCount(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <div ref={ref}>{count}</div>;
};

// Floating tech icon card that moves with mouse parallax
const FloatingIcon = ({
  icon,
  label,
  x,
  y,
  depth,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  x: string;
  y: string;
  depth: number;
  color: string;
}) => {
  return (
    <motion.div
      className="absolute hidden lg:flex items-center gap-2 px-3 py-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)]/80 backdrop-blur-sm select-none pointer-events-none"
      style={{ left: x, top: y }}
      animate={{
        y: [0, -depth * 8, 0],
        x: [0, depth * 4, 0],
        rotate: [0, depth * 2, 0],
      }}
      transition={{ duration: 3 + depth, repeat: Infinity, ease: 'easeInOut' }}
    >
      <span style={{ color }}>{icon}</span>
      <span className="text-xs font-bold" style={{ color }}>{label}</span>
    </motion.div>
  );
};

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Mouse-tracking parallax for the headline area
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const rotateX = useTransform(smoothY, [-300, 300], [5, -5]);
  const rotateY = useTransform(smoothX, [-500, 500], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const floatingIcons = [
    { icon: <Smartphone size={16} />, label: 'Flutter', x: '8%', y: '22%', depth: 1.2, color: 'var(--accent-blue)' },
    { icon: <Cpu size={16} />, label: 'IoT', x: '80%', y: '18%', depth: 0.8, color: 'var(--accent-green)' },
    { icon: <Code2 size={16} />, label: 'Dart', x: '6%', y: '65%', depth: 1.5, color: 'var(--accent-yellow)' },
    { icon: <Globe size={16} />, label: 'React', x: '82%', y: '60%', depth: 1.0, color: 'var(--accent-pink)' },
    { icon: <Wifi size={16} />, label: 'MQTT', x: '15%', y: '42%', depth: 0.6, color: 'var(--accent-green)' },
    { icon: <Layers size={16} />, label: 'PCB', x: '72%', y: '38%', depth: 1.3, color: 'var(--accent-yellow)' },
  ];

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated background gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.09, 0.05] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--accent-pink), transparent 70%)', filter: 'blur(60px)' }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--accent-blue), transparent 70%)', filter: 'blur(60px)' }}
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.07, 0.03] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--accent-yellow), transparent 70%)', filter: 'blur(80px)' }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />

      {/* Floating Tech Icons */}
      {floatingIcons.map((fi, i) => (
        <FloatingIcon key={i} {...fi} />
      ))}

      {/* Main content with parallax tilt */}
      <motion.div
        style={{ rotateX, rotateY, perspective: 1000 }}
        className="max-w-6xl mx-auto px-6 w-full flex flex-col items-center text-center z-10 py-16"
      >
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-8"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-full text-sm text-[var(--text-secondary)] cursor-default"
            aria-label="Availability status"
          >
            <motion.span
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-2 h-2 rounded-full bg-green-400"
            />
            Available for collaboration &amp; freelance
          </motion.span>
        </motion.div>

        {/* Main Headline */}
        {/* SEO: h1 is the person's name (primary keyword entity) */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight mb-6 text-[var(--text-primary)]"
          itemProp="name"
        >
          {'Building '.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.03 }}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.65, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.05, rotate: -1 }}
            className="inline-block rounded-full px-4 py-1 cursor-default pill-shimmer-pink"
            style={{ color: '#1c1b21' }}
          >
            Innovative
          </motion.span>
          {' & '}
          <br className="hidden sm:block" />
          {'Scalable Digital '}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.85, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="inline-block rounded-full px-4 py-1 mt-2 cursor-default pill-shimmer-yellow"
            style={{ color: '#1c1b21' }}
          >
            Experiences
          </motion.span>
        </motion.h1>

        {/* Sub intro with profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-6 mb-10 max-w-2xl"
        >
          <div className="flex-shrink-0" itemProp="image" itemScope itemType="https://schema.org/ImageObject">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-20 h-20 rounded-full overflow-hidden border-2 shadow-lg"
              style={{ borderColor: 'var(--accent-pink)', boxShadow: '0 0 20px rgba(242,164,211,0.3)' }}
            >
              <img
                src="/profile.jpg"
                alt="Muhammed Shabeer OP – Full Stack Flutter Developer and IoT Innovator from Kottakkal, Kerala"
                className="w-full h-full object-cover"
                width={80}
                height={80}
                fetchPriority="high"
              />
            </motion.div>
          </div>
          <p
            className="text-[var(--text-secondary)] text-base sm:text-lg text-left leading-relaxed"
            itemProp="description"
          >
            Hello, I'm <strong className="text-[var(--text-primary)]" itemProp="name">Muhammed Shabeer OP</strong>, a{' '}
            <span itemProp="jobTitle">Full Stack Flutter Developer</span> &amp; IoT Innovator with 5+ years of experience.
            Managing Director at{' '}
            <span itemProp="worksFor" itemScope itemType="https://schema.org/Organization">
              <span itemProp="name">PRO26</span>
            </span>,
            passionate about crafting purposeful digital products that solve real-world problems.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="/profile.pdf"
            download
            aria-label="Download Muhammed Shabeer OP's Resume PDF"
            whileHover={{ scale: 1.07, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="pill pill-yellow flex items-center gap-2 px-6 py-3 text-sm font-bold shadow-lg"
            style={{ boxShadow: '0 8px 24px rgba(249,211,76,0.3)' }}
          >
            View Resume ↗
          </motion.a>
          <motion.button
            onClick={scrollToAbout}
            aria-label="Scroll to featured projects section"
            whileHover={{ scale: 1.07, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="pill pill-dark flex items-center gap-2 px-6 py-3 text-sm font-semibold"
            style={{ borderColor: 'var(--border-color)' }}
          >
            Featured Projects ↓
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          {[
            { href: 'https://www.linkedin.com/in/shabeer-wms', icon: <Linkedin size={18} />, label: 'Connect on LinkedIn', rel: 'noopener noreferrer me' },
            { href: 'https://github.com/shabeer-wms', icon: <Github size={18} />, label: 'View GitHub Profile', rel: 'noopener noreferrer me' },
            { href: 'mailto:androlite4@gmail.com', icon: <Mail size={18} />, label: 'Send Email', rel: '' },
            { href: 'tel:+916238261610', icon: <Phone size={18} />, label: 'Call Muhammed Shabeer', rel: '' },
          ].map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.rel || undefined}
              aria-label={link.label}
              title={link.label}
              itemProp="sameAs"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.08, type: 'spring', stiffness: 300 }}
              whileHover={{ scale: 1.2, y: -3, borderColor: 'var(--accent-yellow)' }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Stats Row with animated counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="grid grid-cols-3 gap-8 max-w-md w-full"
        >
          {[
            { target: 5, suffix: '+', label: 'Years Experience' },
            { target: 50, suffix: '+', label: 'Projects Done' },
            { target: 1, suffix: '', label: 'Company Founded' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center cursor-default"
            >
              <div className="text-3xl font-bold text-[var(--text-primary)] flex justify-center">
                <AnimatedCounter target={stat.target} />
                <span>{stat.suffix}</span>
              </div>
              <div className="text-xs text-[var(--text-secondary)] mt-1 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.1 }}
          className="mt-16 flex flex-col items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group"
        >
          <span className="text-xs font-semibold tracking-widest uppercase">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.4 }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;