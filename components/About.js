'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { number: 500, suffix: '+', label: 'Daily Customers', icon: '👥' },
  { number: 1000, suffix: '+', label: 'Monthly Transactions', icon: '💳' },
  { number: 6, suffix: '+', label: 'Service Categories', icon: '🛒' },
  { number: 24, suffix: '/7', label: 'Digital Payments', icon: '⚡' },
];

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          let start = 0;
          const duration = 1800;
          const startTime = performance.now();
          const step = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(target);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="stat-number" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#d4a030', lineHeight: 1 }}>
      {count}{suffix}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: 'var(--cream)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left */}
          <div className="reveal-left">
            <span
              style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#d4a030',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              About Our Store
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 700,
                color: '#022c16',
                lineHeight: 1.2,
                marginBottom: '1.25rem',
              }}
            >
              More Than a Store —<br />
              <em style={{ color: '#0a5c2f', fontStyle: 'italic' }}>A Community Hub</em>
            </h2>
            <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #d4a030, transparent)', marginBottom: '1.5rem' }} />
            <p style={{ fontFamily: 'var(--font-outfit)', color: '#4a4a4a', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.95rem' }}>
              Imran Karyana Store is Bahawalpur's trusted neighbourhood store — combining
              fresh groceries, premium snacks, and cold drinks with modern digital payment
              services under one roof.
            </p>
            <p style={{ fontFamily: 'var(--font-outfit)', color: '#4a4a4a', lineHeight: 1.8, fontSize: '0.95rem' }}>
              As a tech-forward store, we integrate <strong style={{ color: '#0a5c2f' }}>Easypaisa</strong>, <strong style={{ color: '#0a5c2f' }}>JazzCash</strong>, and utility bill
              payments alongside quality groceries — making your life easier, one visit at a time.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {[
                '✅ Fresh Daily Stock',
                '✅ Honest Weighing',
                '✅ WhatsApp Orders',
                '✅ Home Delivery',
                '✅ Digital Payments',
                '✅ Credit Available',
              ].map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2 text-sm"
                  style={{ fontFamily: 'var(--font-outfit)', color: '#3a3a3a' }}
                >
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image placeholder */}
          <div className="reveal-right">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  border: '2px solid rgba(10,92,47,0.15)',
                  transform: 'rotate(2deg) scale(1.04)',
                }}
              />
              <div
                className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden flex flex-col items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #022c16, #0a5c2f)',
                  border: '1px solid rgba(212,160,48,0.2)',
                }}
              >
                <div className="text-6xl mb-4">🏪</div>
                <p
                  className="text-center px-8 text-sm"
                  style={{ color: 'rgba(250,246,237,0.6)', fontFamily: 'var(--font-outfit)' }}
                >
                  Store front image
                  <br />
                  <span style={{ color: 'rgba(212,160,48,0.5)', fontSize: '0.75rem' }}>
                    Upload to: <code>/public/images/store.jpg</code>
                  </span>
                </p>

                {/* Badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    background: 'rgba(212,160,48,0.15)',
                    border: '1px solid rgba(212,160,48,0.4)',
                    color: '#d4a030',
                    fontFamily: 'var(--font-outfit)',
                  }}
                >
                  📍 Bahawalpur
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal"
          style={{
            background: 'linear-gradient(135deg, #022c16, #053d20)',
            borderRadius: '24px',
            padding: 'clamp(1.5rem, 4vw, 3rem)',
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="text-center"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="text-3xl mb-2">{s.icon}</div>
              <Counter target={s.number} suffix={s.suffix} />
              <p
                className="text-sm mt-1"
                style={{ color: 'rgba(250,246,237,0.55)', fontFamily: 'var(--font-outfit)' }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
