"use client";
import { useEffect, useRef } from "react";

const team = [
  {
    name: "Malik Rafique Ahmed",
    role: "Founder, Owner & Manager",
    number: "+92-300-3130846",
    img: "/assets/profile-avatar.png",
    bio: "Manages day-to-day store operations, inventory, and customer service with dedication and a smile.",
    badges: ["💼 Entrepreneur"],
    social: { wa: "https://wa.me/923003130846" },
    isOwner: true,
  },
  {
    name: "Imran Malik",
    role: "Founder & Owner",
    number: "+92-303-6751255",
    img: "/assets/imran-image.jpeg",
    bio: "A graduated software engineer turned entrepreneur. Imran brings ideas into reality with his knowledge.",
    badges: ["🎓 Software Engineer", "💼 Entrepreneur", "🏆 Community Leader"],
    social: { wa: "https://wa.me/923036751255" },
    isOwner: true,
  },
  {
    name: "Adnan Malik",
    role: "Senior Manager & Cashier",
    number: "+92-308-7834867",
    img: "/assets/profile-avatar.png",
    bio: "Handles all cash flow across store and keeps track of daily transactions with precision and care.",
    badges: ["😎 Honest", "💚 Trust"],
    social: { wa: "https://wa.me/923087834867" },
    isOwner: false,
  },
];

export default function Owner() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 },
    );
    ref.current
      ?.querySelectorAll(".reveal, .reveal-left, .reveal-right")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="owner" className="py-24 bg-[#fdf6e3]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-[#0f5c2e]/10 text-[#0f5c2e] text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            👥 Meet the Team
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-[#083d1e] section-heading mb-4">
            The People Behind
            <br />
            <span className="text-[#0f5c2e]">Imran Karyana Store</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-body text-lg">
            Dedicated professionals who work hard every day to serve you better.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div
              key={member.name + i}
              className={`reveal ${member.isOwner ? "lg:col-span-1" : ""}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className={`card-hover bg-white rounded-3xl overflow-hidden shadow-lg border-2 ${member.isOwner ? "border-[#c8920a]" : "border-gray-100"} relative`}
              >
                {member.isOwner && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-[#c8920a] to-[#f0c040] text-[#083d1e] text-xs font-black px-3 py-1.5 rounded-full shadow-lg">
                    👑 OWNER
                  </div>
                )}

                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#083d1e]/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {member.badges.map((b, j) => (
                        <span
                          key={j}
                          className="bg-white/20 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full border border-white/30 font-semibold"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-display font-black text-2xl text-[#083d1e] mb-1">
                    {member.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#0f5c2e]" />
                    <span className="text-[#0f5c2e] font-bold text-sm">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm font-body leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Contact */}
                  <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                    <a
                      href={`tel:${member.number}`}
                      className="flex items-center gap-2 text-[#083d1e] font-semibold text-sm hover:text-[#0f5c2e] transition-colors"
                    >
                      <span className="w-7 h-7 rounded-full bg-[#0f5c2e]/10 flex items-center justify-center text-sm">
                        📞
                      </span>
                      {member.number}
                    </a>
                    <a
                      href={member.social.wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[#25d366] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.122 1.528 5.855L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.017-1.376l-.36-.214-3.754.979.999-3.645-.234-.374A9.818 9.818 0 1112 21.818z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Values strip */}
        <div className="mt-14 reveal">
          <div className="bg-gradient-to-r from-[#0f5c2e] to-[#1a8a47] rounded-2xl p-8 grid sm:grid-cols-4 gap-6 text-white text-center">
            {[
              { icon: "🤝", label: "Honest Business" },
              { icon: "⚖️", label: "Fair Weight" },
              { icon: "💚", label: "Community First" },
              { icon: "📈", label: "Always Improving" },
            ].map((v) => (
              <div key={v.label}>
                <div className="text-3xl mb-2">{v.icon}</div>
                <div className="font-bold text-sm">{v.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
