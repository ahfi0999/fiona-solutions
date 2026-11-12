import Image from "next/image";
import { pillarIcons, pillars } from "@/lib/site";

// "Just The Beginning Of Who We Are & What We Do!" block. On the live site this is the first section of the
// footer template, so it closes every page. Measured at 1536px: 100px top padding, 100px top corners,
// 1200px heading, two 580px columns; 270x258 cards with the rotating-gradient hover glow.
export default function SolutionPartner() {
  return (
    <section className="relative rounded-t-[100px] bg-white pb-[30px] pt-[90px] max-md:rounded-t-[60px] max-md:pb-0 max-md:pt-[50px]">
      <div className="mx-auto max-w-[1280px] px-2.5 pb-2.5 max-md:px-[25px] max-md:pb-0">
        <h2 className="mx-auto mb-[44px] max-w-[1200px] text-center text-[40px] font-semibold capitalize leading-[1.3] text-ink max-md:mb-[34px] max-md:text-[26px]">
          Just The Beginning Of Who We Are &amp; What We Do!
        </h2>
        <div className="mx-auto flex max-w-[1200px] gap-5 p-2.5 max-lg:flex-col max-md:p-0">
          <div className="flex flex-1 flex-col justify-center gap-5 p-2.5 max-md:gap-0 max-md:px-0 max-md:pb-0">
            <h3 className="text-[22px] font-medium capitalize leading-[1.3] text-brand max-md:mb-[17px] max-md:text-lg">Recognized As The Fastest-Growing</h3>
            <h3 className="text-[32px] font-semibold capitalize leading-[1.3] text-[#444] max-md:mb-[9px] max-md:text-[26px]">Your Solution Partner</h3>
            <div className="max-w-[545px] text-justify text-[15px] leading-[22px] text-[#555] max-md:text-sm [&>p]:mb-[15px]">
              <p>
                We provide comprehensive solutions tailored to your business needs, whether it&rsquo;s developing
                applications from scratch, integrating systems to enhance functionality, migrating legacy data to the
                cloud, or ensuring seamless application maintenance. Our goal is to help your business operate
                efficiently with cutting-edge technology and expert support.
              </p>
              <p>
                Our commitment goes beyond project delivery. With a team of dedicated and skilled software developers, we
                offer round-the-clock support and maintenance, ensuring your applications remain secure, up-to-date, and
                optimized for performance. Partner with us for long-term success and innovation-driven growth.
              </p>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-5 p-2.5 max-md:grid-cols-1 max-md:px-0 max-md:pt-0">
            {pillars.map((p, i) => (
              <div key={p.title} className="isolate min-h-[258px] rounded-[5px] max-md:min-h-0 bg-white p-[15px] shadow-[0_40px_100px_10px_rgba(0,173,238,0.2)]">
                <div className="spin-glow h-full p-[3px]">
                  <div className="flex h-full flex-col justify-center bg-white max-md:justify-start p-[5px] text-center">
                    <Image src={pillarIcons[i]} alt="" width={67} height={67} className="mx-auto h-[67px] w-[67px] max-md:h-[88px] max-md:w-[88px]" />
                    <h4 className="mb-1 mt-[15px] max-md:mt-[14px] text-base font-semibold capitalize leading-[1.3] text-[#333]">{p.title}</h4>
                    <p className="text-[15px] leading-[21px] text-[#555]">{p.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
