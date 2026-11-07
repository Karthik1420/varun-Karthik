import { InstagramIcon } from "./icons";
import { Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import SectionReveal from "./SectionReveal";
import Container from "./Container";
import siteConfig from "../config/siteConfig";

function ProfileCard({ profile }) {
  return (
    <div className="h-full flex flex-col justify-between p-8 sm:p-10 rounded-sm bg-bg-primary/70 border border-border-subtle hover:border-accent/45 transition-all duration-300 group hover:-translate-y-1">
      <div>
        {/* Monogram Seal */}
        <div className="w-16 h-16 rounded-full border border-border-subtle bg-bg-secondary/90 flex items-center justify-center mb-7 group-hover:border-accent/40 transition-colors duration-300">
          <span className="font-serif text-2xl text-accent font-medium">
            {profile.initials}
          </span>
        </div>

        {/* Name and Role */}
        <h3 className="font-serif text-2xl sm:text-3xl text-text-primary mb-1.5 tracking-tight">
          {profile.name}
        </h3>
        <p className="text-accent/90 text-xs sm:text-sm tracking-wider uppercase font-medium mb-8">
          {profile.role}
        </p>
      </div>

      {/* Merged Actions: Instagram, Phone, and WhatsApp */}
      <div className="space-y-3 pt-4 border-t border-border-subtle/60">
        {/* Instagram Profile */}
        <a
          href={profile.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between w-full px-5 py-3.5 rounded-sm border border-border-subtle bg-bg-secondary/40 hover:bg-bg-secondary hover:border-accent/40 text-text-secondary hover:text-text-primary transition-all duration-200 group/link"
          aria-label={`Follow ${profile.name} on Instagram`}
        >
          <div className="flex items-center gap-3">
            <InstagramIcon
              size={17}
              className="text-accent group-hover/link:scale-110 transition-transform duration-200"
            />
            <span className="text-sm font-medium tracking-wide">
              {profile.instagramHandle}
            </span>
          </div>
          <ArrowUpRight
            size={16}
            className="text-text-secondary/60 group-hover/link:text-accent group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-200"
          />
        </a>

        {/* Direct Phone Dial */}
        <a
          href={`tel:+91${profile.phone}`}
          className="flex items-center justify-between w-full px-5 py-3.5 rounded-sm border border-border-subtle bg-bg-secondary/40 hover:bg-bg-secondary hover:border-accent/40 text-text-primary transition-all duration-200 group/tel"
          aria-label={`Call ${profile.name} at ${profile.phoneFormatted}`}
        >
          <div className="flex items-center gap-3">
            <Phone
              size={16}
              className="text-accent group-hover/tel:scale-110 transition-transform duration-200"
            />
            <span className="text-sm font-medium tracking-wide">
              {profile.phoneFormatted}
            </span>
          </div>
          <span className="text-[11px] uppercase tracking-wider text-text-secondary/70 group-hover/tel:text-accent">
            Call
          </span>
        </a>

        {/* WhatsApp Chat Link */}
        <a
          href={profile.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between w-full px-5 py-3.5 rounded-sm bg-accent/15 border border-accent/35 hover:bg-accent/25 hover:border-accent/60 text-accent transition-all duration-200 group/wa"
          aria-label={`Message ${profile.name} on WhatsApp`}
        >
          <div className="flex items-center gap-3">
            <MessageCircle
              size={16}
              className="text-accent group-hover/wa:scale-110 transition-transform duration-200"
            />
            <span className="text-sm font-medium tracking-wide">
              Message on WhatsApp
            </span>
          </div>
          <ArrowUpRight
            size={16}
            className="group-hover/wa:translate-x-0.5 group-hover/wa:-translate-y-0.5 transition-transform duration-200"
          />
        </a>
      </div>
    </div>
  );
}

export default function Connect() {
  const { connect } = siteConfig;

  return (
    <section id="connect" className="py-24 sm:py-28 lg:py-32 bg-bg-secondary relative">
      <Container>
        {/* Heading */}
        <SectionReveal>
          <div className="max-w-2xl mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-accent/60" />
              <p className="text-accent text-[11px] sm:text-xs tracking-[0.26em] uppercase font-sans font-medium">
                {connect.sectionLabel}
              </p>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-[1.15] tracking-tight mb-4">
              {connect.heading}
            </h2>
            <p className="text-text-secondary text-base sm:text-lg font-light leading-relaxed">
              {connect.subtitle}
            </p>
          </div>
        </SectionReveal>

        {/* Two-Column Equal Profile Cards */}
        <SectionReveal delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {connect.profiles.map((profile) => (
              <ProfileCard key={profile.name} profile={profile} />
            ))}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
