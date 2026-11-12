import type { Metadata } from "next";
import Image from "next/image";
import VerticalTabs from "@/components/service-b/VerticalTabs";
import { Container, FeatureCards, InfoBox, InfoRow, SectionHead, ServiceHero } from "@/components/service-b/ui";
import { dataBackup as c } from "@/content/services-b";

export const metadata: Metadata = { title: c.meta };

export default function DataBackupPage() {
  const t = c.tailored;
  return (
    <>
      <ServiceHero hero={c.hero} />
      <FeatureCards items={c.features} mobileX={20} mobileTop={12} mobileBottom={20} />

      {/* Managed IT services (vertical tabs) */}
      <section className="bg-white pb-[120px] max-md:pb-[109px] max-md:pt-[75px]">
        <Container>
          <SectionHead title={c.managed.title} text={c.managed.text} mobileTitleSize={28} textClass="mt-5 max-md:!text-sm max-md:!leading-[26px]" />
          <div className="px-2.5">
            <VerticalTabs tabs={c.managed.tabs} />
          </div>
        </Container>
      </section>

      {/* Tailored solutions */}
      <section className="rounded-br-[80px] rounded-tl-[80px] bg-brand/[0.08] pb-[30px] pt-20 max-md:pb-20 max-md:pt-[76px] md:rounded-br-[160px] md:rounded-tl-[160px]">
        <Container>
          <SectionHead
            kicker={t.kicker}
            kickerSize={24}
            kickerClass="mb-5"
            title={t.title}
            titleSize={36}
            mobileKickerSize={18}
            mobileTitleSize={28}
            titleClass="font-semibold text-ink"
            text={t.text}
            textClass="mx-auto mt-[47px] max-w-[1180px] !leading-6 !text-body max-md:mt-[14px] max-md:!text-sm"
            textReveal
          />
          <div className="mt-px grid items-center gap-10 max-md:mt-[54px] max-md:gap-5 lg:grid-cols-[630px_1fr] lg:gap-[60px]">
            <div>
              <h3 className="mb-10 text-[22px] font-semibold capitalize leading-[1.3] text-[#333]">{t.listTitle}</h3>
              <div className="flex flex-col gap-5">
                {t.first.map((item) => (
                  <InfoRow key={item.title} item={item} mobilePad="tight" />
                ))}
              </div>
            </div>
            <Image src={t.image1.src} alt="" width={t.image1.w} height={t.image1.h} className="mx-auto h-auto w-full max-w-[590px]" />
          </div>
          <div className="mt-[79px] grid items-center gap-10 max-md:mt-5 max-md:gap-5 lg:grid-cols-[600px_630px] lg:justify-between">
            <Image
              src={t.image2.src}
              alt=""
              width={t.image2.w}
              height={t.image2.h}
              className="mx-auto h-auto w-full max-w-[600px] max-md:ml-0 max-md:w-[calc(100%-30px)]"
            />
            <div className="flex flex-col gap-5">
              {t.second.map((item) => (
                <InfoRow key={item.title} item={item} mobilePad="tight" />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Advanced backup & recovery */}
      <section className="bg-white py-20 max-md:pb-[50px] max-md:pt-[75px]">
        <Container>
          <SectionHead
            title={c.advanced.title}
            text={c.advanced.text}
            mobileTitleSize={28}
            textClass="mt-5 max-md:!text-sm max-md:!leading-[26px]"
          />
          {/* Live mobile: the first two rows (the desktop row count) share one height. */}
          <div className="mt-[55px] grid gap-5 px-5 max-md:mt-11 max-md:px-2.5 max-md:grid-rows-[repeat(2,1fr)] sm:grid-cols-2 lg:grid-cols-3">
            {c.advanced.items.map((item, i) => (
              <InfoBox key={item.title} item={item} variant="thinLeftRound" titleSize={20} mobilePad="tight" className={`max-md:h-auto max-md:self-start ${i === 2 ? "!px-[31px]" : ""}`}
              />
            ))}
          </div>
        </Container>
      </section>

    </>
  );
}
