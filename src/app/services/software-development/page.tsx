import type { Metadata } from "next";
import ServiceHero from "@/components/service-a/ServiceHero";
import HighlightCards from "@/components/service-a/HighlightCards";
import TrustedPartner from "@/components/service-a/TrustedPartner";
import ImageAccordion from "@/components/service-a/ImageAccordion";
import HowWeHelp from "@/components/service-a/HowWeHelp";
import IconCards from "@/components/service-a/IconCards";
import { SectionHead } from "@/components/service-a/ui";
import { blobGrad, softwareDevelopment as d } from "@/content/services-a";

export const metadata: Metadata = {
  title: "Software Development - Fiona Solutions",
  description: d.hero.text,
};

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <ServiceHero {...d.hero} height={735} />
      <HighlightCards items={d.highlights} />
      <TrustedPartner />

      {/* Why choose custom development */}
      <section className="bg-white bg-contain bg-center bg-no-repeat pb-[45px] pl-10 pr-5 pt-[75px] lg:px-5 lg:pb-[100px] lg:pt-[70px]" style={{ backgroundImage: `url(${blobGrad})` }}>
        <div className="mx-auto max-w-7xl">
          <SectionHead kicker={d.why.kicker} title={d.why.title} text={<p>{d.why.text}</p>} />
          <div className="-ml-[25px] -mr-[5px] mt-[110px] lg:mx-0 lg:mt-[60px]">
            <ImageAccordion panels={d.why.panels} />
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="overflow-hidden rounded-br-[300px] rounded-tl-[300px] bg-brand/[0.08] pb-[50px] pt-20 lg:px-5 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <SectionHead
            kicker={d.help.kicker}
            title={d.help.title}
            titleSize={32}
            text={
              <p className="mx-auto max-w-[190px] pb-5 lg:max-w-[1080px]">
                Maximize performance and growth with data-driven decisions. At <strong>Fiona Solutions</strong>, we turn raw
                data into actionable insights to cut costs, boost profits, reduce risks, and enhance efficiency.
              </p>
            }
          />
          <div className="mt-[35px] lg:mt-[28px]">
            <HowWeHelp left={d.help.left} right={d.help.right} image={d.help.image} />
          </div>
        </div>
      </section>

      {/* Advanced solutions */}
      <section className="bg-contain bg-center bg-no-repeat px-[15px] pb-[50px] pt-20 lg:px-5 lg:pb-0 lg:pt-[100px]" style={{ backgroundImage: `url(${blobGrad})` }}>
        <div className="mx-auto max-w-7xl">
          <SectionHead kicker={d.advanced.kicker} title={d.advanced.title} titleSize={32} className="[&>p:first-child]:mb-2.5" />
          <IconCards items={d.advanced.items} layout="side" icon="img" hover="ring" wideFrom={5} minH={168} className="mt-10 !gap-x-[21px] gap-y-5" />
        </div>
      </section>

    </>
  );
}
