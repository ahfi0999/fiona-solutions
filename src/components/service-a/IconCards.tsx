import Image from "next/image";
import type { Card } from "@/content/services-a";
import { SvgIcon } from "./ui";

type Props = {
  items: Card[];
  /** "side": round icon on the left of the text; "top": round icon above centered text */
  layout: "side" | "top";
  /** "img" = raster icon (50px), "svg" = uploaded svg icon, "api" = the API glyph used on the cloud page */
  icon?: "img" | "svg" | "api";
  iconSize?: number;
  /** min height (px) of each card on desktop */
  minH?: number;
  /**
   * Live hover state (ElementsKit icon box): stronger offset glow + blue title, and the round badge either gets a
   * thin blue ring ("ring", software development) or turns solid blue with a white icon ("fill").
   */
  hover?: "none" | "ring" | "fill";
  /** side layout: cards from this index on have 30px padding (left/right/bottom) instead of 20px, like live */
  wideFrom?: number;
  /** phones: min height (px) of some cards, by index (live keeps the height ElementsKit's equal-height script gave them) */
  mobileMinH?: Record<number, number>;
  /** AI/ML tab cards: 15px 8px padding on desktop (20px on phones), 10px title padding, 16px title margin */
  tabs?: boolean;
  className?: string;
};

/** White cards with a round, softly shadowed icon badge (ElementsKit "icon box"). */
export default function IconCards({ items, layout, icon = "svg", iconSize = 40, minH, hover = "none", wideFrom = 99, mobileMinH, tabs, className = "" }: Props) {
  const on = hover !== "none";
  return (
    <div className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {items.map((c, i) => (
        <div
          key={c.title}
          className={`group flex flex-col shadow-[0_0_10px_5px_rgba(0,173,238,0.1)] min-h-[var(--mmh)] lg:min-h-[var(--mh)] ${on ? "transition-shadow duration-300 hover:shadow-[-8px_-18px_50px_10px_rgba(0,174,238,0.1)]" : ""}`} style={{ ["--mh" as string]: minH ? `${minH}px` : "auto", ["--mmh" as string]: mobileMinH?.[i] ? `${mobileMinH[i]}px` : "auto" }}>
          <div
            className={`flex-1 rounded-[5px] bg-white ${
              layout === "side" ? `flex items-start gap-5 border border-transparent pt-5 ${i >= wideFrom ? "px-[30px] pb-[30px]" : "px-5 pb-5"}` : `border border-transparent p-5 text-center ${tabs ? "lg:px-2 lg:py-[15px]" : ""}`
            }`}
          >
            <div
              className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-transparent bg-white shadow-[-1.216px_6.894px_15px_0_rgba(0,0,0,0.07)] transition-colors duration-[400ms] ${
                layout === "top" ? "mx-auto" : ""
              } ${hover === "ring" ? "group-hover:border-brand" : hover === "fill" ? "group-hover:border-brand group-hover:bg-brand" : ""}`}
            >
              {icon === "img" && c.icon && <Image src={c.icon} alt="" width={50} height={50} className="h-[50px] w-[50px]" />}
              {icon === "svg" && c.icon && <SvgIcon src={c.icon} size={iconSize} className={hover === "fill" ? "transition-colors duration-[400ms] group-hover:bg-white" : ""} />}
              {icon === "api" && <ApiIcon />}
            </div>
            <div className="min-w-0 flex-1">
              <h3 className={`${tabs ? "mb-[21px] pt-2.5" : "pt-[15px]"} text-lg font-semibold capitalize leading-[1.3] text-black ${layout === "top" ? "text-center" : ""} ${on ? "transition-colors duration-[400ms] group-hover:text-brand" : ""}`}>{c.title}</h3>
              <p className={`${tabs ? "" : "mt-[5px]"} text-[15px] leading-[22px] text-[#656565] ${layout === "top" ? "text-center" : "-mb-3.5 text-justify"}`}>{c.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Approximation of the ElementsKit "icon-Custom-api" font glyph (a window labelled API with a gear). */
function ApiIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="#00ADEE" strokeWidth="1.8" aria-hidden>
      <rect x="10" y="6" width="26" height="22" rx="1.5" />
      <path d="M10 11h26" />
      <circle cx="13" cy="8.5" r=".6" fill="#00ADEE" />
      <circle cx="15.5" cy="8.5" r=".6" fill="#00ADEE" />
      <circle cx="18" cy="8.5" r=".6" fill="#00ADEE" />
      <text x="13" y="21.5" fill="#00ADEE" stroke="none" fontSize="8" fontWeight="700" fontFamily="Arial, sans-serif">API</text>
      <path d="M4 18h4M2 22h6M4 26h4M2 30h8M4 34h6M2 38h8" />
      <path d="M10 28v12h14" />
      <circle cx="32" cy="34" r="4" />
      <path d="M32 26v3M32 39v3M24 34h3M37 34h3M26.4 28.4l2.1 2.1M35.5 37.5l2.1 2.1M26.4 39.6l2.1-2.1M35.5 30.5l2.1-2.1" />
    </svg>
  );
}
