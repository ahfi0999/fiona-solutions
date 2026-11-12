import type { Metadata } from "next";
import Image from "next/image";
import TabbedCards from "@/components/service-b/TabbedCards";
import { blobBg, Container, FeatureCards, InfoBox, SectionHead, ServiceHero } from "@/components/service-b/ui";
import { dataAnalytics as c } from "@/content/services-b";

export const metadata: Metadata = { title: c.meta };

export default function DataAnalyticsPage() {
  return (
    <>
      <ServiceHero hero={c.hero} />
      <FeatureCards items={c.features} />

      <section className="bg-white bg-cover bg-center pb-[90px] max-md:pb-20 max-md:pt-[75px]" style={blobBg}>
        {/* Live mobile: 20px section padding + 20px left column padding (content 40px..370px). */}
        <Container className="max-md:pl-10 max-md:pr-5">
          <SectionHead kicker={c.services.kicker} title={c.services.title} text={c.services.text} />
          <TabbedCards tabs={c.services.tabs} />
        </Container>
      </section>

      <section className="bg-white bg-contain bg-center bg-no-repeat pb-20 pt-[25px] max-md:pb-[50px] max-md:pt-[85px]" style={blobBg}>
        <Container className="max-w-[1240px] max-md:pl-10 max-md:pr-5">
          <SectionHead title={c.benefits.title} className="max-md:px-2.5" />
          <div className="mx-auto grid max-w-[1200px] gap-5 pt-[39px] max-md:grid-rows-[repeat(2,1fr)] sm:grid-cols-2 lg:grid-cols-3">
            {c.benefits.items.map((t) => (
              <InfoBox key={t} item={t} variant="thinLeft" className="max-md:h-auto max-md:self-start" />
            ))}
          </div>
        </Container>
        <Container className="mt-[60px] max-md:mt-[53px] max-md:pl-10 max-md:pr-5">
          <SectionHead title={c.partners.title} text={c.partners.text} />
          {/* Live mobile: one logo per row on a full-width white tile. */}
          <div className="grid grid-cols-2 gap-5 pt-[50px] max-md:grid-cols-1 max-md:pt-[49px] lg:grid-cols-4">
            {c.partners.logos.map((l) => (
              <div key={l.alt} className="flex items-start justify-start p-2.5">
                <div className="w-full max-w-[255px] bg-white text-center max-md:max-w-none">
                  <Image
                    src={l.src}
                    alt={l.alt}
                    width={l.w}
                    height={l.h}
                    className="inline-block h-auto w-full max-md:max-w-[min(100%,var(--iw))]"
                    style={{ ["--iw" as string]: `${l.w}px` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

    </>
  );
}
