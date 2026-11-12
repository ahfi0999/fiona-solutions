import type { Metadata } from "next";
import Image from "next/image";
import ServiceHero, { CheckSquare } from "@/components/service-a/ServiceHero";
import HighlightCards from "@/components/service-a/HighlightCards";
import ServiceTabs from "@/components/service-a/ServiceTabs";
import ThickBorderCards from "@/components/service-a/ThickBorderCards";
import { SectionHead } from "@/components/service-a/ui";
import { aiMlTransformation as d, blobGrad } from "@/content/services-a";

export const metadata: Metadata = {
  title: "AI/ML Transformation - Fiona Solutions",
  description: d.hero.text,
};

export default function AiMlTransformationPage() {
  return (
    <>
      <ServiceHero {...d.hero} height={733} />
      <HighlightCards items={d.highlights} />

      {/* Services offered */}
      <section className="bg-white bg-contain bg-center bg-no-repeat pb-[160px] pl-10 pr-5 pt-[75px] lg:px-5 lg:pb-[84px] lg:pt-0" style={{ backgroundImage: `url(${blobGrad})` }}>
        <div className="mx-auto max-w-7xl">
          <SectionHead kicker={d.offering.kicker} kickerSize={22} title={d.offering.title} titleSize={32} text={<p>{d.offering.text}</p>} />
        </div>
      </section>
      <section className="rounded-tl-[80px] rounded-br-[80px] bg-white px-[30px] pb-[60px] md:rounded-tl-[160px] md:rounded-br-[160px] lg:px-5">
        <div className="mx-auto max-w-7xl">
          <ServiceTabs tabs={d.offering.tabs} />

          {/* Partnerships */}
          <div className="-mx-2.5 mt-[106px] text-center lg:mx-0 lg:mt-[75px]">
            <SectionHead
              kicker={d.partners.kicker}
              kickerReveal={{ animation: "fadeInUp", delay: 200 }}
              textReveal={{ animation: "fadeInUp", delay: 600 }}
              title={d.partners.title}
              titleSize={40}
              text={<p className="mx-auto max-w-[1100px] leading-6">{d.partners.text}</p>}
              className="[&>div:last-child]:mt-3.5 [&>h2]:mx-auto [&>h2]:max-w-[1200px]"
            />
            <div className="mx-auto mt-[45px] grid max-w-[1200px] grid-cols-1 lg:mt-[25px] items-center justify-items-center gap-5 lg:grid-cols-5 lg:gap-x-[91px]">
              {d.partners.logos.map((l) => (
                <Image key={l.name} src={l.image} alt={l.name} width={165} height={89} className="h-auto w-[231px] hover:grayscale lg:w-full lg:max-w-[165px]" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Predictive / Generative / Strategy */}
      <section className="rounded-t-[100px] bg-[linear-gradient(rgba(0,173,238,0.04)_0%,rgba(226,229,231,0.13)_100%)] px-5 py-[30px] md:rounded-t-[250px]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-5 pb-10 pt-[75px] lg:pt-20">
            {d.concepts.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="hover-float whitespace-nowrap rounded-[100px_0] border-[3px] border-white bg-brand py-1 pl-[41px] pr-5 text-lg font-semibold leading-[50px] text-white lg:px-[60px]"
              >
                {c.button}
              </a>
            ))}
          </div>
          {d.concepts.map((c, i) => {
            // live: the picture sits on the left for the middle concept (and comes first on phones)
            const flip = i % 2 === 1;
            const picture = (
              <Image
                src={c.image}
                alt={c.title}
                width={c.w}
                height={c.h}
                className={`ml-[30px] h-auto w-[290px] max-w-[590px] lg:w-full ${flip ? "lg:ml-2.5" : "lg:ml-0"}`}
              />
            );
            return (
              <div key={c.id} id={c.id} className="grid scroll-mt-24 items-center gap-10 py-2.5 lg:grid-cols-2 lg:gap-10">
                {flip && picture}
                <div className={`pl-[30px] pr-2.5 ${flip ? "lg:pl-0 lg:pr-2.5" : "lg:pl-2.5 lg:pr-0"}`}>
                  <h2 className="mb-5 text-[36px] font-bold capitalize leading-[1.3] text-[#333]">{c.title}</h2>
                  <div className="space-y-4 text-justify text-[15px] leading-[22px] text-[#444]">
                    {c.paragraphs.map((p) => (
                      <p key={p.slice(0, 20)}>{p}</p>
                    ))}
                  </div>
                  <h4 className="mb-3 mt-5 text-lg font-medium capitalize leading-[1.2] text-[#333]">Key Concepts:</h4>
                  <ul className="space-y-[6px]">
                    {c.list.map((li) => (
                      <li key={li} className="flex items-center gap-[5px] text-[15px] leading-[21px] text-[#444]">
                        <CheckSquare className="h-5 w-5 shrink-0 text-brand" />
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
                {!flip && picture}
              </div>
            );
          })}
        </div>
      </section>

      {/* Benefits */}
      <section className="pb-[60px] pt-[96px] lg:px-5 lg:pt-[89px]">
        <div className="mx-auto max-w-7xl">
          <SectionHead title={d.benefits.title} titleSize={40} className="[&>div:last-child]:mt-3.5" textReveal={{ animation: "fadeInUp", delay: 600 }} text={<p className="mx-auto max-w-[1180px] leading-6">{d.benefits.text}</p>} />
          <ThickBorderCards items={d.benefits.items} className="mx-2.5 mt-[65px] max-w-[1261px] lg:mx-auto lg:mt-[35px] lg:gap-y-[33px]" />
        </div>
      </section>

    </>
  );
}
