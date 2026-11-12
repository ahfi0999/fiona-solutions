import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { BannerCards, PageBanner } from "@/components/about-us/PageBanner";
import { projectIconPaths } from "@/components/about-us/projectIcons";
import TechExpertise from "@/components/about-us/TechExpertise";
import "@/components/about-us/effects.css";
import Reveal from "@/components/Reveal";
import {
  aboutCards, aboutImages as img, differentLeft, differentRight, mission, partners, peopleFirst, projectFeatures, stats,
  teamGuides, vision, whoWeAre,
} from "@/content/about-us";

export const metadata: Metadata = { title: "About Us - Fiona Solutions" };

const kicker = "text-[20px] font-semibold leading-[1.25] text-brand md:text-[22px]";
const title = "text-[28px] font-semibold leading-[1.3] text-ink md:text-[40px]";
const sub = "text-[15px] leading-6 text-body";

function CenterHead({ k, t, s, className = "", kClass = kicker, tClass = title, sClass = sub }: { k: string; t: string; s: string; className?: string; kClass?: string; tClass?: string; sClass?: string }) {
  return (
    <div className={`mx-auto max-w-[1100px] text-center ${className}`}>
      <Reveal as="p" animation="fadeInUp" delay={200} className={kClass}>{k}</Reveal>
      <h2 className={`mt-3 ${tClass}`}>{t}</h2>
      <Reveal as="p" animation="fadeInUp" delay={600} className={`mt-2.5 ${sClass}`}>{s}</Reveal>
    </div>
  );
}

type PillItem = { title: string; text: string; icon: string; iw: number; w: number; h: number; mw: number };

function Pill({ item, side }: { item: PillItem; side: "left" | "right" }) {
  const left = side === "left";
  return (
    <div
      className={`flex items-start gap-0 rounded-[60px] lg:gap-5 border-x-[5px] border-brand bg-white p-[15px] shadow-[0_0_10px_5px_rgba(0,0,0,0.08)] transition-[border-color] duration-300 hover:border-[#67d5ff] sm:rounded-[100px] ${
        left ? "flex-row-reverse justify-end text-right" : "text-left"
      }`}
    >
      <div className="flex shrink-0 justify-center" style={{ width: item.iw, height: item.h - 10 }}>
        <Image src={item.icon} alt={item.title} width={item.w} height={item.h} className="-mt-2.5 max-w-none" style={{ width: item.w, height: item.h }} />
      </div>
      <div className="w-[var(--mw)] min-w-0 flex-none self-center lg:w-[331px]" style={{ "--mw": `${item.mw}px` } as CSSProperties}>
        <h3 className="text-lg font-semibold leading-[1.3] text-ink">{item.title}</h3>
        <p className="mt-0.5 text-sm leading-[22px] text-body lg:text-[15px]">{item.text}</p>
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <>
      <PageBanner image={img.heroBg} video={img.heroVideo} overlay={0.5} className="pb-[80px] pt-[109px] md:pb-[245px] md:pt-[230px]">
        <div className="-mx-5 max-w-[734px] text-center md:mx-0 md:text-left">
          <Reveal as="h1" animation="fadeIn" delay={200} className="text-[28px] font-semibold leading-[1.1] text-white md:text-[52px]">About Us</Reveal>
          <p className="mt-2.5 text-lg font-semibold leading-[1.3] text-brand md:text-[26px]">
            We Put People First, Leading By Example And Committing To Give Back To The Wider Community.
          </p>
          <div className="mt-5 max-w-[682px] space-y-5 text-center text-[14.592px] leading-[22px] text-[#eee] md:text-justify md:text-base md:leading-[25px]">
            <p>
              Our relationships are what has made us successful, so we&rsquo;re dedicated to building long-term
              partnerships and sharing the responsibility to deliver your outcomes.
            </p>
            <p>
              We are a family built on experience, passion, unique insights and collaboration, and we are the perfect
              partner in data and analytics.
            </p>
          </div>
        </div>
      </PageBanner>

      <BannerCards
        cards={aboutCards}
        overlap="-mt-[36px] md:-mt-[110px]"
        className="max-md:px-[15px]"
        iconClass="max-md:h-[74px] max-md:w-[74px]"
        titleClass="mt-[14px] md:mt-4"
        cardClass="min-h-[226px] px-[25px] shadow-[0_40px_100px_10px_rgba(0,173,238,0.2)] md:min-h-0 lg:min-h-[214px]"
      />

      {/* Who we are */}
      <section className="px-[15px] pb-0 pt-[74px] md:px-5 md:pb-[100px] md:pt-[150px] lg:pb-[177px]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-11 md:gap-12 lg:grid-cols-[753px_1fr] lg:gap-0">
          <div>
            <Reveal as="p" animation="fadeInUp" delay={200} className={`text-center md:text-left ${kicker}`}>Who Is Fiona Solutions ?</Reveal>
            <h2 className={`mt-[13px] text-center md:text-left ${title}`}>Who We Are</h2>
            <div className="mt-6 space-y-[14px] text-justify text-sm leading-[22px] text-[#444] md:space-y-[15px] md:text-[15px] md:leading-6">
              {whoWeAre.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
            </div>
            {/* live quirk: on mobile the first stat card overlaps the end of the last paragraph */}
            <div className="relative mx-2.5 -mt-[51px] grid gap-5 md:mx-0 md:mt-[50px] md:grid-cols-3 md:gap-[19px] lg:mt-[67px]">
              {stats.map((s, i) => (
                <div key={s.label}>
                  <div className={`flex flex-col items-start rounded-[5px] bg-white pb-[26px] md:h-full ${i === 0 ? "" : "h-[164px]"} pl-8 pr-5 pt-8 shadow-[0_40px_100px_10px_rgba(0,173,238,0.1)] md:flex-row md:gap-2.5 md:py-[30px] md:pl-[30px]`}>
                  <Image src={s.icon} alt="" width={37} height={37} className={`mb-2 object-contain md:mb-0 md:h-[37px] md:w-[37px] ${i === 0 ? "h-[83px] w-[83px]" : "h-16 w-16"}`} />
                  <div>
                    <p className="mb-1 text-[32px] font-semibold leading-[1.3] text-[#333]">{s.value}</p>
                    <p className="text-[15px] leading-[21px] text-[#555]">{s.label}</p>
                  </div>
                </div>
                </div>
              ))}
            </div>
          </div>
          <Image src={img.whoWeAre} alt="Who_We_Are" width={488} height={518} className="ml-[31px] h-auto w-[365px] max-w-none md:mx-auto md:w-full md:max-w-[488px] lg:-mr-[19px] lg:ml-auto" />
        </div>
      </section>

      {/* Mission */}
      <section className="rounded-tl-[160px] rounded-br-[160px] bg-brand/[0.11] px-5 pb-[56px] pt-[75px] md:py-[100px]">
        <div className="mx-auto grid max-w-7xl items-center gap-[30px] md:gap-10 lg:grid-cols-[599px_1fr] lg:gap-[66px]">
          <Image src={img.mission} alt="" width={599} height={417} className="h-auto w-full rounded-lg lg:relative lg:top-[5px]" />
          <div className="text-center md:text-left">
            <p className="text-left text-lg font-medium leading-[1.3] text-brand md:text-[22px]">Fiona Innovative Solutions</p>
            <h2 className="mt-5 text-left text-2xl font-semibold leading-[1.3] text-ink md:text-[40px]">Our Mission</h2>
            <p className="mt-5 text-justify text-sm leading-[22px] text-[#444] md:text-[15px] md:leading-[1.857]">{mission}</p>
            <Link
              href="#"
              className="mt-[30px] inline-flex items-center gap-4 rounded-md bg-brand px-[22px] py-[18px] text-base font-medium leading-none text-white shadow-[0_12px_24px_-8px_rgba(59,79,228,0.4)]"
            >
              Get Started
              <svg viewBox="0 0 448 512" className="h-4 w-4 fill-current" aria-hidden>
                <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.090 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-contain bg-center bg-no-repeat px-2.5 pb-[70px] pt-[60px] md:px-5 md:pb-[60px] md:pt-[64px]" style={{ backgroundImage: `url(${img.blobGrad})` }}>
        <div className="mx-auto grid max-w-7xl items-center gap-6 md:gap-10 lg:grid-cols-[618px_1fr]">
          <div>
            <p className="mr-[29px] text-center text-lg font-medium leading-[1.3] text-brand md:mr-0 md:text-left md:text-[22px]">Fiona Technology Solutions</p>
            <h2 className={`mt-5 text-center md:text-left ${title}`}>Our Vision</h2>
            <div className="mt-5 max-w-[320px] space-y-[14px] text-justify text-sm leading-[22px] text-[#444] md:max-w-none md:space-y-[15px] md:text-[15px] md:leading-[1.857]">
              {vision.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
            </div>
          </div>
          <Image src={img.vision} alt="" width={572} height={461} className="h-auto w-[348px] max-w-full md:mx-auto md:w-full md:max-w-[572px] lg:relative lg:top-[8px] lg:ml-1" />
        </div>
      </section>

      {/* What makes us different */}
      <section className="px-[15px] pb-[35px] pt-[26px] md:px-5 md:pb-0 md:pt-[75px]">
        <CenterHead
          k="The Fiona Approach"
          t="What Makes Us Different"
          s="The Fiona Approach combines innovation, expertise, and a client-centric focus to deliver exceptional and successful solutions."
        />
      </section>
      <section className="bg-white bg-contain bg-center bg-no-repeat px-5 pb-[50px] pt-[30px] md:pb-[60px]" style={{ backgroundImage: `url(${img.blobGradient})` }}>
        <div className="mx-auto grid max-w-7xl items-start gap-[15px] lg:grid-cols-[474px_320px_1fr] lg:gap-0">
          <div className="flex flex-col gap-[15px] lg:pt-[31px]">
            {differentLeft.map((d) => <Pill key={d.title} item={d} side="left" />)}
          </div>
          <Image src={img.man} alt="about features" width={320} height={625} className="mx-auto h-auto w-full max-w-[350px] lg:mt-[15px] lg:w-[320px]" />
          <div className="flex flex-col gap-[15px] lg:w-[482px] lg:pt-[90px]">
            {differentRight.map((d) => <Pill key={d.title} item={d} side="right" />)}
          </div>
        </div>
      </section>

      {/* Team guides */}
      <section className="relative bg-[linear-gradient(180deg,rgba(0,173,238,0.1)_0%,#fff_70%)] px-[15px] pb-[99px] pt-[120px] md:px-5 md:pb-[43px] md:pt-[148px] lg:pb-[72px]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[70px] rotate-180 md:h-[152px]" aria-hidden>
          <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="h-full w-full fill-white">
            <path d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.300-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z" />
          </svg>
        </div>
        <div className="relative mx-auto grid max-w-[1200px] items-start gap-[30px] md:gap-10 lg:grid-cols-[585px_1fr] lg:gap-[35px]">
          <Image src={img.team} alt="" width={585} height={556} className="-mx-[15px] h-auto w-[calc(100%+30px)] max-w-none md:mx-auto md:w-full md:max-w-[585px]" />
          <div className="lg:mt-[90px]">
            <p className="text-lg font-medium leading-6 text-brand md:text-[22px] md:leading-none">Expertise, Technical Skill &amp; Collaboration</p>
            <h2 className="mt-[13px] text-[28px] font-semibold leading-[30px] text-ink md:text-[36px] md:leading-[40px]">
              Our Team Guides You Down A Successful Path, Through The Unknown.
            </h2>
            <div className="mt-[22px] space-y-[14px] text-justify text-sm leading-[22px] text-[#444] md:space-y-[15px] md:text-[15px] md:leading-6">
              {teamGuides.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      {/* Putting people first */}
      <section className="mt-3 px-[15px] pb-[35px] pt-0 md:mt-0 md:px-5 md:pb-[60px]">
        <div className="mx-auto grid max-w-[1250px] items-center gap-11 md:gap-10 lg:grid-cols-[561px_1fr] lg:gap-[66px]">
          <div>
            <p className="text-lg font-semibold leading-none text-brand md:text-[22px]">Fiona Company</p>
            <h2 className={`mt-[13px] ${title}`}>Putting People First</h2>
            <div className="mt-[22px] space-y-[14px] text-justify text-sm leading-6 text-[#444] md:space-y-[15px] md:text-[15px]">
              {peopleFirst.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
            </div>
          </div>
          <Image src={img.peopleFirst} alt="software industries" width={638} height={514} className="mx-auto h-auto w-full max-w-[638px] lg:relative lg:top-2 lg:-mr-[15px] lg:w-[638px] lg:max-w-none" />
        </div>
      </section>

      {/* Project success */}
      <section className="bg-cover bg-left-top bg-no-repeat px-[15px] pb-[50px] pt-[26px] md:mt-[110px] md:px-5 md:pt-0 lg:mt-[98px]" style={{ backgroundImage: `url(${img.projectBg})` }}>
        <CenterHead
          k="Fiona Project Features"
          kClass="text-[20px] font-medium leading-[1.25] text-brand md:text-[22px]"
          t="What We Do To Guarantee Project Success"
          sClass="text-sm leading-[22px] text-body md:text-[15px] md:leading-6"
          s="Let’s start the journey towards success and enhance revenue for your business.  Take your company to the next level."
        />
        <div className="mx-auto mt-[63px] grid max-w-7xl md:mt-[46px] gap-x-[21px] gap-y-5 md:grid-cols-2 lg:grid-cols-[repeat(3,31.875%)] lg:gap-x-[1.6%]">
          {projectFeatures.map((f, i) => (
            <div
              key={f.title}
              className="ab-infobox flex items-start rounded-tr-[30px] border-l-[3px] border-brand bg-white p-[15px] shadow-[0_0_10px_5px_rgba(0,173,238,0.1)] lg:p-2.5"
            >
              <svg viewBox="0 0 256 256" className="mr-2.5 h-[45px] w-[45px] shrink-0 fill-brand" aria-hidden>
                {projectIconPaths[i].map((d) => <path key={d.slice(0, 24)} d={d} />)}
              </svg>
              <div>
                <h3 className="pb-[5px] text-[15px] font-medium leading-[26px] tracking-[-0.1px] text-black">{f.title}</h3>
                <p className="mb-2.5 text-sm leading-[22px] text-[#666] lg:text-[15px] lg:leading-6">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partnerships */}
      <section className="px-[30px] pb-[91px] pt-[75px] md:px-5 md:pb-0 md:pt-[111px]">
        <CenterHead
          k="Fiona Partnerships"
          t="Partnerships & Affiliations"
          tClass="text-[40px] font-semibold leading-[1.3] text-ink"
          s="Fiona Solutions combines deep industry and technological expertise to design, integrate, and deliver exceptional custom software solutions. To achieve this, we have built a strong network of partnerships with leading industry and technology experts."
        />
        <div className="mx-auto mt-[54px] grid max-w-[1280px] gap-y-5 md:mt-10 md:grid-cols-3 lg:grid-cols-5">
          {partners.map((p) => (
            <div key={p.name} className="ab-partner">
              <Image src={p.image} alt="" width={165} height={89} className="mx-auto h-auto w-[70%] md:w-[165px]" />
            </div>
          ))}
        </div>
      </section>

      <TechExpertise />

    </>
  );
}
