# Imran Karyana Store — Website

## 🚀 Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Email:** Nodemailer (Gmail SMTP)
- **Hosting:** Vercel (recommended)

## 📁 Project Structure
```
app/
  page.js           → Main landing page
  layout.js         → Root layout + SEO metadata
  globals.css       → Global styles + animations
  sitemap.js        → Auto SEO sitemap
  robots.js         → Search engine rules
  api/contact/
    route.js        → Email contact form API

components/
  Navbar.js         → Sticky responsive navbar
  Hero.js           → Auto-play image carousel hero
  Ticker.js         → Scrolling announcement ticker
  Services.js       → Products with filter tabs
  DigitalServices.js → EasyPaisa, JazzCash, Bills, NADRA
  CelebritySection.js → Customer photo gallery
  WhyUs.js          → Trust factors + testimonials
  OpeningHours.js   → Weekly opening hours
  Owner.js          → Team / owner profiles
  Contact.js        → Contact form (emails to your Gmail)
  Location.js       → Google Maps embed
  Collaborators.js  → Brand & partner logos
  Footer.js         → Full footer with Built with ❤️ by Imran Malik
  WhatsAppButton.js → Floating WhatsApp CTA
```

## 🔧 Setup & Deployment

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Environment Variables
Create `.env.local`:
```
EMAIL_USER=mohammedimranrafique@gmail.com
EMAIL_PASS=your_gmail_app_password
```

> ⚠️ For Gmail: Enable 2FA, then generate an **App Password** at myaccount.google.com/apppasswords

### 3. Run Development Server
```bash
npm run dev
```

### 4. Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```
Add `EMAIL_USER` and `EMAIL_PASS` in your Vercel project settings under **Environment Variables**.

## 📸 Adding Your Own Images
- **Hero carousel:** Edit `components/Hero.js` → update the `img` field in each slide
- **Celebrity/customer photos:** Edit `components/CelebritySection.js` → update `img` fields
- **Team photos:** Edit `components/Owner.js` → update `img` fields
- **Logo:** Replace the `IK` text in `Navbar.js` and `Footer.js` with an `<Image>` tag pointing to `/public/logo.png`

## 📞 Update Contact Info
Search and replace `923000000000` with your real WhatsApp number across all components.

## 🌐 Domain
Update `metadataBase` in `app/layout.js` and sitemap URLs to your real domain.

## ✅ SEO Checklist
- [x] Meta title & description
- [x] Open Graph tags
- [x] Twitter card
- [x] JSON-LD structured data (GroceryStore schema)
- [x] Auto sitemap.xml
- [x] Robots.txt
- [x] Geo meta tags (Bahawalpur)
- [x] Semantic HTML
- [x] Mobile responsive
- [x] Fast image loading (lazy + eager)
