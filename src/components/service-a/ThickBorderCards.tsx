import type { Card } from "@/content/services-a";
import { SvgIcon } from "./ui";

/** Centered cards with a thick blue left border and a 60px icon on top; on hover they turn into a blue gradient card (live). */
export default function ThickBorderCards({ items, className = "" }: { items: Card[]; className?: string }) {
  return (
    <div className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {items.map((c) => (
        <div
          key={c.title}
          className="group rounded-[3px] border-l-[10px] border-brand bg-white px-[34px] pb-10 pt-10 text-center lg:px-[15px] lg:py-5 shadow-[0_0_10px_5px_rgba(0,173,238,0.1)] transition-all duration-[400ms] ease-[ease] hover:rounded-none hover:border-l-[3px] hover:bg-transparent hover:bg-[linear-gradient(180deg,#00ADEE_0%,#009FDB_100%)] hover:shadow-[-30px_30px_60px_0_rgba(0,174,238,0.1)]"
        >
          {c.icon && <SvgIcon src={c.icon} size={60} className="mx-auto mb-2.5 transition-colors duration-[400ms] group-hover:bg-white" />}
          <h3 className="text-lg font-medium capitalize leading-[26px] text-black transition-colors duration-[400ms] group-hover:text-white">{c.title}</h3>
          <p className="text-[15px] leading-6 text-[#444] transition-colors duration-[400ms] group-hover:text-white">{c.text}</p>
        </div>
      ))}
    </div>
  );
}
