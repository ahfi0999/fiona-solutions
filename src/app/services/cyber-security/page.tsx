import type { Metadata } from "next";
import Image from "next/image";
import { blobBg, CheckList, Container, FeatureCards, ImageBox, InfoBox, Kicker, SectionHead, ServiceHero, Title } from "@/components/service-b/ui";
import { blobGrad, cyberSecurity as c } from "@/content/services-b";

export const metadata: Metadata = { title: c.meta };

// Live mobile row heights of the "why choose" grid (single column, card at the top of each row).
const whyRowH = [
  "max-md:h-[258px]",
  "max-md:h-[258px]",
  "max-md:h-[257px]",
  "max-md:h-[258px]",
  "max-md:h-[232px]",
  "max-md:h-[257px]",
  "max-md:h-[234px]",
  "max-md:h-[232px]",
  "",
];

export default function CyberSecurityPage() {
  return (
    <>
      <ServiceHero hero={c.hero} />
      <FeatureCards items={c.features} />

      {/* How we help */}
      <section className="bg-white bg-contain bg-center bg-no-repeat pb-[60px] max-md:pb-[50px] max-md:pt-[75px]" style={blobBg}>
        <Container className="grid items-center gap-10 max-md:gap-0 max-md:pl-10 max-md:pr-5 lg:grid-cols-[657fr_623fr] lg:gap-0">
          <div>
            <Kicker>{c.help.kicker}</Kicker>
            <Title>{c.help.title}</Title>
            <p className="mb-[35px] text-justify text-[15px] leading-[1.857] text-[#444]">{c.help.text}</p>
            <CheckList items={c.help.list} />
          </div>
          <div className="pr-5">
            <Image src={c.help.image.src} alt="" width={c.help.image.w} height={c.help.image.h} className="mx-auto h-auto w-full max-w-[602px]" />
          </div>
        </Container>
      </section>

      {/* IT components */}
      <section className="relative z-[1] rounded-br-[160px] rounded-tl-[160px] bg-white pb-[22px] pt-[90px] max-md:pb-[118px] max-md:pt-[65px]">
        <Container className="max-md:px-[30px]">
          <SectionHead
            title={c.components.title}
            titleClass="font-semibold text-ink"
            text={c.components.text}
            // Live: the text sits 47px below the title; its 33px-tall widget lets the 48px text overflow into the gap below.
            textClass="mx-auto mt-[47px] max-w-[1100px] !leading-6 !text-body max-md:mt-[14px]"
            textReveal
          />
        </Container>
      </section>
      <section className="bg-contain bg-center bg-no-repeat pb-[60px]" style={blobBg}>
        {/* Live mobile: one column of boxes hugging the left edge (0..368px). */}
        <Container className="grid gap-[14px] max-md:gap-0 max-md:pl-0 max-md:pr-[22px] md:grid-cols-3 md:gap-x-5 lg:grid-cols-[407px_407px_417px]">
          {c.components.columns.map((col, i) => (
            <div key={i} className={`flex flex-col gap-[14px] ${i === 2 ? "max-md:-mr-[11px]" : ""}`}>
              {col.map((item) => (
                <InfoBox key={item.title} item={item} variant="thinLeft" titleSize={20} />
              ))}
            </div>
          ))}
        </Container>
      </section>

      {/* Threats */}
      <section className="bg-white bg-contain bg-no-repeat pb-5 pt-[100px] max-md:pb-[70px] max-md:pt-[50px]" style={{ backgroundImage: `url(${blobGrad})`, backgroundPosition: "100% 50%" }}>
        <Container>
          <SectionHead kicker={c.threats.kicker} kickerSize={24} kickerClass="mb-2.5" title={c.threats.title} titleSize={36} className="max-md:-mx-5" />
          <div className="mx-auto mt-[30px] grid max-w-[1180px] gap-5 max-md:-mx-2.5 max-md:grid-rows-[repeat(2,1fr)] sm:grid-cols-2 lg:grid-cols-3">
            {c.threats.items.map((t) => (
              <ImageBox key={t.title} item={t} />
            ))}
          </div>
        </Container>
      </section>

      {/* Why choose */}
      <section className="relative z-[1] rounded-br-[160px] rounded-tl-[160px] bg-white pb-[60px] pt-[110px] max-md:pb-[88px] max-md:pt-[85px]">
        <Container className="max-md:px-[30px]">
          <SectionHead
            kicker={c.why.kicker}
            kickerClass="mb-0"
            textClass="mx-auto mt-[48px] max-w-[1160px] !leading-6 !text-body max-md:mt-[13px]"
            textReveal
            kickerSize={24}
            title={c.why.title}
            titleClass="font-semibold text-ink"
            text={c.why.text}
            className="px-2.5 max-md:px-0"
          />
          <div className="mt-0.5 grid gap-5 max-md:mt-[50px] sm:grid-cols-2 lg:grid-cols-[repeat(3,407px)] lg:justify-center">
            {c.why.items.map((item, i) => (
              // Live: per-card horizontal padding differs (25 / 40 / 30px); on mobile the rows have fixed, uneven heights.
              <div key={item.title} className={whyRowH[i]}>
                <InfoBox item={item} variant="leaf" hover="linear" className={`max-md:h-auto ${i === 0 ? "" : i === 2 ? "!px-10" : "!px-[30px]"}`} />
              </div>
            ))}
          </div>
        </Container>
      </section>

    </>
  );
}
