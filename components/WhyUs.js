'use client'
import { useEffect, useRef } from 'react'

const reasons = [
  { icon: '🌿', title: 'Fresh Stock Daily', desc: 'We receive fresh deliveries every morning so you always get the best quality products.', color: 'bg-green-100 text-green-700' },
  { icon: '💰', title: 'Lowest Prices', desc: 'We match and beat local prices. Your rupee goes further at Imran Karyana Store.', color: 'bg-yellow-100 text-yellow-700' },
  { icon: '📱', title: 'Digital Services Hub', desc: 'EasyPaisa, JazzCash, bill payments — we\'re your one-stop digital services center.', color: 'bg-blue-100 text-blue-700' },
  { icon: '🏠', title: 'Home Delivery', desc: 'Free home delivery within the mohalla. Just WhatsApp your order and we\'ll bring it over.', color: 'bg-purple-100 text-purple-700' },
  { icon: '⏰', title: 'Open Every Day', desc: 'We\'re open from 8 AM to 10 PM, seven days a week — even on public holidays.', color: 'bg-orange-100 text-orange-700' },
  { icon: '🤝', title: 'Community Trust', desc: 'Serving the Bahawalpur community with honesty, fair weight, and genuine care.', color: 'bg-rose-100 text-rose-700' },
]

const stats = [
  { value: '500+', label: 'Products in Stock', icon: '📦' },
  { value: '1000+', label: 'Happy Families', icon: '👨‍👩‍👧‍👦' },
  { value: '5+', label: 'Years of Service', icon: '🏆' },
  { value: '4', label: 'Digital Services', icon: '📱' },
]

export default function WhyUs() {
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
    <section id="why-us" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-[#0f5c2e]/10 text-[#0f5c2e] text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            ⭐ Why Choose Us
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-[#083d1e] section-heading mb-4">
            Bahawalpur's Most Trusted<br /><span className="text-[#0f5c2e]">Karyana Store</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-body text-lg">
            We're not just a store — we're part of your neighbourhood. Here's why thousands of families choose us every day.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stats.map((s, i) => (
            <div key={s.label} className={`reveal text-center bg-gradient-to-br from-[#0f5c2e] to-[#1a8a47] rounded-2xl p-6 text-white shadow-xl`} style={{ transitionDelay: `${i*80}ms` }}>
              <div className="text-4xl mb-2">{s.icon}</div>
              <div className="font-display font-black text-3xl gradient-text mb-1">{s.value}</div>
              <div className="text-white/70 text-sm font-semibold">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reasons.map((r, i) => (
            <div key={r.title} className={`reveal card-hover rounded-2xl p-7 border-2 border-gray-100 bg-white shadow-sm`} style={{ transitionDelay: `${i*80}ms` }}>
              <div className={`w-14 h-14 rounded-2xl ${r.color} flex items-center justify-center text-2xl mb-5`}>
                {r.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-[#083d1e] mb-2">{r.title}</h3>
              <p className="text-gray-500 font-body text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-16 reveal">
          <h3 className="font-display font-black text-2xl text-center text-[#083d1e] mb-8">
            💬 What Our Customers Say
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { name: 'Ahmed Raza', area: 'Model Town, Bahawalpur', text: 'Best karyana store in the area! Prices are fair and they always have everything I need. EasyPaisa service is super quick.', stars: 5 },
              { name: 'Fatima Bibi', area: 'Satellite Town, Bahawalpur', text: 'I love the home delivery service. I just WhatsApp my order and it arrives within 30 minutes. Very convenient for us ladies.', stars: 5 },
              { name: 'Usman Ghani', area: 'Civil Lines, Bahawalpur', text: 'I pay all my WAPDA and SNGPL bills here every month. No need to stand in long queues anymore. Highly recommended!', stars: 5 },
            ].map((t, i) => (
              <div key={i} className="bg-[#fdf6e3] border-2 border-[#e8dcc8] rounded-2xl p-6 card-hover" style={{ transitionDelay: `${i*100}ms` }}>
                <div className="flex gap-1 mb-3">
                  {'★'.repeat(t.stars).split('').map((s, j) => <span key={j} className="text-[#c8920a] text-lg">{s}</span>)}
                </div>
                <p className="text-gray-600 text-sm font-body leading-relaxed mb-4 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0f5c2e] flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-[#083d1e] text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.area}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
