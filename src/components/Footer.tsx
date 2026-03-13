import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle, ArrowUp, Download } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const year = new Date().getFullYear();

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const socials = [
    { href: 'https://github.com/shabeer-wms', icon: <Github size={18} />, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/shabeer-wms', icon: <Linkedin size={18} />, label: 'LinkedIn' },
    { href: 'mailto:androlite4@gmail.com', icon: <Mail size={18} />, label: 'Email' },
    { href: 'https://wa.me/916238261610', icon: <MessageCircle size={18} />, label: 'WhatsApp' },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-[var(--border-color)] mt-8">
      {/* Light blue card footer area */}
      <div
        className="mx-4 sm:mx-8 lg:mx-auto lg:max-w-6xl mb-8 rounded-3xl p-8 sm:p-12 relative overflow-hidden"
        style={{ background: 'var(--accent-blue)', color: '#1c1b21' }}
      >
        {/* Deco blob */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-28 h-28 rounded-2xl hidden sm:flex items-center justify-center"
          style={{ background: 'var(--accent-yellow)' }}>
          <span className="font-bold text-lg text-center leading-tight">Muhammed<br/>Shabeer</span>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 relative z-10">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: '#1c1b21' }}>
              Have something in mind?
            </h3>
            <p className="text-sm opacity-70" style={{ color: '#1c1b21' }}>
              Let's build something great together.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:androlite4@gmail.com"
              className="pill font-bold hover:scale-105 transition-transform"
              style={{ background: '#1c1b21', color: '#f0eff5' }}
            >
              Let's Connect ↗
            </a>
            <a
              href="https://www.linkedin.com/in/shabeer-wms"
              target="_blank"
              rel="noopener noreferrer"
              className="pill font-semibold hover:scale-105 transition-transform"
              style={{ background: 'rgba(28,27,33,0.15)', color: '#1c1b21' }}
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/shabeer-wms"
              target="_blank"
              rel="noopener noreferrer"
              className="pill font-semibold hover:scale-105 transition-transform"
              style={{ background: 'rgba(28,27,33,0.15)', color: '#1c1b21' }}
            >
              Behance ↗
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center sm:justify-start">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => { document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' }); }}
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                title={s.label}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-yellow)] transition-all"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[var(--text-secondary)]">
          <span>© {year} Muhammed Shabeer OP · All Rights Reserved</span>
          <span>Designed & Built with ❤️ in Kerala, India</span>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-11 h-11 flex items-center justify-center rounded-full z-40 shadow-xl transition-all"
        style={{ background: 'var(--accent-yellow)', color: '#1c1b21' }}
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </motion.button>
    </footer>
  );
};

export default Footer;