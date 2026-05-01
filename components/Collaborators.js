'use client'
import { useEffect, useRef } from 'react'

const collaborators = [
  { name: 'EasyPaisa', emoji: '💚', color: 'bg-green-100 border-green-300 text-green-800', desc: 'Official Retailer Partner' },
  { name: 'JazzCash', emoji: '🔴', color: 'bg-red-50 border-red-300 text-red-800', desc: 'Authorized Merchant' },
  { name: 'Coca-Cola', emoji: '🥤', color: 'bg-red-100 border-red-200 text-red-700', desc: 'Authorised Dealer' },
  { name: 'Pepsi', emoji: '🫙', color: 'bg-blue-50 border-blue-300 text-blue-800', desc: 'Official Stockist' },
  { name: 'Lays / Kurkure', emoji: '🍟', color: 'bg-yellow-50 border-yellow-300 text-yellow-800', desc: 'Authorised Retailer' },
  { name: 'Omore', emoji: '🍦', color: 'bg-pink-50 border-pink-300 text-pink-800', desc: 'Franchise Partner' },
  { name: 'Walls', emoji: '🍨', color: 'bg-orange-50 border-orange-300 text-orange-800', desc: 'Authorised Stockist' },
  { name: 'NADRA e-Sahulat', emoji: '🇵🇰', color: 'bg-emerald-50 border-emerald-300 text-emerald-800', desc: 'Government Partner' },
  { name: 'Tapal Tea', emoji: '🍵', color: 'bg-amber-50 border-amber-300 text-amber-800', desc: 'Official Retailer' },
  { name: 'Bisconni', emoji: '🍪', color: 'bg-stone-50 border-stone-300 text-stone-700', desc: 'Authorised Dealer' },
  { name: 'WAPDA Payments', emoji: '⚡', color: 'bg-yellow-50 border-yellow-300 text-yellow-800', desc: 'Bill Collection Agent' },
  { name: 'SNGPL', emoji: '🔥', color: 'bg-orange-50 border-orange-300 text-orange-800', desc: 'Bill Collection Agent' },
]

export default function Collaborators() {
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
    <section id="collaborators" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-[#0f5c2e]/10 text-[#0f5c2e] text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            🤝 Our Partners
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-[#083d1e] section-heading mb-4">
            Trusted Brands & Collaborators
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-body text-lg">
            We're proud to be an authorised retailer and partner of Pakistan's most trusted brands and services.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {collaborators.map((c, i) => (
            <div key={c.name} className={`reveal card-hover border-2 rounded-2xl p-4 text-center ${c.color}`} style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="text-3xl mb-2">{c.emoji}</div>
              <div className="font-bold text-sm leading-tight mb-1">{c.name}</div>
              <div className="text-xs opacity-70">{c.desc}</div>
            </div>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className="mt-14 reveal">
          <div className="bg-gradient-to-br from-[#fdf6e3] to-[#f5e8c0] border-2 border-[#e8dcc8] rounded-3xl p-8 sm:p-12 text-center">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#083d1e] mb-3">
              Become Our Partner
            </h3>
            <p className="text-gray-500 max-w-lg mx-auto font-body text-base mb-6">
              Are you a brand, distributor, or service provider? We'd love to collaborate and serve the community together.
            </p>
            <a href="#contact" className="btn-primary px-8 py-4 text-base font-bold inline-block">
              📬 Contact for Partnership
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
