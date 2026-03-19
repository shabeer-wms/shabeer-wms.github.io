import { useEffect, useRef } from 'react';

const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Disable on small screens / mobile touch devices
    if (window.innerWidth < 768) {
      if (glowRef.current) glowRef.current.style.display = 'none';
      if (innerRef.current) innerRef.current.style.display = 'none';
      return;
    }

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove);

    let frame: number;
    const animate = () => {
      // Smooth lerp
      current.current.x += (pos.current.x - current.current.x) * 0.08;
      current.current.y += (pos.current.y - current.current.y) * 0.08;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${current.current.x - 200}px, ${current.current.y - 200}px)`;
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${pos.current.x - 6}px, ${pos.current.y - 6}px)`;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      {/* Large soft glow that follows cursor */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed top-0 left-0 z-0 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(249,211,76,0.07) 0%, transparent 70%)',
          willChange: 'transform',
        }}
      />
      {/* Small precise dot */}
      <div
        ref={innerRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-3 h-3 rounded-full mix-blend-difference"
        style={{
          background: 'rgba(255,255,255,0.9)',
          willChange: 'transform',
        }}
      />
    </>
  );
};

export default CursorGlow;
