import Image from "next/image";
import type { Card } from "@/content/services-a";
import { SvgIcon } from "./ui";

// Live hover (ElementsKit info box): blue vertical gradient, square corners, a 3px border on the left (also for the
// right-hand cards) and white content.
const hoverCls =
  "hover:rounded-none hover:border-l-[3px] hover:border-r-0 hover:bg-transparent hover:bg-[linear-gradient(180deg,#00ADEE_0%,#009FDB_100%)] hover:shadow-[-30px_30px_60px_0_rgba(0,174,238,0.1)]";
const white = "transition-colors duration-[400ms] group-hover:text-white";

function Step({ c, side }: { c: Card; side: "left" | "right" }) {
  return (
    <div
      className={`group flex gap-5 mx-2.5 rounded-[60px_3px] border-brand bg-white px-[34px] pb-10 pt-10 shadow-[0_0_10px_5px_rgba(0,173,238,0.1)] transition-all duration-[400ms] ease-[ease] lg:mx-0 lg:px-[25px] lg:pb-5 lg:pt-2.5 ${
        side === "left" ? "border-l-[10px]" : "border-r-[10px]"
      } ${hoverCls}`}
    >
      {c.icon && <SvgIcon src={c.icon} size={45} className="transition-colors duration-[400ms] group-hover:bg-white" />}
      <div className="min-w-0 flex-1">
        <h3 className={`text-lg font-medium capitalize leading-[26px] tracking-[-0.1px] text-black ${white}`}>{c.title}</h3>
        <p className={`text-[15px] leading-6 text-[#444] ${white}`}>{c.text}</p>
      </div>
    </div>
  );
}

/** Two columns of process steps with a picture in the middle (web development approach). */
export default function ApproachCards({ left, right, image }: { left: Card[]; right: Card[]; image: string }) {
  return (
    <div className="mx-auto grid max-w-[1260px] items-center lg:grid-cols-[407px_1fr_407px] lg:gap-8">
      <div className="flex flex-col gap-5">
        {left.map((c) => (
          <Step key={c.title} c={c} side="left" />
        ))}
      </div>
      <Image src={image} alt="" width={382} height={423} className="mx-auto mb-5 mt-[30px] h-auto w-[285px] max-w-[382px] lg:my-0 lg:w-full" />
      <div className="flex flex-col gap-5">
        {right.map((c) => (
          <Step key={c.title} c={c} side="right" />
        ))}
      </div>
    </div>
  );
}
