import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import siteConfig from "../config/siteConfig";
import Container from "./Container";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const scrollToStory = (e) => {
    e.preventDefault();
    const storySection = document.querySelector("#story");
    if (storySection) {
      storySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[88vh] lg:min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-12 sm:pb-16 overflow-hidden bg-bg-primary"
    >
      {/* Background Live Performance Image with Cinematic Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {!imageError ? (
          <img
            src={siteConfig.heroImage}
            alt="Karthik guitar live performance"
            className={`w-full h-full object-cover object-[center_24%] sm:object-[65%_25%] lg:object-[70%_25%] transition-opacity duration-1000 ${
              imageLoaded ? "opacity-60 scale-100" : "opacity-0 scale-105"
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            loading="eager"
          />
        ) : (
          /* Graceful dark cinematic fallback */
          <div className="w-full h-full bg-gradient-to-br from-[#1a1714] via-[#121110] to-[#0a0a0a]" />
        )}

        {/* Cinematic atmospheric overlays for high contrast and seamless section transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/80 to-bg-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/90 via-bg-primary/65 to-bg-primary/40" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg-primary to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 my-auto">
        <Container className="text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="inline-flex items-center gap-3 mb-6 sm:mb-8"
          >
            <span className="w-6 sm:w-10 h-[1px] bg-accent/60" />
            <p className="text-accent text-[11px] sm:text-xs tracking-[0.3em] uppercase font-sans font-medium">
              {siteConfig.eyebrow}
            </p>
            <span className="w-6 sm:w-10 h-[1px] bg-accent/60" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[94px] text-text-primary leading-[1.08] tracking-tight mb-6 sm:mb-8 max-w-4xl mx-auto drop-shadow-sm"
          >
            <span className="block font-normal">{siteConfig.headingLine1}</span>
            <span className="block font-normal italic text-text-primary/95">
              {siteConfig.headingLine2}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-text-secondary text-base sm:text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-light"
          >
            {siteConfig.subtitle}
          </motion.p>
        </Container>
      </div>

      {/* Scroll indicator CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative z-10 flex justify-center mt-8 sm:mt-12"
      >
        <a
          href="#story"
          onClick={scrollToStory}
          className="group inline-flex flex-col items-center gap-2 text-text-secondary hover:text-accent transition-colors duration-300 focus:outline-hidden"
          aria-label={siteConfig.scrollCta}
        >
          <span className="text-[11px] sm:text-xs tracking-[0.24em] uppercase font-sans font-medium">
            {siteConfig.scrollCta}
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown
              size={18}
              className="text-text-secondary/70 group-hover:text-accent transition-colors"
            />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
