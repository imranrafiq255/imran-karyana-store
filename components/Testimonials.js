'use client';
import { useEffect, useRef } from 'react';

const testimonials = [
  {
    name: 'Ali Hassan',
    location: 'Bahawalpur City',
    stars: 5,
    text: 'Bhai ne ek hi jagah se grocery bhi ki aur Easypaisa withdrawal bhi. Zyada mat socho, seedha Imran Karyana aa jao!',
    avatar: 'AH',
    color: '#0a5c2f',
  },
  {
    name: 'Fatima Bibi',
    location: 'Model Town, Bahawalpur',
    stars: 5,
    text: 'WAPDA bill ki last date thi, yahan se ek minute mein payment ho gayi. Staff bohat helpful hai. Highly recommended!',
    avatar: 'FB',
    color: '#d4a030',
  },
  {
    name: 'Zubair Ahmed',
    location: 'Satellite Town',
    stars: 5,
    text: 'Sab se acha karyana store in Bahawalpur. Products quality mein koi compromise nahi. Owner bohat honest hain.',
    avatar: 'ZA',
    color: '#0a5c2f',
  },
  {
    name: 'Sana Malik',
    location: 'Gulshan Colony',
    stars: 5,
    text: 'WhatsApp pe order kiya, ghar pe aa gaya. Yeh convenience town mein kisi ne nahi di. Love this store!',
    avatar: 'SM',
    color: '#d4a030',
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
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
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #022c16 0%, #053d20 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #d4a030 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 reveal">
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
            Customer Reviews
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: '#faf6ed',
              lineHeight: 1.15,
            }}
          >
            What Our Customers Say
          </h2>
          <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, transparent, #d4a030, transparent)', margin: '1rem auto 0' }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className="rounded-2xl p-6 h-full flex flex-col"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.09)';
                  e.currentTarget.style.borderColor = 'rgba(212,160,48,0.3)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <span key={j} style={{ color: '#d4a030', fontSize: '0.875rem' }}>★</span>
                  ))}
                </div>

                {/* Quote */}
                <p
                  className="flex-1 text-sm leading-relaxed mb-6"
                  style={{
                    color: 'rgba(250,246,237,0.75)',
                    fontFamily: 'var(--font-outfit)',
                  }}
                >
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{
                      background: `${t.color}30`,
                      border: `1px solid ${t.color}60`,
                      color: t.color === '#d4a030' ? '#d4a030' : '#5dd68a',
                      fontFamily: 'var(--font-outfit)',
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: '#faf6ed', fontFamily: 'var(--font-outfit)' }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: 'rgba(250,246,237,0.4)', fontFamily: 'var(--font-outfit)' }}
                    >
                      📍 {t.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
