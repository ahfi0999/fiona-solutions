import type { Metadata } from "next";
import Image from "next/image";
import { blobBg, CheckList, Container, FeatureCards, ImageBox, InfoBox, InfoRow, Kicker, SectionHead, ServiceHero, Title } from "@/components/service-b/ui";
import { blobGrad, itConsulting as c } from "@/content/services-b";

export const metadata: Metadata = { title: c.meta };

export default function ITConsultingPage() {
  return (
    <>
      <ServiceHero hero={c.hero} />
      <FeatureCards items={c.features} />

      {/* What is Fiona Consultation */}
      <section className="bg-white bg-contain bg-center bg-no-repeat pb-2.5 max-md:pb-[50px] max-md:pt-[75px]" style={blobBg}>
        <Container className="grid items-center gap-10 max-md:gap-0 max-md:pl-10 max-md:pr-5 lg:grid-cols-[640px_1fr] lg:gap-[50px]">
          <div className="lg:pt-[19px]">
            <Kicker>{c.what.kicker}</Kicker>
            <Title size={36}>{c.what.title}</Title>
            <p className="mb-[35px] text-justify text-[15px] leading-[1.857] text-[#444] max-md:mb-5">{c.what.text}</p>
            <CheckList items={c.what.list} tight />
          </div>
          <Image
            src={c.what.image.src}
            alt={c.what.image.alt}
            width={c.what.image.w}
            height={c.what.image.h}
            className="mx-auto h-auto w-full max-w-[590px] max-md:ml-[50px] max-md:w-[calc(100%-50px)]"
          />
        </Container>
      </section>

      {/* Portfolio */}
      <section
        className="bg-white bg-contain bg-no-repeat pb-[100px] pt-20 max-md:pb-[59px] max-md:pt-[50px]"
        style={{ backgroundImage: `url(${blobGrad})`, backgroundPosition: "100% 50%" }}
      >
        <Container className="max-md:px-0">
          <SectionHead kicker={c.portfolio.kicker} kickerSize={24} kickerClass="mb-2.5" title={c.portfolio.title} titleSize={36} text={c.portfolio.text} />
          {/* Live mobile: the first two rows (the desktop row count) share one height. */}
          <div className="mt-[75px] grid gap-5 px-2.5 max-md:pr-10 max-md:grid-rows-[repeat(2,1fr)] sm:grid-cols-2 lg:grid-cols-[repeat(3,397px)]">
            {c.portfolio.items.map((item) => (
              <ImageBox key={item.title} item={item} link="Read More" justify />
            ))}
          </div>
        </Container>
      </section>

      {/* How we work */}
      <section className="bg-white bg-contain bg-center bg-no-repeat pb-2.5 max-md:pb-[50px] max-md:pt-[75px]" style={blobBg}>
        <Container className="grid items-center gap-10 max-md:gap-0 max-md:pl-10 max-md:pr-5 lg:grid-cols-[768px_1fr] lg:gap-0">
          <div>
            <Kicker>{c.how.kicker}</Kicker>
            <Title size={36}>{c.how.title}</Title>
            <p className="mb-[35px] text-justify text-[15px] leading-6 text-[#444]">{c.how.text}</p>
            <h3 className="mb-[29px] text-[22px] font-semibold capitalize leading-[1.3] text-[#333]">{c.how.listTitle}</h3>
            <div className="flex flex-col gap-2.5">
              {c.how.steps.map((s) => (
                <InfoRow key={s.title} item={s} shape="tail" />
              ))}
            </div>
          </div>
          <div className="pl-[50px]">
            <Image src={c.how.image.src} alt="" width={c.how.image.w} height={c.how.image.h} className="mx-auto h-auto w-full max-w-[462px]" />
          </div>
        </Container>
      </section>

      {/* Why choose */}
      <section className="bg-white py-20 max-md:pb-[50px] max-md:pt-[75px]">
        <Container className="max-md:pl-10 max-md:pr-5">
          <SectionHead title={c.why.title} text={c.why.text} />
          <div className="mt-[54px] grid gap-5 px-5 max-md:grid-rows-[repeat(2,1fr)] sm:grid-cols-2 lg:grid-cols-3">
            {c.why.items.map((item) => (
              <InfoBox key={item.title} item={item} variant="right" className="max-md:h-auto max-md:self-start" />
            ))}
          </div>
        </Container>
      </section>

    </>
  );
}
