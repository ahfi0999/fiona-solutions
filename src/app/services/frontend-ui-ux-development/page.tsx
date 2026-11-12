import type { Metadata } from "next";
import Image from "next/image";
import ServiceHero from "@/components/service-a/ServiceHero";
import HighlightCards from "@/components/service-a/HighlightCards";
import TrustedPartner from "@/components/service-a/TrustedPartner";
import IconCards from "@/components/service-a/IconCards";
import ImageCards from "@/components/service-a/ImageCards";
import BorderCards from "@/components/service-a/BorderCards";
import { SectionHead } from "@/components/service-a/ui";
import { blobGrad, frontendUiUx as d } from "@/content/services-a";

export const metadata: Metadata = {
  title: "Frontend (UI/UX) Development - Fiona Solutions",
  description: d.hero.text,
};

const blob = { backgroundImage: `url(${blobGrad})` };

export default function FrontendUiUxPage() {
  return (
    <>
      <ServiceHero {...d.hero} height={730} />
      <HighlightCards items={d.highlights} pb={120} />
      <TrustedPartner />

      {/* Dynamic user design services */}
      <section className="bg-white bg-contain bg-center bg-no-repeat pb-[50px] pl-10 pr-5 pt-[75px] lg:px-5 lg:pb-2.5 lg:pt-20" style={blob}>
        <div className="mx-auto grid max-w-7xl items-center gap-[15px] lg:grid-cols-2 lg:items-start lg:gap-0">
          <div>
            <SectionHead kicker={d.dynamic.kicker} kickerSize={22} title={d.dynamic.title} align="left" />
            <div className="mt-5 space-y-4 text-justify text-[15px] leading-[1.8571] text-[#444]">
              {d.dynamic.paragraphs.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </div>
          <Image src={d.dynamic.image} alt="UI/UX design services" width={530} height={525} className="ml-16 h-auto w-[252px] max-w-[530px] lg:mr-auto lg:ml-20 lg:w-full" />
        </div>
      </section>
      <section className="bg-white bg-contain bg-center bg-no-repeat pb-[50px] pl-10 pr-5 pt-[75px] lg:px-5 lg:pb-[100px] lg:pt-5" style={blob}>
        <IconCards items={d.dynamic.items} layout="top" icon="svg" hover="fill" minH={231} className="mx-auto max-w-7xl lg:!gap-x-[21px]" />
      </section>

      {/* Approach */}
      <section className="px-2.5 pb-[31px] pt-[50px] lg:px-5 lg:pb-[30px] lg:pt-10">
        <div className="mx-auto max-w-7xl">
          <SectionHead kicker={d.approach.kicker} title={d.approach.title} text={<p>{d.approach.text}</p>} className="lg:mx-2.5" />
          <ImageCards
            items={d.approach.items}
            cols={4}
            gapClass="gap-0 [&>*:nth-child(5)]:mt-[15px] lg:gap-[15px] lg:[&>*:nth-child(5)]:mt-0"
            className="-ml-2.5 mr-[5px] mt-[116px] lg:mx-0 lg:mt-[56px] lg:max-w-[1265px]"
          />
        </div>
      </section>

      {/* Services */}
      <section className="bg-white bg-contain bg-center bg-no-repeat pb-[60px] pl-10 pr-5 pt-[74px] lg:px-5 lg:pb-[30px] lg:pt-20" style={blob}>
        <div className="mx-auto max-w-7xl">
          <SectionHead kicker={d.services.kicker} title={d.services.title} text={<p>{d.services.text}</p>} />
          <BorderCards items={d.services.items} hover roomy titleMb={10} className="mx-2.5 mt-[75px] max-w-[1261px] gap-y-5 lg:mx-auto lg:gap-x-5 lg:gap-y-[30px]" />
        </div>
      </section>

    </>
  );
}
