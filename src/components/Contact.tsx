import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[var(--accent-blue)] opacity-[0.04] blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="pill pill-dark mb-6 inline-block">GET IN TOUCH</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] leading-tight">
            Have Something{' '}
            <motion.span
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="inline-block rounded-full px-4 pill-shimmer-yellow cursor-default"
              style={{ color: '#1c1b21' }}
            >
              in Mind?
            </motion.span>
          </h2>
          <p className="mt-4 text-[var(--text-secondary)] text-lg max-w-xl">
            Always learning, always improving — hit me up if you want to collaborate, consult, or just chat about cool tech.
          </p>
        </motion.div>

        {/* Big CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-dark p-8 sm:p-12 rounded-3xl mb-8 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, var(--bg-card) 0%, #1a192080 100%)' }}
        >
          {/* Glow accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-yellow)] opacity-[0.06] blur-3xl rounded-full" />

          <div className="flex flex-col sm:flex-row items-start gap-8 relative z-10">
            <div className="flex-1">
              <h3 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
                Let's Connect
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-8 max-w-lg">
                Whether you have a Flutter project in mind, need IoT solutions, want to collaborate on innovative tech,
                or just want to talk — I'd love to hear from you.
              </p>

              {/* Contact details */}
              <div className="space-y-4">
                {[
                  { icon: <Mail size={18} />, label: 'Email', value: 'androlite4@gmail.com', href: 'mailto:androlite4@gmail.com' },
                  { icon: <Phone size={18} />, label: 'Phone', value: '+91 6238261610', href: 'tel:+916238261610' },
                  { icon: <MapPin size={18} />, label: 'Location', value: 'Kottakkal, Kerala, India', href: null },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] flex-shrink-0">
                      {c.icon}
                    </div>
                    <div>
                      <div className="text-xs text-[var(--text-secondary)] font-medium uppercase tracking-widest">{c.label}</div>
                      {c.href ? (
                        <a href={c.href} className="text-[var(--text-primary)] font-semibold hover:text-[var(--accent-yellow)] transition-colors text-sm">
                          {c.value}
                        </a>
                      ) : (
                        <div className="text-[var(--text-primary)] font-semibold text-sm">{c.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: quick links */}
            <div className="sm:self-center space-y-3">
              <a
                href="mailto:androlite4@gmail.com"
                className="pill pill-yellow px-8 py-3 flex items-center gap-2 font-bold hover:scale-105 transition-transform whitespace-nowrap"
              >
                <Mail size={16} />
                Send Email ↗
              </a>
              <a
                href="https://wa.me/916238261610"
                target="_blank"
                rel="noopener noreferrer"
                className="pill pill-green px-8 py-3 flex items-center gap-2 font-bold hover:scale-105 transition-transform whitespace-nowrap"
              >
                <MessageCircle size={16} />
                WhatsApp ↗
              </a>
            </div>
          </div>
        </motion.div>

        {/* Social Links + Roles */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-dark p-6"
          >
            <h4 className="text-sm font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-5">Find Me Online</h4>
            <div className="space-y-3">
              {[
                { icon: <Github size={18} />, name: 'GitHub', handle: '@shabeer-wms', url: 'https://github.com/shabeer-wms' },
                { icon: <Linkedin size={18} />, name: 'LinkedIn', handle: 'in/shabeer-wms', url: 'https://www.linkedin.com/in/shabeer-wms' },
                { icon: <MessageCircle size={18} />, name: 'WhatsApp', handle: '+91 6238261610', url: 'https://wa.me/916238261610' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[var(--bg-secondary)] hover:bg-[var(--border-color)] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">{s.icon}</span>
                    <div>
                      <div className="text-sm font-semibold text-[var(--text-primary)]">{s.name}</div>
                      <div className="text-xs text-[var(--text-secondary)]">{s.handle}</div>
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-[var(--text-secondary)] group-hover:text-[var(--accent-yellow)] transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Professional Roles + Availability */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-dark p-6"
          >
            <h4 className="text-sm font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-5">Current Roles</h4>
            <div className="space-y-3 mb-6">
              {[
                { role: 'Managing Director', co: 'PRO26', pill: 'pill-yellow' },
                { role: 'Flutter Developer', co: 'VectorCrop', pill: 'pill-blue' },
                { role: 'A/V Staff & Tech', co: 'Peace Radio', pill: 'pill-pink' },
                { role: 'Tutor', co: 'Skilshore', pill: 'pill-green' },
              ].map((r, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-[var(--text-secondary)] text-sm">{r.role}</span>
                  <span className={`pill text-xs ${r.pill}`}>{r.co}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[var(--border-color)]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-[var(--text-secondary)]">
                  Open to <strong className="text-[var(--text-primary)]">freelance & collaboration</strong>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;