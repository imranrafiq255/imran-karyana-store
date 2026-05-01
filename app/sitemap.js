export default function sitemap() {
  return [
    { url: 'https://imrankaryana.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://imrankaryana.com/#services', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://imrankaryana.com/#digital', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://imrankaryana.com/#contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
