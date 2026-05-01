"use client";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Products" },
  { href: "#digital", label: "Digital Services" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#owner", label: "Our Team" },
  { href: "#contact", label: "Contact" },
];

const services = [
  "🟢 EasyPaisa Cash & Transfer",
  "🔴 JazzCash Withdrawal",
  "⚡ Utility Bill Payments",
  "🇵🇰 NADRA e-Sahulat",
  "🛒 Fresh Groceries",
  "❄️ Cold Drinks & Ice Cream",
  "🍿 Snacks & Biscuits",
  "🏠 Home Delivery",
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scroll = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#051f0f] text-white relative overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z"
            fill="#fdf6e3"
          />
        </svg>
      </div>

      {/* Background decorations */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 80%, #0f5c2e 0%, transparent 50%), radial-gradient(circle at 90% 20%, #c8920a 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main footer grid */}
        <div className="pt-20 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-13 h-13 w-12 h-12 rounded-xl bg-[#f0c040] flex items-center justify-center font-display font-black text-xl text-[#083d1e] shadow-xl">
                IK
              </div>
              <div>
                <div className="font-display font-black text-xl">
                  Imran Karyana Store
                </div>
                <div className="text-[#c8920a] text-xs font-semibold">
                  Store • Channi Goth
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm font-body leading-relaxed mb-5">
              Your trusted neighbourhood karyana store in Channi Goth. Fresh
              groceries, digital payments, and daily essentials — all under one
              roof.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://wa.me/923036751255"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#25d366] flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.122 1.528 5.855L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.017-1.376l-.36-.214-3.754.979.999-3.645-.234-.374A9.818 9.818 0 1112 21.818z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/mohammedimranrafique/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#1877f2] flex items-center justify-center hover:scale-110 transition-transform shadow-lg text-white font-bold text-sm"
              >
                f
              </a>
              <a
                href="https://www.instagram.com/imran.writes___/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center hover:scale-110 transition-transform shadow-lg text-white text-sm"
              >
                📸
              </a>
              <a
                href="mailto:mohammedimranrafique@gmail.com"
                className="w-10 h-10 rounded-xl bg-[#0f5c2e] flex items-center justify-center hover:scale-110 transition-transform shadow-lg text-white text-sm"
              >
                ✉️
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-5 text-[#f0c040]">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scroll(link.href)}
                    className="text-white/60 hover:text-[#f0c040] text-sm font-body transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0f5c2e] group-hover:bg-[#f0c040] transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-5 text-[#f0c040]">
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.map((s, i) => (
                <li
                  key={i}
                  className="text-white/60 text-sm font-body hover:text-white transition-colors"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-5 text-[#f0c040]">
              Contact Info
            </h4>
            <div className="space-y-4">
              {[
                {
                  icon: "📍",
                  label: "Address",
                  val: "Channi Goth, Punjab, Pakistan",
                },
                { icon: "📞", label: "Phone", val: "+92-303-6751255" },
                {
                  icon: "📧",
                  label: "Email",
                  val: "mohammedimranrafique@gmail.com",
                },
                { icon: "⏰", label: "Hours", val: "Mon–Sun: 8 AM – 10 PM" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="text-lg mt-0.5">{item.icon}</span>
                  <div>
                    <div className="text-[#c8920a] text-xs font-bold uppercase tracking-wide">
                      {item.label}
                    </div>
                    <div className="text-white/70 text-sm font-body">
                      {item.val}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency contact */}
            <div className="mt-5 bg-[#0f5c2e]/40 border border-[#0f5c2e] rounded-xl p-4">
              <div className="text-[#f0c040] font-bold text-sm mb-1">
                🚨 Emergency Stock?
              </div>
              <div className="text-white/70 text-xs">
                WhatsApp us at any time — we try our best to help!
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/50 text-sm font-body text-center sm:text-left">
            © {year} Imran Karyana Store, Channi Goth. All rights reserved.
          </div>
          <div className="text-white/50 text-sm font-body flex items-center gap-2">
            Built with{" "}
            <span className="text-red-400 text-base animate-float inline-block">
              ❤️
            </span>{" "}
            by
            <span className="text-[#f0c040] font-bold">Imran Malik</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
