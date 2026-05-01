export default function Ticker() {
  const items = [
    '🛒 Fresh Groceries Daily', '❄️ Ice Cold Drinks', '🍦 Omore & Walls Ice Cream',
    '📱 EasyPaisa Transfers', '💚 JazzCash Withdrawal', '⚡ Instant Bill Payments',
    '🍪 Branded Snacks', '🌿 Quality Guaranteed', '🏠 Mohalla Home Delivery',
    '☀️ Open 8AM – 10PM', '💰 Best Prices in Bahawalpur', '🤝 Trusted Since Day One',
  ]
  const doubled = [...items, ...items]
  return (
    <div className="bg-[#0f5c2e] text-white py-3 overflow-hidden">
      <div className="ticker-content gap-10 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 font-semibold text-sm px-6">
            {item}
            <span className="text-[#f0c040] mx-2">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
