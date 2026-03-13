import { useEffect } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import ParticleBackground from './components/ParticleBackground';

function App() {
  // Lenis smooth scroll setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.5,
    });

    // Make all anchor scroll-to calls use Lenis
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a[href^="#"], button[data-scroll]');
      if (!target) return;
      const href = (target as HTMLAnchorElement).getAttribute('href');
      if (!href?.startsWith('#')) return;
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.6 });
    };
    document.addEventListener('click', handleAnchorClick);

    // Also patch scrollIntoView calls (our buttons use it)
    const origScrollIntoView = HTMLElement.prototype.scrollIntoView;
    // RAF loop for Lenis
    let animFrame: number;
    function raf(time: number) {
      lenis.raf(time);
      animFrame = requestAnimationFrame(raf);
    }
    animFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animFrame);
      document.removeEventListener('click', handleAnchorClick);
      HTMLElement.prototype.scrollIntoView = origScrollIntoView;
      lenis.destroy();
    };
  }, []);

  return (
    <div
      className="min-h-screen relative"
      style={{ background: 'var(--bg-primary)' }}
      itemScope
      itemType="https://schema.org/WebPage"
    >
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg"
        style={{ background: 'var(--accent-yellow)', color: '#1c1b21', fontWeight: 700 }}
      >
        Skip to main content
      </a>

      {/* Interactive global background */}
      <ParticleBackground />
      <CursorGlow />

      <Header />

      <main
        id="main-content"
        role="main"
        className="relative z-10"
        itemScope
        itemType="https://schema.org/Person"
        itemID="https://shabeer-wms.github.io/#person"
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;