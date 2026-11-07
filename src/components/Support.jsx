import { useState, useEffect } from "react";
import { Copy, Check, Heart, ExternalLink, X, ZoomIn } from "lucide-react";
import SectionReveal from "./SectionReveal";
import Container from "./Container";
import siteConfig from "../config/siteConfig";

export default function Support() {
  const { support } = siteConfig;
  const [copied, setCopied] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);

  useEffect(() => {
    if (!showQrModal) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowQrModal(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showQrModal]);

  const copyUpiId = async () => {
    try {
      await navigator.clipboard.writeText(support.upiId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = support.upiId;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const upiPaymentUrl = `upi://pay?pa=${encodeURIComponent(
    support.upiId
  )}&pn=${encodeURIComponent(support.recipientName)}&cu=INR`;

  return (
    <>
      <section id="support" className="py-24 sm:py-28 lg:py-32 bg-bg-primary relative">
        <Container>
          <SectionReveal>
            <div className="rounded-sm border border-border-subtle bg-bg-secondary/40 p-8 sm:p-12 lg:p-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Left Column: Heading, Description & Payment Details */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <span className="w-8 h-[1px] bg-accent/60" />
                    <p className="text-accent text-[11px] sm:text-xs tracking-[0.26em] uppercase font-sans font-medium">
                      {support.sectionLabel}
                    </p>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-text-primary leading-[1.15] tracking-tight mb-4">
                    {support.heading}
                  </h2>

                  <p className="text-text-secondary text-base sm:text-lg font-light leading-relaxed mb-8">
                    {support.description}
                  </p>

                  {/* Payment Details Block */}
                  <div className="p-5 sm:p-6 rounded-sm bg-bg-primary/80 border border-border-subtle/80 mb-8 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border-subtle/50 pb-3">
                      <span className="text-xs uppercase tracking-wider text-text-secondary/80 font-sans">
                        Pay To
                      </span>
                      <span className="text-text-primary font-medium text-base">
                        {support.recipientName}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                      <span className="text-xs uppercase tracking-wider text-text-secondary/80 font-sans">
                        UPI ID
                      </span>
                      <div className="flex items-center gap-2 flex-wrap">
                        <code className="text-accent text-sm font-mono bg-bg-secondary px-3 py-1.5 rounded-xs border border-border-subtle select-all">
                          {support.upiId}
                        </code>
                        <button
                          onClick={copyUpiId}
                          type="button"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs border border-border-subtle hover:border-accent/40 bg-bg-secondary text-xs text-text-secondary hover:text-text-primary transition-all duration-200 cursor-pointer focus:outline-hidden"
                          aria-label="Copy UPI ID to clipboard"
                        >
                          {copied ? (
                            <>
                              <Check size={13} className="text-emerald-400" />
                              <span className="text-emerald-400 font-medium">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy size={13} />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Direct Mobile Payment Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3.5">
                    <a
                      href={upiPaymentUrl}
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-accent text-bg-primary font-medium text-sm tracking-wide rounded-sm hover:bg-accent-hover transition-colors duration-200 shadow-md shadow-accent/10"
                    >
                      <Heart size={16} className="fill-bg-primary" />
                      <span>Support our music</span>
                    </a>
                    <a
                      href={upiPaymentUrl}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-border-subtle rounded-sm text-text-secondary hover:text-text-primary hover:border-accent/40 bg-bg-secondary/40 text-sm tracking-wide transition-all duration-200"
                    >
                      <ExternalLink size={15} />
                      <span>Pay via UPI</span>
                    </a>
                  </div>
                </div>

                {/* Right Column: Original Google Pay QR Code */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center">
                  <div
                    onClick={() => setShowQrModal(true)}
                    className="group cursor-pointer max-w-[280px] sm:max-w-[300px] w-full"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") setShowQrModal(true);
                    }}
                    aria-label="Click to enlarge Google Pay QR Code"
                  >
                    <div className="bg-white p-4 sm:p-5 rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-[1.02] border border-white/10">
                      <img
                        src={support.qrImage}
                        alt="Varun Kulal Google Pay UPI QR Code"
                        className="w-full h-auto object-contain block mx-auto"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex items-center justify-center gap-1.5 mt-3 text-text-secondary text-xs group-hover:text-accent transition-colors">
                      <ZoomIn size={13} />
                      <span>Click to enlarge QR</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </Container>
      </section>

      {/* Enlarged QR Code Modal */}
      {showQrModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6"
          onClick={() => setShowQrModal(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-sm w-full bg-white rounded-lg p-5 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQrModal(false)}
              className="absolute top-3 right-3 p-1.5 text-gray-500 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>
            <div className="pt-2">
              <img
                src={support.qrImage}
                alt="Varun Kulal Google Pay UPI QR Code - Enlarged"
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-center text-xs text-gray-600 mt-4 font-sans">
              Scan using any UPI app (Google Pay, PhonePe, Paytm)
            </p>
          </div>
        </div>
      )}
    </>
  );
}
