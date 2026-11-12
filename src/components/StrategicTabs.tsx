"use client";

import Image from "next/image";
import { useState } from "react";
import { strategicTabs } from "@/lib/site";

// ElementsKit vertical tabs, as on the live homepage: 326px nav (Roboto 16/24 medium, 56px items, 15px apart,
// 6px radius; active = brand blue, others white with a #dedede border; no hover change), 50px gap, then the
// pane (kicker / title / text + 378px image) which fades in on every switch.
export default function StrategicTabs() {
  const [active, setActive] = useState(0);
  const t = strategicTabs[active];

  return (
    <div className="flex items-start max-md:flex-col">
      <div role="tablist" className="mr-[50px] flex w-[326px] shrink-0 flex-col gap-[15px] pb-5 max-md:mr-0 max-md:w-full">
        {strategicTabs.map((s, i) => (
          <button
            key={s.tab}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`flex h-14 items-center rounded-[6px] border px-[30px] text-left font-[family-name:var(--font-roboto)] text-base font-medium leading-6 transition-all duration-[400ms] ${
              i === active ? "border-brand bg-brand text-white" : "border-[#dedede] bg-white text-black"
            }`}
          >
            {s.tab}
          </button>
        ))}
      </div>

      <div key={active} role="tabpanel" className="reveal-fadeIn flex min-w-0 flex-1 px-2.5 py-2.5 [animation-duration:1250ms] max-md:flex-col">
        <div className="flex w-[486px] flex-col gap-5 p-2.5 max-lg:w-auto max-lg:flex-1">
          <h3 className="text-2xl font-medium capitalize leading-[1.3] text-brand">{t.kicker}</h3>
          <h3 className="text-[32px] font-bold capitalize leading-[1.3] text-[#333]">{t.title}</h3>
          <p className="mb-2.5 text-justify text-[15px] leading-[1.5] text-[#444]">{t.text}</p>
        </div>
        <div className="w-[398px] shrink-0 p-2.5 max-md:w-full">
          <Image src={t.image} alt="" width={1024} height={841} className="h-auto w-full" />
        </div>
      </div>
    </div>
  );
}
