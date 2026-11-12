import Image from "next/image";
import { blobGrad, trustedPartner as d } from "@/content/services-a";
import { SectionHead } from "./ui";

/** "Your Trusted Software Development Partner" stats block (same on several service pages). */
export default function TrustedPartner({ pb = 10 }: { pb?: number }) {
  return (
    <section className="bg-white bg-contain bg-center bg-no-repeat pb-[59px] pl-10 pr-5 pt-[75px] lg:px-5 lg:pb-[calc(var(--pb)+19px)] lg:pt-0" style={{ backgroundImage: `url(${blobGrad})`, ["--pb" as string]: `${pb}px` }}>
      <div className="mx-auto max-w-7xl">
        <SectionHead kicker={d.kicker} title={d.title} text={<p>{d.text}</p>} />
        <div className="mt-[51px] grid items-start gap-8 lg:mt-[45px] lg:grid-cols-2 lg:gap-0 lg:py-2.5">
          {/* live: two rows of two cards; the cards of a row share their height (also when stacked on phones) */}
          <div className="mx-auto grid w-full max-w-[620px] gap-[15px] px-5 lg:px-2.5">
            {[d.stats.slice(0, 2), d.stats.slice(2)].map((row) => (
              <div key={row[0].label} className="grid auto-rows-fr grid-cols-1 gap-[15px] sm:grid-cols-2">
                {row.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-[15px] pb-[22px] pt-[37px] text-center shadow-[0_0_10px_0_rgba(0,173,238,0.204)] transition-[box-shadow,border-radius] duration-300 hover:shadow-[-8px_-18px_50px_20px_rgba(0,174,238,0.1)] lg:pb-6"
                  >
                    <Image src={s.icon} alt="" width={53} height={53} className="mx-auto mb-[14px] h-[52px] w-[52px] lg:h-[53px] lg:w-[53px]" />
                    <h3 className="mb-[2px] text-[22px] font-semibold leading-[1.3] text-ink lg:text-[32px]">{s.value}</h3>
                    <p className="pb-[7px] text-lg font-medium leading-[18px] text-brand">{s.label}</p>
                    <p className="mx-auto max-w-[275px] text-[15px] leading-[22px] text-body">{s.text}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <Image src={d.image} alt="Software development partner" width={527} height={541} className="mx-auto h-auto w-[264px] max-w-[527px] lg:-mt-2.5 lg:ml-[67px] lg:w-full" />
        </div>
      </div>
    </section>
  );
}
