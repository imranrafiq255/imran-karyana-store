'use client'
import { useEffect, useRef } from 'react'

const services = [
  {
    name: 'EasyPaisa',
    logo: '🟢',
    color: 'from-green-500 to-emerald-700',
    bg: 'bg-green-50',
    border: 'border-green-200',
    textColor: 'text-green-800',
    badgeBg: 'bg-green-600',
    features: [
      '💸 Cash Withdrawal (OTC)',
      '📲 Mobile Load & Transfers',
      '🏠 Utility Bill Payments',
      '🏦 Bank Account Transfer',
      '✅ Account Opening Help',
      '🔒 Secure & Instant',
    ],
    desc: 'Send & receive money, pay bills, and withdraw cash instantly with Pakistan\'s leading mobile wallet.',
    commission: 'Commission per transaction',
  },
  {
    name: 'JazzCash',
    logo: '🔴',
    color: 'from-red-500 to-red-700',
    bg: 'bg-red-50',
    border: 'border-red-200',
    textColor: 'text-red-800',
    badgeBg: 'bg-red-600',
    features: [
      '💰 Cash Withdrawal Available',
      '📡 Zong & Jazz Loads',
      '🏧 OTC Cash Services',
      '🏪 Merchant Payments',
      '💳 Debit Card Services',
      '⚡ Real-Time Processing',
    ],
    desc: 'Fast, reliable mobile banking through Jazz. Withdraw cash, pay bills, and manage your finances with ease.',
    commission: 'Commission per transaction',
  },
  {
    name: 'Utility Bills',
    logo: '⚡',
    color: 'from-[#c8920a] to-amber-700',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    textColor: 'text-amber-800',
    badgeBg: 'bg-amber-600',
    features: [
      '💡 WAPDA / LESCO Bills',
      '💧 WASA Water Bills',
      '📺 PTCL & Internet Bills',
      '🔥 SNGPL Gas Bills',
      '📮 Any National Utility',
      '🧾 Instant Digital Receipt',
    ],
    desc: 'Pay all your utility bills in one place — electricity, gas, water, and internet. No queues, no hassle.',
    commission: 'Small convenience fee',
  },
  {
    name: 'NADRA e-Sahulat',
    logo: '🇵🇰',
    color: 'from-[#0f5c2e] to-[#083d1e]',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    textColor: 'text-emerald-800',
    badgeBg: 'bg-emerald-700',
    features: [
      '🪪 CNIC Verification',
      '🎓 Fee Payments',
      '🏛️ Govt. Form Processing',
      '📋 BISP/Ehsaas Payments',
      '🏥 Health Cards',
      '📜 Certificate Verification',
    ],
    desc: 'Access government services digitally. Pay government fees, verify CNICs, and complete official processes fast.',
    commission: 'Per transaction basis',
  },
]

export default function DigitalServices() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="digital" className="py-24 bg-[#083d1e] relative overflow-hidden" ref={sectionRef}>
      {/* Decorative bg */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #f0c040 0%, transparent 50%), radial-gradient(circle at 80% 20%, #1a8a47 0%, transparent 50%)' }} />
      <div className="absolute inset-0"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-[#f0c040]/20 text-[#f0c040] text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 border border-[#f0c040]/30">
            📱 Digital Services
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white section-heading mb-4">
            Banking & Payments
            <span className="block gradient-text">At Your Doorstep</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto font-body text-lg">
            No need to travel far — withdraw cash, pay bills, and transfer money right here at Imran Karyana Store.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
          {services.map((svc, i) => (
            <div key={svc.name} className={`reveal group`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className={`${svc.bg} ${svc.border} border-2 rounded-2xl p-6 h-full card-hover relative overflow-hidden`}>
                {/* Top gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${svc.color}`} />

                {/* Logo & Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center text-2xl shadow-lg`}>
                    {svc.logo}
                  </div>
                  <div>
                    <h3 className={`font-display font-black text-xl ${svc.textColor}`}>{svc.name}</h3>
                    <span className={`${svc.badgeBg} text-white text-xs px-2 py-0.5 rounded-full font-semibold`}>
                      Available Now
                    </span>
                  </div>
                </div>

                {/* Desc */}
                <p className={`${svc.textColor} opacity-80 text-sm mb-5 font-body leading-relaxed`}>{svc.desc}</p>

                {/* Features */}
                <ul className="space-y-2 mb-5">
                  {svc.features.map((f, fi) => (
                    <li key={fi} className={`flex items-center gap-2 text-sm ${svc.textColor} font-body`}>
                      <span className="text-base">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Commission note */}
                <div className={`mt-auto pt-4 border-t border-current/10 flex items-center gap-2`}>
                  <span className="text-lg">💡</span>
                  <span className={`text-xs ${svc.textColor} font-semibold opacity-70`}>{svc.commission}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA row */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 reveal">
          {[
            { icon: '⏰', title: 'Open 7 Days', desc: '8 AM to 10 PM every day — weekdays and weekends.' },
            { icon: '⚡', title: 'Instant Processing', desc: 'All digital transactions completed in under 2 minutes.' },
            { icon: '🔒', title: '100% Secure', desc: 'Official franchised partner — your money is safe.' },
          ].map((item) => (
            <div key={item.title} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center text-white">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="font-display font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-white/70 text-sm font-body">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" fill="#fdf6e3" />
        </svg>
      </div>
    </section>
  )
}
