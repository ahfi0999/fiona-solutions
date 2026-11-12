import type { Metadata } from "next";
import ServiceHero from "@/components/service-a/ServiceHero";
import HighlightCards from "@/components/service-a/HighlightCards";
import TrustedPartner from "@/components/service-a/TrustedPartner";
import ApproachCards from "@/components/service-a/ApproachCards";
import IconCards from "@/components/service-a/IconCards";
import BorderCards from "@/components/service-a/BorderCards";
import { SectionHead } from "@/components/service-a/ui";
import { blobGrad, digitalBg, webMobile as d } from "@/content/services-a";

export const metadata: Metadata = {
  title: "Web & Mobile Development - Fiona Solutions",
  description:
    "At Fiona Solutions, we craft dynamic, secure, and user-friendly web experiences tailored to your business needs.",
};

export default function WebMobileDevelopmentPage() {
  return (
    <>
      <ServiceHero
        {...d.hero}
        height={705}
        text={
          <p>
            At <strong>Fiona Solutions</strong>, we craft dynamic, secure, and user-friendly web experiences tailored to
            your business needs. From design to development, we ensure your website or web application delivers
            outstanding performance, engagement, and conversions.
          </p>
        }
      />
      <HighlightCards items={d.highlights} />
      <TrustedPartner pb={80} />

      {/* Approach */}
      <section className="rounded-[80px] bg-[linear-gradient(#f2fcff_0%,#fff_100%)] pb-[70px] pl-10 pr-5 pt-[75px] md:rounded-[200px] lg:px-5 lg:pb-5 lg:pt-20">
        <div className="mx-auto max-w-7xl">
          <SectionHead kicker={d.approach.kicker} title={d.approach.title} text={<p>{d.approach.text}</p>} />
          <div className="mt-[45px] lg:mt-[46px]">
            <ApproachCards left={d.approach.left} right={d.approach.right} image={d.approach.image} />
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-white bg-contain bg-center bg-no-repeat pb-[60px] pl-10 pr-5 pt-[75px] lg:px-5 lg:pb-[99px] lg:pt-20" style={{ backgroundImage: `url(${blobGrad})` }}>
        <div className="mx-auto max-w-7xl">
          <SectionHead title={d.advantages.title} text={<p>{d.advantages.text}</p>} />
          <IconCards items={d.advantages.items} layout="top" icon="svg" hover="fill" minH={253} className="mx-2.5 mt-[45px] max-w-[1200px] lg:mx-auto lg:mt-10 lg:gap-y-[21px]" />
        </div>
      </section>

      {/* Expert services */}
      <section className="relative overflow-hidden rounded-t-[80px] bg-cover bg-center pb-[50px] pl-10 pr-5 pt-[75px] md:rounded-t-[200px] lg:px-5 lg:py-20" style={{ backgroundImage: `url(${digitalBg})` }}>
        <div className="absolute inset-0 bg-[#fdffff] opacity-[0.96]" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHead kicker={d.expert.kicker} kickerSize={22} title={d.expert.title} />
          <BorderCards items={d.expert.items} hover roomy titleMb={10} className="mt-[35px] lg:gap-y-[25px]" />
        </div>
      </section>

    </>
  );
}
