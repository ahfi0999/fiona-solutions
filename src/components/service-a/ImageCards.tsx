import Image from "next/image";
import type { Card } from "@/content/services-a";

type Props = {
  /** card.icon holds the picture */
  items: Card[];
  cols: 3 | 4;
  /** title font size in px */
  titleSize?: 18 | 23;
  /** grid gap classes (live phones stack these cards without a gap) */
  gapClass?: string;
  className?: string;
};

/** Cards with a picture on top and a title + text below (ElementsKit "image box"); hover zooms the picture like live. */
export default function ImageCards({ items, cols, titleSize = 18, gapClass, className = "" }: Props) {
  return (
    <div className={`grid sm:grid-cols-2 ${gapClass ?? `gap-[15px] ${cols === 4 ? "" : "lg:gap-[31px]"}`} ${cols === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"} ${className}`}>
      {items.map((c) => (
        <div
          key={c.title}
          className="group flex flex-col overflow-hidden rounded-t-[10px] shadow-[0_0_20px_10px_rgba(0,173,238,0.1)] transition-shadow duration-300 hover:shadow-[-30px_30px_60px_0_rgba(0,174,238,0.1)]"
        >
          {c.icon && (
            <div className="overflow-hidden rounded-t-[10px]">
              <Image
                src={c.icon}
                alt={c.title}
                width={675}
                height={400}
                className="aspect-[675/400] h-auto w-full rounded-t-[10px] object-cover transition-transform duration-[400ms] ease-[ease] group-hover:scale-110"
              />
            </div>
          )}
          <div className="flex-1 border border-[#f7f7f7] bg-white pb-[30px] pr-[30px] pt-[31px] lg:pb-2.5 lg:pr-0 lg:pt-[15px]">
            {/* ElementsKit "sideline" style: a 2px left line that turns blue on hover */}
            <div className="border-l-2 border-white px-5 transition-[border-color] duration-300 group-hover:border-brand">
              <h3
                className={`mb-2.5 font-medium capitalize leading-[26px] text-black transition-colors duration-[400ms] group-hover:text-brand ${titleSize === 23 ? "text-[23px]" : "text-lg"}`}
              >
                {c.title}
              </h3>
              <p className="mb-2.5 text-justify text-[15px] leading-[22px] text-[#666]">{c.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
