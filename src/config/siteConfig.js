/**
 * Site Configuration
 * ==================
 * Centralized, single source of truth for all editable content,
 * artist profiles, contact links, and payment details.
 */

const siteConfig = {
  // ─── Brand ───────────────────────────────────────────────
  duoName: "Karthik × Varun",
  eyebrow: "KARTHIK × VARUN",
  headingLine1: "Two paths.",
  headingLine2: "One rhythm.",
  subtitle: "Two musicians. One shared love for music. A journey still unfolding.",
  scrollCta: "Discover our story",
  heroImage: "/assets/karthik-performance.jpg",

  // ─── Navigation ──────────────────────────────────────────
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Our Story", href: "#story" },
    { label: "Connect", href: "#connect" },
    { label: "Support", href: "#support" },
  ],

  // ─── Section 2: Our Story ────────────────────────────────
  story: {
    sectionLabel: "OUR STORY",
    heading: "It started with a guitar lesson.",
    openingHighlight:
      "Music has a way of bringing people together, and ours began with a guitar lesson.",
    paragraphs: [
      "Karthik, a guitarist and instructor who grew up with music, was already exploring the world of performing and teaching when he met Varun — a passionate singer, a tech enthusiast, and someone who initially came along to learn guitar.",
      "Between guitar sessions, spontaneous jam sessions, shared ideas, and late-night musical experiments, a friendship grew into a creative partnership. We started making videos, exploring different sounds, and creating music together.",
      "From our college days to our twenties, from learning and experimenting to stepping onto live stages, the journey has kept evolving.",
      "Today, we're a duo brought together by music, driven by curiosity, and always looking for the next song, the next stage, and the next story to tell.",
    ],
    closing: "This is our journey. And we're just getting started.",
    signatures: ["Karthik", "Varun"],
  },

  // ─── Section 3: Connect & Bookings (Combined Section) ─────
  connect: {
    sectionLabel: "CONNECT & BOOKINGS",
    heading: "Find us beyond the stage.",
    subtitle:
      "The music doesn't stop when the performance ends. Follow along for videos, or reach out directly for live performances, cafe sessions and collaborations.",
    profiles: [
      {
        name: "Karthik",
        role: "Guitarist & Instructor",
        initials: "K",
        instagram: "https://www.instagram.com/karthikkbangera/",
        instagramHandle: "@karthikkbangera",
        phone: "6362475178",
        phoneFormatted: "+91 63624 75178",
        whatsapp: "https://wa.me/916362475178",
      },
      {
        name: "Varun",
        role: "Vocalist & Creative",
        initials: "V",
        instagram: "https://www.instagram.com/kulal.varun/",
        instagramHandle: "@kulal.varun",
        phone: "8197553982",
        phoneFormatted: "+91 81975 53982",
        whatsapp: "https://wa.me/918197553982",
      },
    ],
  },

  // ─── Section 4: Buy Us a Coffee ──────────────────────────
  support: {
    sectionLabel: "SUPPORT",
    heading: "Buy us a coffee.",
    description:
      "If our music made your day a little better, and you'd like to support what we do, we'd truly appreciate it. Every little gesture keeps the music going.",
    qrImage: "/assets/varun-gpay-qr.png",
    recipientName: "Varun Kulal",
    upiId: "varunkulal.vk-1@okhdfcbank",
  },

  // ─── Footer ──────────────────────────────────────────────
  footer: {
    brand: "Karthik × Varun",
    tagline: "Made with music. Always in tune.",
  },
};

export default siteConfig;
