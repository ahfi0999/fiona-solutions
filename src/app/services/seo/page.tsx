import type { Metadata } from "next";
import Image from "next/image";
import { blobBg, CheckList, Container, FeatureCards, ImageBox, InfoBox, Kicker, SectionHead, ServiceHero, Title } from "@/components/service-b/ui";
import { seo as c } from "@/content/services-b";

export const metadata: Metadata = { title: c.meta };

const para = "mb-[15px] text-justify text-[15px] leading-[1.857] text-[#444]";

export default function SeoPage() {
  return (
    <>
      <ServiceHero hero={c.hero} />
      <FeatureCards items={c.features} />

      {/* Why SEO matters */}
      <section className="bg-white bg-contain bg-center bg-no-repeat py-20 max-md:pb-[50px] max-md:pt-[75px]" style={blobBg}>
        <Container className="grid items-center gap-10 max-md:gap-0 max-md:pl-10 max-md:pr-5 lg:grid-cols-[640px_1fr] lg:gap-[50px]">
          <div>
            <Kicker>{c.why.kicker}</Kicker>
            <Title size={36}>{c.why.title}</Title>
            <p className="mb-9 text-justify text-[15px] leading-[1.857] text-[#444]">{c.why.text}</p>
            <h3 className="mb-6 text-[22px] font-semibold capitalize leading-[1.3] text-[#333]">{c.why.listTitle}</h3>
            <CheckList items={c.why.list} tight />
          </div>
          <Image src={c.why.image.src} alt="" width={c.why.image.w} height={c.why.image.h} className="mx-auto h-auto w-full max-w-[590px] max-md:ml-[50px] max-md:w-[calc(100%-50px)]" />
        </Container>
      </section>

      {/* SEO services */}
      <section className="bg-white pb-[100px] pt-20 max-md:pb-[70px] max-md:pt-[75px]">
        <Container className="max-md:pl-10 max-md:pr-5">
          <SectionHead kicker={c.services.kicker} title={c.services.title} text={c.services.text} />
          {/* Live mobile: the first two rows (the desktop row count) share one height. */}
          <div className="mt-[54px] grid gap-5 px-5 max-md:grid-rows-[repeat(2,1fr)] sm:grid-cols-2 lg:grid-cols-3">
            {c.services.items.map((item) => (
              <InfoBox key={item.title} item={item} variant="right" className="max-md:h-auto max-md:self-start" />
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="rounded-br-[260px] rounded-tl-[260px] bg-brand/[0.08] pb-[100px] pt-20 max-md:pb-[69px] max-md:pt-[50px]">
        <Container className="max-md:px-0">
          <SectionHead kicker={c.process.kicker} kickerSize={24} kickerClass="mb-2.5" title={c.process.title} titleSize={36} text={c.process.text} />
          <div className="mt-[75px] grid gap-5 px-2.5 max-md:pr-10 max-md:grid-rows-[repeat(2,1fr)] sm:grid-cols-2 lg:grid-cols-[repeat(3,397px)]">
            {c.process.items.map((item) => (
              <ImageBox key={item.title} item={item} link="Read More" justify />
            ))}
          </div>
        </Container>
      </section>

      {/* Leads */}
      <section className="bg-white bg-contain bg-center bg-no-repeat py-20 max-md:pb-[50px] max-md:pt-[75px]" style={blobBg}>
        <Container className="grid items-center gap-10 max-md:gap-0 max-md:pl-10 max-md:pr-5 lg:grid-cols-[647px_1fr] lg:gap-[100px]">
          <div>
            <Kicker>{c.leads.kicker}</Kicker>
            <Title>{c.leads.title}</Title>
            {c.leads.paragraphs.map((p) => (
              <p key={p} className={para}>
                {p}
              </p>
            ))}
          </div>
          <Image src={c.leads.image.src} alt="" width={c.leads.image.w} height={c.leads.image.h} className="mx-auto h-auto w-full max-w-[533px] max-md:ml-[50px] max-md:w-[calc(100%-50px)]" />
        </Container>
      </section>

      {/* Trust */}
      <section className="bg-white bg-contain bg-center bg-no-repeat pb-2.5 max-md:pb-[50px] max-md:pt-[75px]" style={blobBg}>
        {/* Live mobile: the image comes first here. */}
        <Container className="grid items-center gap-10 max-md:gap-0 max-md:pl-10 max-md:pr-5 lg:grid-cols-[1fr_647px] lg:gap-[50px]">
          <Image
            src={c.trust.image.src}
            alt=""
            width={c.trust.image.w}
            height={c.trust.image.h}
            className="mx-auto h-auto w-full max-w-[533px] max-md:ml-[50px] max-md:w-[calc(100%-50px)] lg:mr-0"
          />
          <div>
            <Kicker>{c.trust.kicker}</Kicker>
            <Title className="mb-[15px]">{c.trust.title}</Title>
            {c.trust.paragraphs.map((p) => (
              <p key={p} className={para}>
                {p}
              </p>
            ))}
          </div>
        </Container>
      </section>

    </>
  );
}
