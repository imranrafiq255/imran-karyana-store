'use client'
import { useEffect, useRef, useState } from 'react'

const hours = [
  { day: 'Monday', open: '8:00 AM', close: '10:00 PM' },
  { day: 'Tuesday', open: '8:00 AM', close: '10:00 PM' },
  { day: 'Wednesday', open: '8:00 AM', close: '10:00 PM' },
  { day: 'Thursday', open: '8:00 AM', close: '10:00 PM' },
  { day: 'Friday', open: '8:00 AM', close: '10:00 PM' },
  { day: 'Saturday', open: '8:00 AM', close: '10:30 PM' },
  { day: 'Sunday', open: '9:00 AM', close: '10:00 PM' },
]

export default function OpeningHours() {
  const ref = useRef(null)
  const [currentDay, setCurrentDay] = useState('')

  useEffect(() => {
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    setCurrentDay(days[new Date().getDay()])
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-[#0f5c2e] to-[#083d1e] relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 reveal">
          <h2 className="font-display font-black text-4xl text-white section-heading mb-3">⏰ Opening Hours</h2>
          <p className="text-white/70 font-body">We're open every day of the week for your convenience</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          {hours.map((h, i) => (
            <div key={h.day} className={`reveal flex items-center justify-between p-4 rounded-xl border transition-all ${
              h.day === currentDay
                ? 'bg-[#f0c040] border-[#f0c040] text-[#083d1e]'
                : 'bg-white/10 border-white/15 text-white hover:bg-white/15'
            }`} style={{ transitionDelay: `${i*60}ms` }}>
              <div className="flex items-center gap-3">
                {h.day === currentDay && <span className="w-2.5 h-2.5 rounded-full bg-[#0f5c2e] animate-pulse" />}
                <span className={`font-bold text-sm ${h.day === currentDay ? 'text-[#083d1e]' : 'text-white'}`}>
                  {h.day} {h.day === currentDay && '(Today)'}
                </span>
              </div>
              <span className={`font-semibold text-sm ${h.day === currentDay ? 'text-[#083d1e]' : 'text-white/80'}`}>
                {h.open} – {h.close}
              </span>
            </div>
          ))}
        </div>

        <div className="reveal grid sm:grid-cols-2 gap-4">
          <div className="bg-white/10 border border-white/20 rounded-2xl p-5 text-center text-white">
            <div className="text-3xl mb-2">🛒</div>
            <div className="font-bold">Walk-in Shopping</div>
            <div className="text-white/60 text-sm">All days, all hours</div>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-2xl p-5 text-center text-white">
            <div className="text-3xl mb-2">📱</div>
            <div className="font-bold">WhatsApp Orders</div>
            <div className="text-white/60 text-sm">8 AM – 9 PM daily</div>
          </div>
        </div>
      </div>
    </section>
  )
}
