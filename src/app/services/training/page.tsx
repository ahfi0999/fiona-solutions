import type { Metadata } from "next";
import Image from "next/image";
import { Container, FeatureCards, SectionHead, ServiceHero, softShadow } from "@/components/service-b/ui";
import fx from "@/components/service-b/effects";
import { blobGradient, training as c } from "@/content/services-b";

export const metadata: Metadata = { title: c.meta };

// Live mobile: the single-column course grid keeps uneven row heights (card sits at the top of its row).
const mobileRowH = [
  "max-md:h-[282px]",
  "max-md:h-[282px]",
  "max-md:h-[282px]",
  "max-md:h-[282px]",
  "max-md:h-[282px]",
  "max-md:h-[234px]",
  "max-md:h-[207px]",
  "max-md:h-[182px]",
  "",
];

export default function TrainingPage() {
  const t = c.transform;
  return (
    <>
      <ServiceHero hero={c.hero} />
      <FeatureCards items={c.features} />

      {/* Transform into a data-driven organization */}
      <section className="bg-no-repeat pb-20 pt-10 max-md:pt-[11px]" style={{ backgroundImage: `url(${blobGradient})`, backgroundPosition: "0 0" }}>
        <Container className="grid items-center gap-10 max-md:gap-[55px] max-md:px-[15px] lg:grid-cols-[570px_560px] lg:!px-[55px]">
          <div className="lg:pb-[15px]">
            {/* Live mobile: title and subtitle both 34px/40px. */}
            <h2 className="mb-2.5 text-[34px] font-semibold capitalize leading-10 text-[#333] max-md:mb-[15px] md:text-[36px] md:leading-[1.25]">
              {t.title}
              <span className="mt-6 block text-[34px] font-medium leading-10 text-brand max-md:mt-0 max-md:pt-[21px] md:text-[21px] md:leading-[29px]">
                {t.subtitle}
              </span>
            </h2>
            <p className="text-justify text-[15px] leading-[22px] text-[#444]">{t.text}</p>
          </div>
          <Image src={t.image.src} alt="" width={t.image.w} height={t.image.h} className="mx-auto h-auto w-full max-w-[560px]" />
        </Container>
      </section>

      {/* Courses */}
      <section className="bg-white pb-[150px] max-md:pb-[50px] max-md:pt-[75px]">
        <Container className="max-md:pl-10 max-md:pr-5">
          <SectionHead title={c.courses.title} text={c.courses.text} />
          <div className="mt-[45px] grid gap-5 px-2.5 md:grid-cols-2">
            {c.courses.items.map((course, i) => (
              <div key={course.title} className={mobileRowH[i]}>
                <div
                  className={`${fx.course} rounded-[5px] border-r-[4.8px] border-brand bg-white pb-3 pl-5 pt-[29px] text-left max-md:!px-[34px] max-md:!pb-[30px] max-md:!pt-[68px] md:h-full ${i === 4 ? "pr-2.5" : "pr-5"} ${softShadow}`}
                >
                  <h3 className="text-lg font-medium capitalize leading-[26px] text-brand">{course.title}</h3>
                  <p className="mb-2.5 text-[15px] leading-6 text-[#444]">
                    {course.text}
                    {"extraLine" in course && course.extraLine && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                  </p>
                  <a href="#" className="mt-1 inline-flex text-[15px] leading-6 text-brand">
                    Find out more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="px-2.5 max-md:pt-[15px]">
        <Container className="flex flex-col items-center gap-5 rounded-br-[1000px] rounded-tl-[1000px] bg-brand/10 px-5 py-[50px] text-center max-md:px-0">
          <h3 className="text-[32px] font-bold capitalize leading-[1.3] text-[#333]">{c.cta.title}</h3>
          <h5 className="text-xl font-medium capitalize leading-6 text-black">{c.cta.subtitle}</h5>
          <a href="#" className="inline-block rounded-[3px] bg-brand px-[30px] py-[15px] text-base font-medium leading-4 text-white">
            {c.cta.button}
          </a>
        </Container>
      </section>

    </>
  );
}
