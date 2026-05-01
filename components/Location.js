'use client'
import { useEffect, useRef } from 'react'

export default function Location() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="location" className="py-24 bg-[#fdf6e3]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-[#0f5c2e]/10 text-[#0f5c2e] text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            📍 Find Us
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-[#083d1e] section-heading mb-4">
            Our Location
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-body text-lg">
            Conveniently located in the heart of Bahawalpur — easy to reach, easy to park, easy to shop.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Info cards */}
          <div className="space-y-5 reveal-left">
            {[
              { icon: '🏪', title: 'Store Address', content: 'Imran Karyana Store\nBahawalpur, Punjab\nPakistan' },
              { icon: '🚗', title: 'How to Find Us', content: 'Located near the main residential area. Look for our green signboard. Ample parking available.' },
              { icon: '📞', title: 'Call for Directions', content: '+92-300-0000000\nWe\'ll guide you directly.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border-2 border-[#e8dcc8] p-6 card-hover">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-[#083d1e] text-lg mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm font-body whitespace-pre-line">{item.content}</p>
              </div>
            ))}

            <a href="https://maps.google.com/?q=Bahawalpur,Punjab,Pakistan" target="_blank" rel="noopener noreferrer"
              className="btn-primary text-center block py-4 font-bold text-base">
              🗺️ Open in Google Maps
            </a>
          </div>

          {/* Map iframe */}
          <div className="lg:col-span-2 reveal-right">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-full min-h-[450px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115074.87671782484!2d71.6135!3d29.3956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b90c3cf5c4f61%3A0x9b5f9cf9e15dfa67!2sBahawalpur%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '450px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Imran Karyana Store Location - Bahawalpur"
              />
              {/* Overlay pin */}
              <div className="absolute top-4 left-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0f5c2e] flex items-center justify-center text-white font-black text-sm">IK</div>
                <div>
                  <div className="font-bold text-[#083d1e] text-sm">Imran Karyana Store</div>
                  <div className="text-gray-400 text-xs">Bahawalpur, Pakistan</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Direction steps */}
        <div className="mt-12 reveal">
          <div className="bg-white rounded-2xl border-2 border-[#e8dcc8] p-6">
            <h4 className="font-display font-bold text-xl text-[#083d1e] mb-5 text-center">🧭 Easy Landmarks to Find Us</h4>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: '🕌', label: 'Near Main Mosque', desc: 'Just 2 minutes walk from the local Jama Masjid.' },
                { icon: '🏫', label: 'School Nearby', desc: 'Right next to the government school area.' },
                { icon: '🏘️', label: 'Residential Colony', desc: 'Serving the heart of our residential mohalla.' },
              ].map((l) => (
                <div key={l.label} className="flex items-start gap-4">
                  <span className="text-3xl">{l.icon}</span>
                  <div>
                    <div className="font-bold text-[#083d1e] text-sm">{l.label}</div>
                    <div className="text-gray-500 text-xs font-body">{l.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
