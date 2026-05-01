import "./globals.css";

export const metadata = {
  verification: {
    google: "g0xJX6EItMq7o895BCZJqQnVHJx1xFr2DDAsI256qts",
  },

  // ✅ FIX: Point ALL icon variants directly to your PNG logo
  // Next.js injects these as <link> tags automatically — no manual tags needed in <head>
  icons: {
    icon: [{ url: "/Imran-Karyana-Store-Logo.png", type: "image/png" }],
    shortcut: "/Imran-Karyana-Store-Logo.png",
    apple: "/Imran-Karyana-Store-Logo.png",
    other: [
      {
        rel: "icon",
        url: "/Imran-Karyana-Store-Logo.png",
      },
    ],
  },

  title: "Imran Karyana Store – Channi Goth | Grocery, EasyPaisa & JazzCash",
  description:
    "Imran Karyana Store in Channi Goth – fresh groceries, cold drinks, ice cream, snacks, EasyPaisa & JazzCash cash withdrawal, and utility bill payments. Open 8AM–10PM daily.",

  keywords: [
    "Imran Karyana Store",
    "karyana store Channi Goth",
    "karyana store Bahawalpur",
    "kiryana dukan Channi Goth",
    "grocery store Channi Goth",
    "grocery store Bahawalpur Punjab",
    "EasyPaisa agent Channi Goth",
    "EasyPaisa Bahawalpur",
    "JazzCash withdrawal Channi Goth",
    "JazzCash agent Bahawalpur",
    "utility bill payment Channi Goth",
    "WAPDA bill payment Bahawalpur",
    "cash withdrawal Channi Goth",
    "daily grocery Bahawalpur",
    "cold drinks Channi Goth",
    "ice cream shop Bahawalpur",
    "snacks store Channi Goth",
    "NADRA e-Sahulat Bahawalpur",
    "mobile top up Channi Goth",
    "home delivery grocery Bahawalpur",
  ].join(", "),

  authors: [
    { name: "Imran Malik", url: "https://imran-karyana-store.vercel.app" },
  ],
  creator: "Imran Malik",
  publisher: "Imran Karyana Store",

  metadataBase: new URL("https://imran-karyana-store.vercel.app"),
  alternates: {
    canonical: "https://imran-karyana-store.vercel.app",
  },

  openGraph: {
    title: "Imran Karyana Store – Channi Goth",
    description:
      "Your trusted neighbourhood karyana store in Channi Goth. Fresh groceries, EasyPaisa, JazzCash, bill payments & home delivery — open 8AM to 10PM every day.",
    url: "https://imran-karyana-store.vercel.app",
    siteName: "Imran Karyana Store",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Imran Karyana Store – Channi Goth",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Imran Karyana Store – Channi Goth",
    description:
      "Fresh groceries, EasyPaisa, JazzCash & bill payments in Channi Goth. Open daily 8AM–10PM.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  applicationName: "Imran Karyana Store",
  category: "Grocery Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f5c2e" />

        {/* ✅ Geo tags */}
        <meta name="geo.region" content="PK-PB" />
        <meta name="geo.placename" content="Channi Goth, Punjab, Pakistan" />
        <meta name="geo.position" content="28.6444;70.6679" />
        <meta name="ICBM" content="28.6444, 70.6679" />

        <meta httpEquiv="content-language" content="en-PK" />
        <meta name="language" content="English" />

        {/* ✅ Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* ✅ REMOVED the manual <link rel="apple-touch-icon"> tag —
            Next.js metadata.icons already handles all favicon injection above.
            Having both causes a conflict and breaks favicon display. */}

        {/* ✅ JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GroceryStore",
              "@id": "https://imran-karyana-store.vercel.app/#business",
              name: "Imran Karyana Store",
              alternateName: "Imran Kiryana Dukan",
              url: "https://imran-karyana-store.vercel.app",
              logo: "https://imran-karyana-store.vercel.app/Imran-Karyana-Store-Logo.png",
              image: "https://imran-karyana-store.vercel.app/og-image.jpg",
              description:
                "Trusted neighbourhood karyana store in Channi Goth, Punjab. Offering fresh groceries, cold drinks, ice cream, snacks, EasyPaisa & JazzCash cash withdrawal, utility bill payments, and home delivery.",
              telephone: "+92-303-6751255",
              email: "mohammedimranrafique@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Channi Goth",
                addressLocality: "Bahawalpur",
                addressRegion: "Punjab",
                postalCode: "64200",
                addressCountry: "PK",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "28.6444",
                longitude: "70.6679",
              },
              hasMap:
                "https://maps.google.com/?q=Channi+Goth+Bahawalpur+Punjab+Pakistan",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "08:00",
                  closes: "22:00",
                },
              ],
              priceRange: "₨",
              currenciesAccepted: "PKR",
              paymentAccepted: "Cash, EasyPaisa, JazzCash",
              servesCuisine: "Grocery",
              areaServed: { "@type": "City", name: "Bahawalpur" },
              sameAs: [
                "https://www.facebook.com/mohammedimranrafique/",
                "https://www.instagram.com/imran.writes___/",
                "https://wa.me/923036751255",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Imran Karyana Store Products & Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "EasyPaisa Cash Withdrawal",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "JazzCash Transfer",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Utility Bill Payment",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "NADRA e-Sahulat",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Fresh Groceries",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Product", name: "Cold Drinks" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Product", name: "Ice Cream" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Product", name: "Snacks" },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
