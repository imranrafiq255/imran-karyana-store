// app/sitemap.js
// ✅ Auto-submitted to Google via Search Console
// ✅ Accessible at: https://imran-karyana-store.vercel.app/sitemap.xml

const BASE_URL = "https://imran-karyana-store.vercel.app";

export default function sitemap() {
  const now = new Date();

  return [
    // ── HOMEPAGE ────────────────────────────────────────────────────────────
    // Highest priority — this is your most important page
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // ── PRODUCTS / SERVICES ─────────────────────────────────────────────────
    // Products change often (new stock, prices) — crawl frequently
    {
      url: `${BASE_URL}/#services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // ── DIGITAL SERVICES ────────────────────────────────────────────────────
    // EasyPaisa, JazzCash, Bills — high-intent search keywords
    {
      url: `${BASE_URL}/#digital`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // ── WHY US ──────────────────────────────────────────────────────────────
    {
      url: `${BASE_URL}/#why-us`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ── OWNER / TEAM ────────────────────────────────────────────────────────
    {
      url: `${BASE_URL}/#owner`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },

    // ── CONTACT ─────────────────────────────────────────────────────────────
    // Important for local SEO — Google looks for contact/location pages
    {
      url: `${BASE_URL}/#contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ── LOCATION ────────────────────────────────────────────────────────────
    // Critical for local SEO — "karyana store near me" searches
    {
      url: `${BASE_URL}/#location`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.8,
    },

    // ── COLLABORATORS / BRANDS ──────────────────────────────────────────────
    {
      url: `${BASE_URL}/#collaborators`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
