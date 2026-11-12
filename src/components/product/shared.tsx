// Small helpers shared by the product page sections.

// "Long arrow right" icon used on the live site's buttons (Font Awesome long-arrow-alt-right).
// Live buttons do not change on hover.
export function Arrow({ className = "h-[15px] w-[15px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 448 512" className={`${className} fill-current`} aria-hidden>
      <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
    </svg>
  );
}

// Renders a short, trusted, hard-coded HTML snippet from src/content/products.ts (only <strong>/<br>).
export function Rich({ html }: { html: string }) {
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}
