import type { Metadata } from "next";
import Image from "next/image";
import ServiceHero from "@/components/service-a/ServiceHero";
import HighlightCards from "@/components/service-a/HighlightCards";
import BorderCards from "@/components/service-a/BorderCards";
import IconCards from "@/components/service-a/IconCards";
import { SectionHead } from "@/components/service-a/ui";
import { blobGrad, cloudTransformation as d, digitalBg } from "@/content/services-a";

export const metadata: Metadata = {
  title: "Cloud Transformation - Fiona Solutions",
  description: d.hero.text,
};

const blob = { backgroundImage: `url(${blobGrad})` };

export default function CloudTransformationPage() {
  return (
    <>
      <ServiceHero {...d.hero} height={740} revealTitle={false} />
      <HighlightCards items={d.highlights} pb={120} glow={false} />

      {/* Power of your cloud environment */}
      <section className="bg-white bg-contain bg-center bg-no-repeat pb-[91px] pl-10 pr-5 pt-[75px] lg:px-5 lg:pb-[60px] lg:pt-0" style={blob}>
        <div className="mx-auto max-w-7xl">
          <SectionHead kicker={d.power.kicker} kickerSize={22} title={d.power.title} titleSize={32} text={<p>{d.power.text}</p>} />
          <div className="mt-[45px] grid items-center gap-[30px] lg:mt-[42px] lg:grid-cols-[600px_1fr] lg:items-start lg:gap-[60px]">
            <Image src={d.power.image} alt="" width={600} height={626} className="h-auto w-[300px] max-w-[600px] lg:mx-auto lg:w-full" />
            <div className="mx-2.5 flex flex-col gap-5 lg:mx-0">
              {d.power.items.map((c) => (
                <div key={c.title}>
                  <h3 className="rounded-t-[10px] bg-brand px-[15px] py-2.5 text-base font-normal capitalize leading-[22px] text-white">{c.title}</h3>
                  <p className="border border-t-0 border-brand/20 px-[15px] py-[5px] text-[15px] leading-[22px] text-ink">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service options (dark) */}
      <section className="relative bg-cover bg-center pb-[60px] pl-10 pr-5 pt-[75px] lg:px-5 lg:pb-[115px] lg:pt-20" style={{ backgroundImage: `url(${digitalBg})` }}>
        <div className="absolute inset-0 bg-[#474747] opacity-[0.79]" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHead kicker={d.options.kicker} kickerSize={22} title={d.options.title} dark />
          <BorderCards items={d.options.items} titleSize={18} dark roomy titleMb={10} className="mt-[35px] lg:gap-x-[15px] lg:gap-y-[30px]" />
        </div>
      </section>

      {/* Cloud providers */}
      <section className="bg-white bg-contain bg-center bg-no-repeat pb-20 pl-10 pr-5 pt-[75px] lg:px-5 lg:pt-20" style={blob}>
        <div className="mx-auto max-w-7xl">
          <SectionHead title={d.clouds.title} titleSize={32} text={<p>{d.clouds.text}</p>} />
          <div className="mt-[61px] grid grid-cols-1 justify-items-center gap-10 lg:ml-2.5 lg:mt-[60px] lg:grid-cols-[repeat(4,255px)] lg:gap-x-[70px] lg:gap-y-6">
            {d.clouds.logos.map((l) => (
              <div key={l.name} className="w-[310px] bg-white shadow-[0_0_15px_5px_rgba(0,173,238,0.15)] lg:w-full lg:max-w-[255px]">
                <Image src={l.image} alt={l.name} width={255} height={159} className="h-auto w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-contain bg-center bg-no-repeat px-[15px] pb-[60px] pt-[60px] lg:px-5 lg:pt-[99px]" style={blob}>
        <div className="mx-auto max-w-7xl">
          <SectionHead kicker={d.benefits.kicker} title={d.benefits.title} titleSize={32} />
          <IconCards items={d.benefits.items} layout="side" icon="api" wideFrom={5} mobileMinH={{ 0: 182 }} minH={146} className="mt-10 lg:mt-[59px] lg:!gap-x-[21px] lg:gap-y-[30px]" />
        </div>
      </section>

    </>
  );
}
