import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import JobCard from "@/components/careers/JobCard";
import PageHero from "@/components/events/PageHero";
import PerkCards from "@/components/events/PerkCards";
import { careerPerks, careersHero, careersIntro, jobs } from "@/content/careers";
import { images } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers - Fiona Solutions",
  description: careersHero.text,
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        video={careersHero.video}
        poster={careersHero.poster}
        overlay={0.7}
        className="pb-10 pt-[79px] md:py-[265px]"
      >
        <div className="max-w-[876px]">
          <Reveal animation="fadeIn" delay={200}>
            <h1 className="text-center text-[28px] font-semibold leading-[1.1] text-white md:text-left md:text-[52px]">{careersHero.title}</h1>
          </Reveal>
          <p className="mx-2.5 mb-[14px] mt-5 max-w-[746px] text-center text-sm leading-[21px] text-[#eee] md:mx-0 md:mb-[31px] md:text-justify md:text-base md:leading-[25px]">{careersHero.text}</p>
        </div>
      </PageHero>

      <div className="bg-white bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${images.blobGrad})` }}>
        <PerkCards perks={careerPerks} overlap={110} mobileOverlap={-19} minHeight={226} className="px-6 pb-16 md:px-5 md:pb-[120px]" />
      </div>

      {/* Intro */}
      <section className="bg-contain bg-center bg-no-repeat px-2.5 md:px-5 md:pb-[60px] md:pt-[30px]" style={{ backgroundImage: `url(${images.blobGrad})` }}>
        <div className="mx-auto grid max-w-[1280px] items-center md:gap-10 lg:grid-cols-[672px_1fr] lg:gap-0">
          <div>
            <h3 className="mb-5 text-[22px] font-medium leading-[1.3] text-brand">{careersIntro.kicker}</h3>
            <h2 className="mb-[15px] text-[29px] font-bold leading-[1.3] text-ink">{careersIntro.title}</h2>
            {careersIntro.paragraphs.map((p) => (
              <p key={p.slice(0, 20)} className="mb-[15px] max-w-[644px] text-justify text-[15px] leading-[27.86px] text-[#444]">
                {p}
              </p>
            ))}
          </div>
          <Image
            src={careersIntro.image}
            alt="Fiona Solutions careers"
            width={558}
            height={574}
            className="mx-2.5 my-2.5 h-auto w-[87.2%] max-w-[558px] md:mx-auto md:mb-5 md:mt-0 md:w-full lg:m-[10px_0_10px_1px]"
          />
        </div>
      </section>

      {/* Job listings (the live site has no detail pages; everything is shown inline) */}
      <section className="pb-[50px] pt-[50px] md:px-5 md:pb-[60px] md:pt-2.5">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-5 lg:pr-[15px]">
          {jobs.map((j) => (
            <JobCard key={j.title} job={j} />
          ))}
        </div>
      </section>

    </>
  );
}
