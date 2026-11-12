import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { advantage, type Mobile } from "@/content/products";
import AdvantageIcon from "./AdvantageIcon";
import "./product-effects.css";

// "The Fiona Solutions Advantage" block — the same on every product page; a few mobile sizes differ per page.
export default function ProductAdvantage({ m }: { m: Mobile }) {
  const t = m.advText ?? [15, 27.86, 15];
  const vars: Record<string, string> = {
    "--m-a-kfs": `${m.advKicker?.[0] ?? 20}px`,
    "--m-a-klh": `${m.advKicker?.[1] ?? 26}px`,
    "--m-a-tlh": `${m.advTitleLh ?? 40}px`,
    "--m-a-fs": `${t[0]}px`,
    "--m-a-lh": `${t[1]}px`,
    "--m-a-mb": `${t[2] + 20}px`,
    "--m-a-gap": `${m.advImgGap}px`,
    "--m-a-cfs": `${m.advCardText?.[0] ?? 15}px`,
    "--m-a-clh": `${m.advCardText?.[1] ?? 24}px`,
  };
  return (
    <section
      className="overflow-hidden rounded-tl-[200px] rounded-br-[200px] bg-brand/[0.08] px-5 pb-[50px] pt-[75px] md:py-20"
      style={vars as CSSProperties}
    >
      <div className="mx-auto grid max-w-[1280px] gap-[var(--m-a-gap)] md:gap-10 lg:grid-cols-[614px_1fr] lg:gap-[50px]">
        <div className="lg:pt-8">
          <p className="mb-5 text-[length:var(--m-a-kfs)] font-medium leading-[var(--m-a-klh)] text-brand max-md:text-center md:text-[22px] md:leading-[1.3]">
            {advantage.kicker}
          </p>
          <h2 className="mb-5 text-[28px] font-semibold leading-[var(--m-a-tlh)] text-black max-md:text-center md:text-[36px] md:leading-[1.33]">
            {advantage.title}
          </h2>
          <p className="mb-[var(--m-a-mb)] text-justify text-[length:var(--m-a-fs)] leading-[var(--m-a-lh)] text-[#444] md:mb-[35px] md:text-[15px] md:leading-[27.86px]">
            {advantage.text}
          </p>
          <Image
            src={advantage.image}
            alt="UI/UX design"
            width={399}
            height={353}
            className="mx-auto h-auto w-full max-w-[399px] rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-[15px]">
          {advantage.items.map((it, i) => (
            <Link
              key={it.title}
              href="#"
              className="fp-advantage flex gap-5 overflow-hidden pb-5 pl-[5px] pr-2.5 pt-5 sm:min-h-[128px] md:px-[25px] md:py-[10px]"
            >
              <AdvantageIcon className="h-[45px] w-[45px] shrink-0 md:mt-[5px]" />
              <div>
                <h3 className="text-lg font-medium leading-[26px] text-black">{it.title}</h3>
                <p
                  className="mb-2.5 text-[length:var(--m-a-cfs)] leading-[var(--m-a-clh)] text-[#444] md:text-[15px] md:leading-6"
                  style={m.advCardLh?.[i] ? { ["--m-a-clh" as string]: `${m.advCardLh[i]}px` } : undefined}
                >
                  {it.text}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
