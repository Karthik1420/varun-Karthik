import SectionReveal from "./SectionReveal";
import Container from "./Container";
import siteConfig from "../config/siteConfig";

export default function Story() {
  const { story } = siteConfig;

  return (
    <section id="story" className="py-24 sm:py-28 lg:py-32 bg-bg-primary relative">
      <Container>
        {/* Editorial Two-Column Layout on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading & Label (Sticky on large screens) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <SectionReveal>
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-accent/60" />
                <p className="text-accent text-[11px] sm:text-xs tracking-[0.26em] uppercase font-sans font-medium">
                  {story.sectionLabel}
                </p>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-text-primary leading-[1.14] tracking-tight mb-6">
                {story.heading}
              </h2>

              <div className="w-12 h-[2px] bg-accent mb-8" />

              {/* Editorial pull quote on desktop */}
              <div className="hidden lg:block pt-6 border-t border-border-subtle/70">
                <p className="font-serif italic text-lg text-accent/90 leading-relaxed">
                  “Music has a way of bringing people together.”
                </p>
              </div>
            </SectionReveal>
          </div>

          {/* Right Column: Narrative Body */}
          <div className="lg:col-span-7">
            {/* Opening prominent paragraph */}
            <SectionReveal delay={0.1}>
              <p className="font-serif text-xl sm:text-2xl text-accent/95 italic leading-[1.65] mb-8 pb-6 border-b border-border-subtle/60">
                {story.openingHighlight}
              </p>
            </SectionReveal>

            {/* Narrative paragraphs */}
            <div className="space-y-6 text-text-secondary text-[16px] sm:text-[17px] leading-[1.85] font-light">
              {story.paragraphs.map((paragraph, index) => (
                <SectionReveal key={index} delay={0.15 + index * 0.05}>
                  <p>{paragraph}</p>
                </SectionReveal>
              ))}
            </div>

            {/* Closing statement & Artist Signatures */}
            <SectionReveal delay={0.4}>
              <div className="mt-10 sm:mt-12 pt-8 border-t border-border-subtle">
                <p className="font-serif text-xl sm:text-2xl text-text-primary italic leading-snug mb-6">
                  {story.closing}
                </p>

                <div className="flex items-center gap-5 sm:gap-8 pt-2">
                  <span className="font-serif text-2xl sm:text-3xl text-accent/90 italic tracking-wide">
                    {story.signatures[0]}
                  </span>
                  <span className="text-border-subtle text-xl font-light">×</span>
                  <span className="font-serif text-2xl sm:text-3xl text-accent/90 italic tracking-wide">
                    {story.signatures[1]}
                  </span>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
