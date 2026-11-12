import type { Card } from "@/content/services-a";
import { SvgIcon } from "./ui";

type Props = {
  items: Card[];
  /** title size in px */
  titleSize?: 16 | 18;
  dark?: boolean;
  /** stronger blue glow used on the digital transformation page */
  glow?: boolean;
  textColor?: string;
  /** live hover: the card fills with a blue radial gradient and all its content turns white */
  hover?: boolean;
  /** title bottom margin in px (5, or 10 on the frontend page) */
  titleMb?: 5 | 10;
  /** live phones: 40px 34px 30px padding and a 10px title margin (web development page) */
  roomy?: boolean;
  className?: string;
};

/** Cards with a thin blue left border, a 45px icon on the left and a blue title. */
export default function BorderCards({ items, titleSize = 16, dark, glow, textColor = "#555", hover, titleMb = 5, roomy, className = "" }: Props) {
  const fx = "transition-colors duration-[400ms] group-hover:!text-white";
  const shadow = dark
    ? ""
    : glow
      ? "shadow-[0_0_10px_10px_rgba(0,173,238,0.1)]"
      : "shadow-[0_0_10px_0_rgba(0,0,0,0.1)]";
  return (
    <div className={`grid gap-[15px] sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {items.map((c) => (
        <div
          key={c.title}
          className={`group flex gap-5 border-l-[3px] ${roomy ? "px-[34px] pb-10 pt-10 lg:p-[15px]" : "p-[15px]"} ${shadow} ${dark ? "border-[#151515] bg-black/60" : "border-brand bg-white"} ${
            hover ? "transition-all duration-[400ms] ease-[ease] hover:bg-transparent hover:bg-[radial-gradient(at_center_center,#00ADEE_0%,#00ADEE61_100%)]" : ""
          }`}
        >
          {c.icon && <SvgIcon src={c.icon} size={45} className={hover ? "transition-colors duration-[400ms] group-hover:bg-white" : ""} />}
          <div className="min-w-0 flex-1">
            <h3 className={`${titleMb === 10 ? "mb-2.5" : roomy ? "mb-2.5 lg:mb-[5px]" : "mb-[5px]"} font-medium capitalize leading-[26px] tracking-[-0.1px] text-brand ${titleSize === 18 ? "text-lg" : "text-base"} ${hover ? fx : ""}`}>{c.title}</h3>
            <p className={`text-[15px] leading-6 ${hover ? fx : ""}`} style={{ color: dark ? "#e6e6e6" : textColor }}>
              {c.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
