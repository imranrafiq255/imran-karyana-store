import './globals.css'

export const metadata = {
  title: 'Imran Karyana Store – Bahawalpur | Grocery, EasyPaisa, JazzCash & Bill Payments',
  description: 'Imran Karyana Store in Bahawalpur – your trusted neighborhood store for fresh groceries, cold drinks, snacks, EasyPaisa & JazzCash cash withdrawal, utility bill payments, and more.',
  keywords: 'karyana store Bahawalpur, grocery store Bahawalpur, EasyPaisa Bahawalpur, JazzCash Bahawalpur, bill payment Bahawalpur, Imran Karyana Store',
  authors: [{ name: 'Imran Malik' }],
  metadataBase: new URL('https://imrankaryana.vercel.app'),
  openGraph: {
    title: 'Imran Karyana Store – Bahawalpur',
    description: 'Your trusted neighborhood store for groceries, digital payments, and daily essentials in Bahawalpur.',
    siteName: 'Imran Karyana Store',
    locale: 'en_PK',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GroceryStore",
              "name": "Imran Karyana Store",
              "description": "Trusted neighborhood karyana store in Bahawalpur.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bahawalpur",
                "addressRegion": "Punjab",
                "addressCountry": "PK"
              },
              "telephone": "+92-300-0000000",
              "openingHours": "Mo-Su 08:00-22:00",
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
