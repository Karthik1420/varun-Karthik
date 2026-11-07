import { ArrowUp } from "lucide-react";
import siteConfig from "../config/siteConfig";
import Container from "./Container";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 sm:py-20 bg-bg-primary border-t border-border-subtle relative">
      <Container className="text-center">
        {/* Back to Top CTA */}
        <button
          onClick={scrollToTop}
          type="button"
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-subtle/80 hover:border-accent/40 bg-bg-secondary/40 text-text-secondary hover:text-accent transition-all duration-200 mb-10 cursor-pointer focus:outline-hidden"
          aria-label="Scroll back to top of page"
        >
          <ArrowUp
            size={14}
            className="group-hover:-translate-y-0.5 transition-transform duration-200 text-accent"
          />
          <span className="text-[11px] uppercase tracking-[0.2em] font-sans font-medium">
            Back to top
          </span>
        </button>

        {/* Brand */}
        <h3 className="font-serif text-2xl sm:text-3xl text-text-primary tracking-tight mb-2.5">
          {siteConfig.footer.brand}
        </h3>

        {/* Tagline */}
        <p className="text-text-secondary text-sm font-light tracking-wide max-w-sm mx-auto">
          {siteConfig.footer.tagline}
        </p>

        {/* Subtle copyright */}
        <p className="text-text-secondary/50 text-[11px] font-sans mt-8 tracking-wider uppercase">
          &copy; {new Date().getFullYear()} {siteConfig.duoName}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
