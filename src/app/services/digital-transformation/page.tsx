import type { Metadata } from "next";
import Image from "next/image";
import ServiceHero from "@/components/service-a/ServiceHero";
import HighlightCards from "@/components/service-a/HighlightCards";
import BorderCards from "@/components/service-a/BorderCards";
import ImageCards from "@/components/service-a/ImageCards";
import ThickBorderCards from "@/components/service-a/ThickBorderCards";
import { SectionHead } from "@/components/service-a/ui";
import { blobGrad, digitalBg, digitalTransformation as d } from "@/content/services-a";

export const metadata: Metadata = {
  title: "Digital Transformation - Fiona Solutions",
  description: d.hero.text,
};

const blob = { backgroundImage: `url(${blobGrad})` };

export default function DigitalTransformationPage() {
  return (
    <>
      <ServiceHero {...d.hero} height={741} />
      <HighlightCards items={d.highlights} pb={120} />

      {/* Consulting */}
      <section className="bg-white bg-contain bg-center bg-no-repeat pb-[49px] pl-10 pr-5 pt-[75px] lg:px-5 lg:pb-[80px] lg:pt-0" style={blob}>
        <div className="mx-auto max-w-7xl">
          <SectionHead kicker={d.consulting.kicker} kickerSize={22} title={d.consulting.title} text={<p>{d.consulting.text}</p>} />
          <div className="mt-[140px] grid items-center lg:mt-[50px] lg:grid-cols-[756px_1fr] lg:gap-10">
            <div className="grid gap-5 sm:grid-cols-2">
              {d.consulting.items.map((c) => (
                <div
                  key={c.title}
                  className="group rounded-[20px] border-b-[5px] border-l-[5px] border-brand bg-white px-[15px] pb-[25px] pt-[15px] shadow-[-30px_30px_60px_0_rgba(0,0,0,0.07)] transition-all duration-[400ms] ease-[ease] hover:rounded-none hover:border-2 hover:border-[#FFFFFFA1]"
                >
                  <h3 className="mb-[5px] text-base font-medium capitalize leading-[22px] text-brand">{c.title}</h3>
                  <p className="text-[15px] leading-[22px] text-[#666]">{c.text}</p>
                </div>
              ))}
            </div>
            <Image src={d.consulting.image} alt="" width={473} height={447} className="ml-auto h-auto w-[280px] max-w-[473px] lg:mx-auto lg:mr-0 lg:w-full" />
          </div>
        </div>
      </section>

      {/* Key business areas */}
      <section className="relative overflow-hidden rounded-tl-[100px] rounded-br-[100px] bg-cover bg-center pb-[50px] pl-10 pr-5 pt-[75px] md:rounded-tl-[200px] lg:px-5 lg:py-20 md:rounded-br-[200px]" style={{ backgroundImage: `url(${digitalBg})` }}>
        <div className="absolute inset-0 bg-white opacity-[0.93]" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHead kicker={d.areas.kicker} kickerSize={22} title={d.areas.title} className="[&_h2]:!text-[#444]" />
          <BorderCards items={d.areas.items} titleSize={18} glow hover roomy titleMb={10} textColor="#444" className="mt-[35px] lg:gap-y-[30px]" />
        </div>
      </section>

      {/* Innovative solutions */}
      <section className="bg-white bg-contain bg-center bg-no-repeat pb-20 pt-[50px] lg:px-5 lg:pt-[100px]" style={blob}>
        <div className="mx-auto max-w-7xl">
          <SectionHead kicker={d.innovative.kicker} title={d.innovative.title} className="[&>p:first-child]:mb-2.5" />
          <ImageCards
            items={d.innovative.items}
            cols={3}
            titleSize={23}
            gapClass="gap-0 [&>*:nth-child(4)]:mt-20 lg:gap-[31px] lg:gap-y-[30px] lg:[&>*:nth-child(4)]:mt-0"
            className="mr-[30px] mt-[50px] max-w-[1150px] lg:ml-[50px] lg:mr-0 lg:mt-[50px]"
          />
        </div>
      </section>

      {/* Teams */}
      <section className="bg-white bg-contain bg-center bg-no-repeat pb-[50px] pl-10 pr-5 pt-[75px] lg:px-5 lg:pb-20 lg:pt-0" style={blob}>
        <div className="mx-auto max-w-7xl">
          <SectionHead kicker={d.teams.kicker} kickerSize={22} title={d.teams.title} text={<p>{d.teams.text}</p>} />
          <ThickBorderCards items={d.teams.items} className="mt-[65px] lg:mt-[55px] lg:gap-x-[21px]" />
        </div>
      </section>

    </>
  );
}
