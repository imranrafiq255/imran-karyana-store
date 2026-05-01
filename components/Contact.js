"use client";
import { useState, useEffect, useRef } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'
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

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-[#0f5c2e]/10 text-[#0f5c2e] text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            📬 Get In Touch
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-[#083d1e] section-heading mb-4">
            We're Here to Help
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-body text-lg">
            Have a question, need a bulk order, or want to share feedback? Reach
            out — we respond within the hour.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left: Info cards */}
          <div className="lg:col-span-2 space-y-5 reveal-left">
            {[
              {
                icon: "📍",
                title: "Our Location",
                lines: ["Imran Karyana Store", "Bahawalpur, Punjab, Pakistan"],
              },
              {
                icon: "📞",
                title: "Call Us",
                lines: ["+92-303-6751255", "Available 8 AM – 10 PM"],
              },
              {
                icon: "📧",
                title: "Email Us",
                lines: [
                  "mohammedimranrafique@gmail.com",
                  "We reply within 1 hour",
                ],
              },
              {
                icon: "⏰",
                title: "Business Hours",
                lines: ["Monday – Sunday", "8:00 AM to 10:00 PM"],
              },
            ].map((info) => (
              <div
                key={info.title}
                className="flex items-start gap-4 p-5 bg-[#fdf6e3] border-2 border-[#e8dcc8] rounded-2xl card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0f5c2e] text-white flex items-center justify-center text-xl flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <div className="font-bold text-[#083d1e] mb-0.5">
                    {info.title}
                  </div>
                  {info.lines.map((l, i) => (
                    <div key={i} className="text-sm text-gray-500 font-body">
                      {l}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/923036751255?text=Hello%20Imran%20Karyana%20Store%2C%20I%20have%20a%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-[#25d366] rounded-2xl text-white font-bold card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.122 1.528 5.855L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.017-1.376l-.36-.214-3.754.979.999-3.645-.234-.374A9.818 9.818 0 1112 21.818z" />
                </svg>
              </div>
              <div>
                <div className="text-base">Chat on WhatsApp</div>
                <div className="text-white/80 text-sm font-normal">
                  Get instant reply
                </div>
              </div>
              <div className="ml-auto text-white/60 group-hover:translate-x-1 transition-transform">
                →
              </div>
            </a>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 reveal-right">
            <div className="bg-[#fdf6e3] border-2 border-[#e8dcc8] rounded-3xl p-8 shadow-md">
              <h3 className="font-display font-bold text-2xl text-[#083d1e] mb-6">
                Send Us a Message
              </h3>

              {status === "success" && (
                <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl text-green-800 font-semibold text-center">
                  ✅ Message sent! We'll get back to you shortly.
                </div>
              )}
              {status === "error" && (
                <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl text-red-700 font-semibold text-center">
                  ❌ Something went wrong. Please try WhatsApp or call us
                  directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-[#083d1e] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Ahmed Raza"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#083d1e] mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+92-300-0000000"
                      className="form-input"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#083d1e] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="ahmed@example.com"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#083d1e] mb-1.5">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="">Select a subject</option>
                    <option value="Bulk Order">🛒 Bulk Order</option>
                    <option value="Home Delivery">🏠 Home Delivery</option>
                    <option value="Digital Services">
                      📱 Digital Services Query
                    </option>
                    <option value="Bill Payment">⚡ Bill Payment</option>
                    <option value="Feedback">💬 Feedback</option>
                    <option value="Other">📋 Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#083d1e] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    className="form-input resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`w-full btn-primary text-center py-4 text-base font-bold transition-all duration-300 ${status === "sending" ? "opacity-60 cursor-not-allowed" : ""}`}
                >
                  {status === "sending" ? "⏳ Sending..." : "📨 Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
