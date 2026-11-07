/**
 * Global Container Component
 * ==========================
 * Standardizes layout boundaries across all sections:
 * - Desktop: Max width 1200px, 48–64px horizontal padding (px-6 sm:px-8 lg:px-12 xl:px-16)
 * - Tablet: 32px horizontal padding (sm:px-8)
 * - Mobile: 24px horizontal padding (px-6)
 * - Centered with mx-auto
 */

export default function Container({ children, className = "", size = "default" }) {
  const maxWidthClass =
    size === "narrow"
      ? "max-w-3xl"
      : size === "medium"
      ? "max-w-4xl"
      : "max-w-[1200px]";

  return (
    <div
      className={`w-full ${maxWidthClass} mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 ${className}`}
    >
      {children}
    </div>
  );
}

