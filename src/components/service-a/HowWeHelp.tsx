import Image from "next/image";
import type { Card } from "@/content/services-a";

// Desktop positions (px inside the 1280px container) copied from the live layout,
// which arranges the pill cards in a gentle curve around the centre image.
// mx / mw: on phones the live pills are stacked but keep an offset and width of their own (some overflow the screen).
type Pos = { top: number; left: number; width: number; mx: number; mw: number };
const leftPos: Pos[] = [
  { top: 0, left: 60, width: 448, mx: 60, mw: 390 },
  { top: 158, left: 0, width: 458, mx: 0, mw: 400 },
  { top: 316, left: 0, width: 458, mx: 0, mw: 400 },
  { top: 473, left: 60, width: 448, mx: 60, mw: 390 },
];
const rightPos: Pos[] = [
  { top: 79, left: 772, width: 488, mx: -60, mw: 430 },
  { top: 237, left: 822, width: 438, mx: -10, mw: 380 },
  { top: 394, left: 772, width: 488, mx: -60, mw: 430 },
];

function Pill({ c, side, pos }: { c: Card; side: "left" | "right"; pos: Pos }) {
  const left = side === "left";
  return (
    <div
      className={`ml-[var(--mx)] flex w-[var(--mw)] max-w-none shrink-0 flex-col items-center rounded-[60px] bg-white px-5 py-[15px] text-center lg:items-start shadow-[0_0_10px_0_rgba(0,172,237,0.21)] lg:absolute lg:left-[var(--l)] lg:top-[var(--t)] lg:ml-0 lg:min-h-[108px] lg:w-[var(--w)] lg:gap-[15px] ${
        left ? "lg:flex-row-reverse lg:text-right" : "lg:flex-row lg:text-left"
      }`}
      style={{
        ["--t" as string]: `${pos.top}px`,
        ["--l" as string]: `${pos.left}px`,
        ["--w" as string]: `${pos.width}px`,
        ["--mx" as string]: `${pos.mx}px`,
        ["--mw" as string]: `${pos.mw}px`,
      }}
    >
      {c.icon && <Image src={c.icon} alt="" width={53} height={53} className="mb-[9px] h-auto w-[14%] shrink-0 lg:mb-0 lg:w-[50px]" />}
      <div className="w-full min-w-0 lg:flex-1">
        <h3 className="mb-[5px] text-[19px] font-medium capitalize leading-[1.3] text-[#333]">{c.title}</h3>
        <p className="text-[15px] leading-6 text-[#555]">{c.text}</p>
      </div>
    </div>
  );
}

export default function HowWeHelp({ left, right, image }: { left: Card[]; right: Card[]; image: string }) {
  return (
    <div className="relative mx-auto flex max-w-7xl flex-col gap-[50px] lg:block lg:h-[581px]">
      {left.map((c, i) => (
        <Pill key={c.title} c={c} side="left" pos={leftPos[i]} />
      ))}
      <Image
        src={image}
        alt=""
        width={265}
        height={346}
        className="mx-auto -my-2.5 h-[392px] w-[300px] lg:absolute lg:left-[507px] lg:top-[118px] lg:my-0 lg:h-[346px] lg:w-[265px]"
      />
      {right.map((c, i) => (
        <Pill key={c.title} c={c} side="right" pos={rightPos[i]} />
      ))}
    </div>
  );
}
