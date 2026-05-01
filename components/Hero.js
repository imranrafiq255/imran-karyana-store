'use client'
import { useState, useEffect, useCallback } from 'react'

const slides = [
  {
    id: 1,
    bg: 'from-[#0f5c2e] via-[#1a8a47] to-[#083d1e]',
    emoji: '🛒',
    tag: "Welcome to Bahawalpur's Finest",
    title: 'Your Neighborhood\nKaryana Store',
    subtitle: 'Fresh groceries, daily essentials & premium digital services — all under one roof in the heart of Bahawalpur.',
    cta: 'Explore Our Store',
    ctaLink: '#services',
    img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80',
    imgAlt: 'Fresh grocery store display',
    badge: '🌿 Fresh & Quality',
  },
  {
    id: 2,
    bg: 'from-[#7b3f00] via-[#a0522d] to-[#4a2200]',
    emoji: '🥤',
    tag: 'Cold Drinks & Snacks',
    title: 'Refreshing Drinks\n& Tasty Snacks',
    subtitle: 'Ice-cold beverages, crunchy snacks, and sweet treats. The best brands, always in stock for you.',
    cta: 'See Products',
    ctaLink: '#services',
    img: 'https://images.unsplash.com/photo-1581098365948-6a5a912b7a49?w=800&q=80',
    imgAlt: 'Cold drinks and snacks',
    badge: '❄️ Ice Cold',
  },
  {
    id: 3,
    bg: 'from-[#1a237e] via-[#283593] to-[#0d1547]',
    emoji: '📱',
    tag: 'Digital Payment Services',
    title: 'EasyPaisa & JazzCash\nRight Here',
    subtitle: 'Pay utility bills, withdraw cash, and send money — fast, secure, and convenient digital services available 7 days a week.',
    cta: 'Learn More',
    ctaLink: '#digital',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    imgAlt: 'Digital payment services',
    badge: '⚡ Instant Transfers',
  },
  {
    id: 4,
    bg: 'from-[#880e4f] via-[#ad1457] to-[#560027]',
    emoji: '🍦',
    tag: 'Ice Creams & Sweet Treats',
    title: 'Beat the Heat with\nDelicious Ice Creams',
    subtitle: 'Walls, Omore, and more — a full range of ice creams, popsicles, and frozen treats to keep your family smiling.',
    cta: 'View Ice Creams',
    ctaLink: '#services',
    img: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=800&q=80',
    imgAlt: 'Ice cream variety',
    badge: '🍨 All Flavors',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((idx) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => { setCurrent(idx); setAnimating(false) }, 350)
  }, [animating])

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 5500)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${slide.bg} transition-all duration-700`} />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      {/* Glow blobs */}
      <div className="absolute top-20 right-0 w-64 h-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-32 left-0 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 min-h-screen flex items-center">
        <div className={`w-full pt-20 pb-28 sm:pt-24 sm:pb-20 transition-all duration-400 ${animating ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'}`}>

          {/* Mobile: stacked layout. Desktop: side-by-side */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* LEFT: Text content */}
            <div className="text-white">
              {/* Tag badge */}
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 mb-5">
                <span className="text-[#f0c040] text-base">{slide.emoji}</span>
                <span className="text-xs sm:text-sm font-semibold tracking-wide">{slide.tag}</span>
              </div>

              {/* Heading — responsive font sizes */}
              <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-5">
                {slide.title.split('\n').map((line, i) => (
                  <span key={i} className="block">
                    {i === 1 ? <span className="gradient-text">{line}</span> : line}
                  </span>
                ))}
              </h1>

              {/* Subtitle */}
              <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed mb-7 max-w-lg">
                {slide.subtitle}
              </p>

              {/* CTA Buttons — stack on mobile */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
                <a href={slide.ctaLink}
                  className="btn-gold font-bold text-sm sm:text-base px-6 py-3.5 text-center rounded-full"
                >
                  {slide.cta} →
                </a>
                <a href="#contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white rounded-full px-6 py-3.5 font-semibold text-sm sm:text-base hover:bg-white/15 transition-all duration-300"
                >
                  📞 Call Now
                </a>
              </div>

              {/* Stats — 4 columns, compact on mobile */}
              <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-sm sm:max-w-none">
                {[
                  { label: 'Products', value: '500+' },
                  { label: 'Customers', value: '1000+' },
                  { label: 'Years', value: '5+' },
                  { label: 'Days Open', value: '7/7' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-display font-black text-lg sm:text-2xl gradient-text">{stat.value}</div>
                    <div className="text-white/60 text-[9px] sm:text-xs font-semibold uppercase tracking-wide leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Image — hidden on small mobile, shown on sm+ */}
            <div className="hidden sm:flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm lg:max-w-md">
                {/* Floating badge */}
                <div className="absolute -top-4 -left-4 z-20 bg-[#f0c040] text-[#083d1e] px-3 py-1.5 rounded-2xl font-black text-xs sm:text-sm shadow-xl animate-float">
                  {slide.badge}
                </div>
                {/* Image */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/3]">
                  <img src={slide.img} alt={slide.imgAlt} className="w-full h-full object-cover" loading={current === 0 ? 'eager' : 'lazy'} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                {/* Decorative rings */}
                <div className="absolute -bottom-5 -right-5 w-20 h-20 rounded-full border-4 border-[#f0c040]/30 animate-spin-slow pointer-events-none" />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full border-4 border-[#f0c040]/50 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prev / Next arrows — positioned away from buttons */}
      <button
        onClick={prev}
        className="absolute left-3 sm:left-5 bottom-16 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/15 hover:bg-white/30 border border-white/25 text-white text-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Previous"
      >‹</button>
      <button
        onClick={next}
        className="absolute right-3 sm:right-5 bottom-16 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/15 hover:bg-white/30 border border-white/25 text-white text-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Next"
      >›</button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? 'w-7 h-2.5 bg-[#f0c040]' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#fdf6e3" />
        </svg>
      </div>
    </section>
  )
}
