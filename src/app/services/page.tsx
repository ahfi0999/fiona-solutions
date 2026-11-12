import type { Metadata } from "next";
import { BannerCards, PageBanner } from "@/components/about-us/PageBanner";
import Reveal from "@/components/Reveal";
import { WP } from "@/lib/site";

export const metadata: Metadata = { title: "Services - Fiona Solutions" };

const cards = [
  { title: "Unmatched Quality", text: "We prioritize excellence in every project, ensuring top-tier solutions without compromise.", icon: `${WP}/2025/02/Unmatched-Quality.png`, w: 79, h: 88 },
  { title: "Deep Industry Expertise", text: "Our extensive experience in complex and regulated industries allows us to navigate challenges with precision.", icon: `${WP}/2025/02/Deep-Industry-Expertise.png`, w: 79, h: 75 },
  { title: "Custom-Tailored Solutions", text: "We design and develop software that aligns perfectly with your business needs and objectives.", icon: `${WP}/2025/02/Custom-Tailored-Solutions.png`, w: 82, h: 74 },
  { title: "Experienced Leadership", text: "Our senior team brings technical proficiency and strategic insight to guarantee project success.", icon: `${WP}/2025/02/Experienced-Leadership.png`, w: 79, h: 79 },
];

export default function Services() {
  return (
    <>
      <PageBanner image={`${WP}/2025/02/services-home.webp`} overlay={0.65} className="pb-[160px] pt-[150px] md:pb-[161px] md:pt-[170px]">
        <div className="-mx-5 max-w-[876px] md:mx-0">
          <p className="text-[32px] font-semibold leading-[1.3] text-brand">Services</p>
          <Reveal as="h1" animation="fadeIn" delay={200} className="mt-5 text-center text-[52px] font-semibold leading-[1.1] text-white md:text-left">
            Excellence Without Compromise
          </Reveal>
          <div className="mt-5 max-w-[858px] space-y-[15px] pr-[18px] text-center text-[14.592px] leading-[25px] text-[#eee] md:space-y-4 md:pr-0 md:text-justify md:text-base">
            <p>
              We adapt to every challenge with flexibility, but our commitment to quality remains unwavering. No matter the
              complexity, we deliver exceptional results.
            </p>
            <p>
              Our technical excellence speaks for itself. With deep industry experience, domain expertise in highly
              regulated sectors, and a senior team skilled in building custom software solutions, we ensure the success of
              your project.
            </p>
          </div>
        </div>
      </PageBanner>

      <div className="bg-white bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${WP}/2020/06/blob-grad.svg)` }}>
        <BannerCards
          cards={cards}
          overlap="-mt-[34px] md:-mt-[91px]"
          className="pb-[85px] max-md:px-6"
          titleClass="mt-6 md:mt-[25px]"
          iconClass="max-md:h-[calc(var(--ih)*1.114)] max-md:w-[calc(var(--iw)*1.114)]"
          gridClass="max-md:gap-6 lg:grid-cols-[repeat(4,23.75%)] lg:gap-x-[1.25%]"
          cardClass="justify-start! px-6 py-8 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.24)] md:px-5 md:pb-5 md:pt-[21px] transition-shadow duration-300 hover:shadow-[0_0_20px_-20px_rgba(0,0,0,0.15)] lg:min-h-[249px]"
        />
      </div>

    </>
  );
}
