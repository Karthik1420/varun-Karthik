# Premium Music Duo Website — Karthik × Varun

A cinematic, responsive website for the independent music duo **Karthik × Varun**, built with React, Vite, and Tailwind CSS. Designed specifically for visitors discovering the duo via QR code at cafes and live performances.

## Visual Design

- **Theme**: Dark & Cinematic
- **Color Palette**:
  - Primary Background: `#101010`
  - Secondary Background: `#191817`
  - Primary Text: `#F5F0E8`
  - Secondary Text: `#AAA49B`
  - Accent: `#C89555`
  - Subtle Borders: `#37332E`
- **Typography**: Playfair Display (editorial serif) for expressive headings, Inter (clean sans-serif) for body text.

## Website Sections

1. **Hero**: Cinematic background image with dark atmospheric gradients, brand name `Karthik × Varun`, evocative headline *"Two paths. One rhythm."*, subtitle, and a subtle animated scroll indicator.
2. **Our Story**: Editorial two-column storytelling format recounting how the duo formed through a guitar lesson, with pull quotes and artist signatures.
3. **Connect & Bookings** (*"Find us beyond the stage."*): Consolidated profile cards for both Karthik and Varun containing their Instagram handles, direct calling links (`tel:`), and direct WhatsApp messaging links.
4. **Buy Us a Coffee** (*"Support"*): Non-intrusive support section with authentic Google Pay QR code (clickable to enlarge), copyable UPI ID (`varunkulal.vk-1@okhdfcbank`), and direct UPI deep-link buttons.
5. **Footer**: Minimal branding, tagline *"Made with music. Always in tune."*, and a smooth back-to-top interaction.

## Project Structure

```
website1/
├── public/
│   ├── favicon.svg              # Gold monogram guitar pick favicon
│   └── assets/
│       ├── karthik-performance.jpg  # Hero / performance photo
│       └── varun-gpay-qr.png        # Varun Kulal Google Pay QR
├── src/
│   ├── components/
│   │   ├── Container.jsx        # Reusable global layout container (1200px max, responsive padding)
│   │   ├── Navbar.jsx           # Sticky glassmorphism nav with mobile drawer
│   │   ├── Hero.jsx             # Hero section with live performance photo & overlay
│   │   ├── Story.jsx            # Editorial story section
│   │   ├── Connect.jsx          # Consolidated profile cards (Instagram + Phone + WhatsApp)
│   │   ├── Support.jsx          # UPI support & accessible QR code modal
│   │   ├── Footer.jsx           # Minimal footer with back-to-top
│   │   ├── SectionReveal.jsx    # Smooth scroll animation wrapper
│   │   └── icons.jsx            # Custom SVG icons
│   ├── config/
│   │   └── siteConfig.js        # ALL editable content and links in one file
│   ├── App.jsx                  # Root application component
│   ├── index.css                # Tailwind theme variables and base styles
│   └── main.jsx                 # Application entry point
├── index.html                   # HTML template with OpenGraph meta & fonts
├── package.json                 # Dependencies and build scripts
├── vercel.json                  # Vercel SPA rewrite configuration
└── vite.config.js               # Vite configuration
```

## Centralized Configuration

All text, links, phone numbers, and payment details are managed in:

```javascript
// src/config/siteConfig.js
```

Edit this single file to update:
- Duo name & tagline
- Story paragraphs & signatures
- Instagram handles & URLs
- Contact phone numbers & WhatsApp numbers
- UPI payment details & recipient name

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
