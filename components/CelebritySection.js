"use client";
import { useEffect, useRef } from "react";

const celebrities = [
  {
    id: 1,
    name: "Customer Enjoying Drinks",
    role: "Happy Customer",
    img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=500&q=80",
    quote: "Best cold drinks in Channi Goth!",
  },
  {
    id: 2,
    name: "Family Shopping Time",
    role: "Regular Family",
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&q=80",
    quote: "Fresh groceries every single day.",
  },
  {
    id: 3,
    name: "Friends & Snacks",
    role: "Youth Customers",
    img: "https://images.unsplash.com/photo-1527015175922-36a306cf0e20?w=500&q=80",
    quote: "Lays & Kurkure always available!",
  },
  {
    id: 4,
    name: "Ice Cream Lovers",
    role: "Sweet Tooth Fans",
    img: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=500&q=80",
    quote: "Omore & Walls — always stocked!",
  },
  {
    id: 5,
    name: "Digital Payment User",
    role: "Tech-Savvy Customer",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80",
    quote: "Paid my bill in 2 minutes flat!",
  },
  {
    id: 6,
    name: "Morning Grocery Run",
    role: "Daily Customer",
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&q=80",
    quote: "My go-to store every morning.",
  },
];

export default function CelebritySection() {
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
    <section className="py-24 bg-[#083d1e] relative overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at top left, #f0c040 0%, transparent 60%), radial-gradient(ellipse at bottom right, #1a8a47 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-[#f0c040]/20 text-[#f0c040] text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 border border-[#f0c040]/30">
            😍 Customer Moments
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white section-heading mb-4">
            People Love Our Store
          </h2>
          <p className="text-white/70 max-w-xl mx-auto font-body text-lg">
            Real moments of joy — snacks, cold drinks, and ice creams making
            everyday life sweeter.
            <br />
            <span className="text-[#f0c040] text-sm font-semibold italic">
              (Your photos will appear here once uploaded)
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {celebrities.map((item, i) => (
            <div
              key={item.id}
              className="reveal group card-hover relative overflow-hidden rounded-2xl shadow-xl"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Overlay text */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-xl p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-[#f0c040] text-xl mt-0.5">"</span>
                    <p className="text-white text-sm font-body italic leading-snug">
                      {item.quote}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold text-sm">
                        {item.name}
                      </div>
                      <div className="text-[#f0c040] text-xs">{item.role}</div>
                    </div>
                    <div className="flex gap-0.5">
                      {"★★★★★".split("").map((s, j) => (
                        <span key={j} className="text-[#f0c040] text-sm">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
