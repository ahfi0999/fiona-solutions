import Image from "next/image";
import Link from "next/link";
import HeroVideo from "@/components/HeroVideo";
import MouseEffect from "@/components/MouseEffect";
import Reveal from "@/components/Reveal";
import StrategicTabs from "@/components/StrategicTabs";
import {
  features, highlights, images, industries, products, services, trainings, workingModels,
} from "@/lib/site";

// Geometry, colours and hover effects measured on the live homepage (Elementor) at 1536px and 390px.
// Desktop content is a 1280px box; Elementor's mobile breakpoint is <768px (max-md).

const glow = "shadow-[0_40px_100px_10px_rgba(0,173,238,0.2)]";
// ElementsKit image masks per service card (live order).
const masks = [6, 1, 5, 1, 1, 9, 8, 4, 4, 1, 6, 9];
const mask = (n: number) => {
  const url = `url(/uploads/masking/shape-${n}.svg)`;
  return {
    maskImage: url, WebkitMaskImage: url,
    maskPosition: "center", WebkitMaskPosition: "center",
    maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat",
    maskSize: "contain", WebkitMaskSize: "contain",
  } as const;
};

// "Our Services" / "Industries" ... kicker + title pair used by most sections.
function Kicker({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={`text-center text-2xl font-medium capitalize leading-[1.3] text-brand max-md:text-lg ${className}`}>{children}</h3>
  );
}
function Title({ children, className = "", small = false }: { children: React.ReactNode; className?: string; small?: boolean }) {
  return (
    <h2 className={`text-center ${small ? "text-[32px]" : "text-[36px]"} font-bold capitalize leading-[1.3] text-[#333] max-md:text-[26px] ${className}`}>{children}</h2>
  );
}

// Features: left column has the icon on the right; pills curve around the bulb (margin-left per row).
const featureOffsets = [160, 60, 0, 60, 160];
const bigIcons = new Set(["Delivery", "Industry 4.0"]);

export default function Home() {
  return (
    <>
      {/* Hero (z-10: slides over the blue sticky header) */}
      <section
        className="relative z-10 -mt-[2px] rounded-b-[110px] bg-[#05060f] bg-cover bg-center px-0 py-[220px] max-md:-mt-[21px] max-md:rounded-none max-md:px-2.5 max-md:py-[120px]"
        style={{ backgroundImage: `url(${images.heroBg})` }}
      >
        <div className="absolute inset-0 overflow-hidden max-md:hidden">
          <HeroVideo src={images.heroVideo} poster={images.heroBg} />
        </div>
        <div className="absolute inset-0 rounded-b-[110px] bg-black opacity-60 max-md:rounded-none" />
        <div className="relative mx-auto max-w-[1280px]">
          <div className="w-[68.44%] max-lg:w-full max-md:text-center">
            <Reveal delay={200}>
              <h1 className="mb-5 text-[52px] font-semibold capitalize leading-[1.1] text-white max-md:text-[32px]">
                Create, Innovate, &amp; Succeed
              </h1>
            </Reveal>
            <h3 className="-mt-2.5 mb-5 text-[32px] font-semibold capitalize leading-[1.3] text-brand max-md:text-base">
              With Cutting-Edge Technology Solutions.
            </h3>
            <div className="mb-5 pb-[15px] pr-[130px] max-md:px-[5px] max-md:pb-0">
              <p className="text-justify text-base font-light leading-[25px] text-[#eee] max-md:text-center">
                Empowering organizations across industries, we combine digital expertise and strategic advisory to drive
                innovation. Transform your business with tailored IT solutions that deliver measurable results. Experience
                the difference of our dedicated approach as we help you achieve your goals with confidence and precision.
              </p>
            </div>
            <div className="-mt-[15px] max-md:mt-0">
            <Link
              href="/about-us"
              className="inline-flex items-center gap-4 rounded-[6px] bg-brand px-5 py-[15px] text-[15px] capitalize leading-[17px] tracking-[0.5px] text-white shadow-[0_12px_24px_-8px_rgba(59,79,228,0.4)] transition-all duration-300"
            >
              Learn More
              <svg width="15" height="15" viewBox="0 0 448 512" fill="currentColor" aria-hidden>
                <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
              </svg>
            </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight cards overlapping the hero (z-10 as well) */}
      <section className="relative z-10 -mt-[160px] pb-[120px] pt-[50px] max-md:-mt-[75px] max-md:px-2.5 max-md:py-2.5">
        <div className="mx-auto grid max-w-[1280px] grid-cols-4 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
          {highlights.map((h, i) => (
            <div key={h.title} className={`isolate bg-white p-5 ${i < 2 ? "rounded-[5px]" : ""} ${glow}`}>
              <div className="spin-glow flex h-full flex-col justify-center bg-white p-[5px] text-center">
                <Image src={h.icon} alt="" width={77} height={77} className="mx-auto h-[77px] w-[77px] max-md:h-24 max-md:w-24" />
                <h3 className="mb-1 mt-[14px] text-base font-semibold capitalize leading-[1.3] text-[#333]">{h.title}</h3>
                <p className="text-[15px] leading-[21px] text-[#555]">{h.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="relative z-0 bg-white pt-5 max-md:px-2.5 max-md:py-[50px]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-[48%_52%] items-center max-lg:grid-cols-1">
          <div>
            <h3 className="mb-5 text-[22px] font-medium capitalize leading-[1.3] text-brand max-md:text-lg">The Story Of Fiona Solutions</h3>
            <h2 className="mb-5 text-[34px] font-semibold capitalize leading-[1.3] tracking-[-0.5px] text-ink max-md:text-[26px]">Innovating For A Smarter Tomorrow</h2>
            <div className="text-justify text-[15px] leading-6 text-[#555] max-md:text-sm max-md:leading-5 [&>p]:mb-[15px] max-md:[&>p]:mb-[14px]">
              <p>
                Fiona Solutions was founded with a vision—to revolutionize the way businesses harness technology for growth
                and efficiency. As a forward-thinking IT solutions provider, we empower organizations across the public and
                private sectors with cutting-edge innovations that drive transformation. Whether optimizing operations,
                streamlining workflows, or enhancing digital capabilities, our mission is to create sustainable, scalable, and
                future-ready solutions.
              </p>
              <p>
                With over 10+ years of proven expertise in technology, strategy, and data, Fiona Solutions has become a
                trusted partner for businesses across diverse industries, including finance, healthcare, manufacturing,
                eCommerce, media, logistics, and education. Headquartered in Texas, we have established a strong global
                presence, with development centers in the USA, India, Singapore, and LATAM. Our team of 500+ seasoned
                professionals delivers tailored, self-managed, cross-functional teams that help clients accelerate time to
                market while optimizing development costs.
              </p>
            </div>
          </div>
          <Image src={images.story} alt="" width={666} height={557} className="h-auto w-full" />
        </div>
      </section>

      {/* Services: background layer follows the mouse (Elementor background mouse track, speed 1) */}
      <section className="relative overflow-hidden rounded-tl-[260px] rounded-br-[260px] pb-[30px] pt-20 max-md:p-2.5">
        <MouseEffect
          background={{ speed: 1 }}
          className="bg-[rgba(0,173,238,0.03)] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${images.featuresBg})` }}
        />
        <div className="relative mx-auto max-w-[1280px]">
          <Kicker className="mb-5">Our Services</Kicker>
          <Title className="-mt-2.5 mb-5 pb-[30px]">Engineering Services &amp; Featured Competencies</Title>
          <div className="pb-[71px] max-md:pb-5">
            {[0, 4, 8].map((start, row) => (
              <div
                key={start}
                className={`flex gap-2.5 max-lg:flex-wrap max-md:flex-col max-md:gap-[15px] ${row === 1 ? "mt-5" : row === 2 ? "mt-[25px]" : ""}`}
              >
                {services.slice(start, start + 4).map((s, j) => (
                  <div key={s.href} className="flex-1 pr-[15px] max-lg:basis-[calc(50%-5px)] max-md:pr-0">
                    <div className="group/card relative z-[1] h-full bg-white pb-[15px] text-center shadow-[0_28px_40px_rgba(0,0,0,0.1)] [transition:background-color_0.4s,transform_0.3s] hover:scale-90 hover:bg-brand">
                      <div className="mt-[15px]">
                        <Image src={s.image} alt="" width={396} height={360} className="mx-auto h-auto w-[85%]" style={mask(masks[start + j])} />
                      </div>
                      <div className="px-[15px] pb-[5px] pt-[9px]">
                        <h2 className="text-base font-medium capitalize leading-[1.3] text-brand transition-colors duration-[400ms] group-hover/card:text-white">{s.label}</h2>
                        <p className="text-[15px] leading-[22px] text-body transition-colors duration-[400ms] group-hover/card:text-white max-md:text-sm">{s.blurb}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section
        className="relative bg-white bg-contain bg-center bg-no-repeat pb-[110px] pt-20 max-md:bg-cover max-md:p-2.5"
        style={{ backgroundImage: `url(${images.blobGradient})` }}
      >
        <div className="mx-auto max-w-[1280px]">
          <Kicker className="mb-2.5">Industries</Kicker>
          <Title className="mb-2.5">Industries We Serve</Title>
          <p className="text-center text-[15px] leading-6 text-[#555] max-md:mt-[5px]">
            We provide specialized consulting services, leveraging deep industry knowledge to address your unique business needs and drive impactful results.
          </p>
          <div className="mt-[15px] grid grid-cols-6 max-lg:grid-cols-3 max-md:grid-cols-1 max-md:gap-y-[2px]">
            {industries.map((i) => (
              <div key={i.label} className="p-2.5">
                <div className="group/img -mb-[25px] rounded-t-[37px] border-[7px] border-brand transition-all duration-300 hover:rounded-t-[30px] hover:border-[5px]">
                  <Image
                    src={i.image}
                    alt=""
                    width={400}
                    height={300}
                    className="block h-auto w-full rounded-t-[30px] transition-transform duration-[1100ms] ease-out hover:-translate-y-2"
                  />
                </div>
                <div className="relative rounded-b-[10px] bg-[#f1f1f1] py-[7px] text-center">
                  <h2 className="text-base font-medium capitalize leading-[1.3] text-brand">{i.label}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features: pill cards curving around the light bulb */}
      <section className="relative overflow-hidden rounded-tl-[300px] rounded-br-[300px] bg-[#f7fbff] py-20 max-md:px-2.5 max-md:py-[50px]">
        <div className="mx-auto max-w-[1280px]">
          <MouseEffect track={{ speed: 0.4 }} className="mb-5">
            <Kicker>Fiona Features</Kicker>
          </MouseEffect>
          <Title small className="mb-5">World-Class Data Analytics To Accelerate Your Business Success.</Title>
          <p className="mx-auto max-w-[1080px] text-center text-[15px] leading-[1.857] text-[#444]">
            Maximize performance and growth with data-driven decisions. At <strong>Fiona Solutions</strong>, we turn raw data
            into actionable insights to cut costs, boost profits, reduce risks, and enhance efficiency.
          </p>
          <div className="mt-[55px] grid grid-cols-[448px_384px_448px] items-center max-lg:grid-cols-1 max-md:mt-5">
            {[0, 1].map((col) => {
              const left = col === 0;
              return (
                <div key={col} className={`${left ? "order-1 mr-5" : "order-3 ml-5"} max-lg:m-0 max-md:flex max-md:flex-col max-md:gap-2.5`}>
                  {features
                    .filter((_, i) => i % 2 === col)
                    .map((f, i) => {
                      const big = bigIcons.has(f.title);
                      return (
                        <div key={f.title} className="flex h-[137.5px] items-center px-2.5 max-md:h-auto max-md:px-0">
                          <div
                            className={`w-[408px] shrink-0 rounded-[100px] border-x-[5px] border-brand bg-white p-[15px] ml-[var(--o)] hover:border-[#67d5ff] max-md:ml-0 max-md:w-full max-md:px-[15px] max-md:py-2.5 ${glow}`}
                            style={{ ["--o" as string]: `${left ? featureOffsets[i] : -featureOffsets[i]}px` }}
                          >
                            <div className="spin-glow p-[5px]">
                              <div className={`flex items-start ${left ? "flex-row-reverse text-right" : "text-left"} max-md:flex-col max-md:items-center max-md:text-center`}>
                                <Image
                                  src={f.icon}
                                  alt=""
                                  width={64}
                                  height={64}
                                  className={`shrink-0 ${big ? "h-16 w-16" : "h-[52px] w-[52px]"} ${left ? "ml-[14px]" : "mr-[14px]"} max-md:mx-auto max-md:mb-2.5 max-md:h-14 max-md:w-14`}
                                />
                                <div className="min-w-0 flex-1">
                                  <h3 className="mb-[5px] text-[19px] font-medium capitalize leading-[1.3] text-[#333]">{f.title}</h3>
                                  <p className="text-[15px] leading-6 text-[#555]">{f.text}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              );
            })}
            <Image src={images.vision} alt="" width={265} height={341} className="order-2 mx-auto h-auto w-[265px] max-lg:my-10 max-md:w-[285px]" />
          </div>
        </div>
      </section>

      {/* Products: 3 + 2 cards */}
      <section
        className="relative bg-white bg-contain bg-[right_center] bg-no-repeat pb-20 pt-[100px] max-md:px-2.5 max-md:pt-[50px]"
        style={{ backgroundImage: `url(${images.blobGrad})` }}
      >
        <div className="mx-auto max-w-[1280px]">
          <Kicker className="mb-2.5">Our Products</Kicker>
          <Title className="mb-5">Innovative Solutions For Your Business</Title>
          <div className="flex flex-wrap justify-center max-md:-mx-2.5">
            {products.map((p, i) => (
              <div key={p.href} className={`w-1/3 p-2.5 max-lg:w-1/2 max-md:w-full ${i < 3 ? "max-md:px-5" : ""}`}>
                <ProductCard product={p} small={i < 3} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working models + strategic tabs share one tinted block */}
      <section className="relative overflow-hidden rounded-tl-[260px] rounded-br-[260px] bg-[rgba(0,173,238,0.098)] pb-[101px] pt-20 max-md:px-2.5 max-md:pb-[50px] max-md:pt-[50px]">
        <Image src={images.decoCircle} alt="" width={82} height={81} className="pointer-events-none absolute left-14 top-0" />
        <Image src={images.decoSpring} alt="" width={86} height={162} className="pointer-events-none absolute right-[83px] top-[41px]" />
        <Image src={images.decoTriangle} alt="" width={92} height={76} className="pointer-events-none absolute bottom-[26px] left-[52px]" />
        <div className="relative mx-auto max-w-[1280px]">
          <Kicker className="mb-2.5">Custom Development- Choose Your Working Model</Kicker>
          <Title className="mb-5">Partnership Model</Title>
          <p className="mx-auto max-w-[1030px] pb-[15px] text-center text-[15px] leading-[1.857] text-[#444]">
            A connection customized to your requirements. From an individual designer to a committed venture group, we have
            all you require. Our three compelling organization models are intended to adjust to singular business
            prerequisites and duplicate benefits for our customers.
          </p>
          <div className="mt-5 flex justify-between gap-5 pb-[60px] max-md:flex-col max-md:pb-5">
            {workingModels.map((m) => (
              <a
                key={m.title}
                href="#"
                className="group/box min-w-0 flex-[0_1_auto] overflow-hidden rounded-[5px] border border-[#f5f4f5] bg-white p-2.5 text-center transition-all duration-[400ms] hover:border-[#007bff]"
              >
                <div className="mb-[25px] mr-5 mt-2.5 inline-flex h-[90px] w-[90px] items-center justify-center rounded-full border-[6px] border-transparent bg-white px-2.5 py-[15px] shadow-[0_0_10px_rgba(0,173,238,0.15)] transition-all duration-[400ms] group-hover/box:border-0 group-hover/box:shadow-[0_0_15px_10px_rgba(0,173,238,0.15)]">
                  <Image src={m.icon} alt="" width={58} height={58} className="h-[58px] w-[58px]" />
                </div>
                <h3 className="mb-[5px] text-lg font-semibold capitalize leading-[1.3] text-black">{m.title}</h3>
                <p className="mb-2.5 text-base leading-[1.857] text-[#656565] max-md:text-[14.592px]">{m.text}</p>
              </a>
            ))}
          </div>
          <div className="mt-5">
            <StrategicTabs />
          </div>
        </div>
      </section>

      {/* Training */}
      <section className="relative z-0 rounded-tl-[300px] rounded-br-[300px] bg-white py-[60px] max-md:px-2.5 max-md:py-[50px]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-[512px_768px] items-center max-lg:grid-cols-1">
          <Image
            src={images.training}
            alt=""
            width={481}
            height={458}
            className="relative -left-9 h-auto w-[481px] rounded-[2px] max-lg:left-0 max-md:w-full"
          />
          <div>
            <h3 className="mb-5 text-[32px] font-medium capitalize leading-[1.3] text-brand max-md:text-lg">
              Enhance Your Expertise With Fiona&rsquo;s Comprehensive Data And Analytics Training Programs, Designed To Equip
              You With The Skills To Turn Raw Data Into Actionable Insights.
            </h3>
            <p className="mb-[15px] text-justify text-[15px] leading-[22px] text-[#555] max-md:text-sm">
              Unite your IT team with a customized and collaborative learning experience through our Private Training
              programs. At FIONA SOLUTIONS, we empower your business with data-driven decision-making, transforming raw data
              into actionable insights. Our expert-led training helps you optimize performance, reduce costs, enhance
              efficiency, mitigate risks, and drive profitability through smarter analytics.
            </p>
            <div className="grid grid-cols-2 gap-2.5 max-md:grid-cols-1">
              {trainings.map((t, i) => (
                <span
                  key={t}
                  className={`block rounded-[3px] border border-brand bg-white py-2.5 text-center capitalize leading-none text-brand transition-all duration-300 ${
                    i === 0 ? "px-[5px]" : "px-2.5"
                  } ${i === 3 ? "text-sm tracking-[0.5px]" : "text-[15px]"} ${i >= 4 ? "tracking-[0.5px]" : ""}`}
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="mb-[19px] mt-[26px] text-justify text-[19px] leading-[22px] text-[#444]">
              Build your skillset in one of our upcoming <strong>Public</strong> training courses
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function ProductCard({ product: p, small }: { product: (typeof products)[number]; small: boolean }) {
  return (
    <div className="group/p flex h-full flex-col rounded-t-[10px] transition-shadow duration-300 hover:shadow-[-30px_30px_60px_rgba(0,173,238,0.1)]">
      <Link href={p.href} className="block overflow-hidden rounded-t-[10px]">
        <Image
          src={p.image}
          alt=""
          width={675}
          height={400}
          className="block aspect-[407/241] h-auto w-full rounded-t-[10px] transition-transform duration-[400ms] group-hover/p:scale-110"
        />
      </Link>
      <div className="flex-1 border border-[#f7f7f7] bg-white pb-10 pt-[15px]">
        <div className="border-l-2 border-white px-5 transition-colors duration-300 group-hover/p:border-brand">
          <h3 className={`mb-2.5 text-justify text-[23px] font-medium capitalize leading-[26px] tracking-[-0.1px] text-brand ${small ? "max-md:text-lg" : ""}`}>
            {p.label}
          </h3>
          <p className={`text-justify text-[15px] leading-[22px] text-[#666] ${small ? "max-md:text-sm" : ""}`}>{p.blurb}</p>
        </div>
        <div className="mt-5 px-5">
          <Link
            href={p.href}
            className="inline-block rounded-[5px] border border-brand bg-white px-5 py-2 text-[15px] leading-6 text-brand transition-all duration-[400ms] hover:bg-brand hover:text-white hover:shadow-[0_10px_30px_rgba(0,176,240,0.21)]"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
