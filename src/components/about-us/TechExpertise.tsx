import type { CSSProperties } from "react";
import Reveal from "@/components/Reveal";
import { techLogo, techRows } from "@/content/about-us";
import LogoSlider from "./LogoSlider";

// "Our Capabilities And Technological Expertise" logo sliders on the About page.
// Desktop: each group is a column (label above its slider) with the live widths.
// Mobile: like live, a row's labels sit side by side on one line and the sliders follow below.
export default function TechExpertise() {
  return (
    <section className="rounded-tl-[200px] rounded-br-[200px] bg-brand/10 px-[15px] pb-20 pt-[50px] md:mt-[155px] md:pt-[45px] lg:px-5">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <Reveal as="p" animation="fadeInUp" delay={200} className="text-[20px] font-semibold leading-[1.25] text-brand md:text-[22px]">
            Fiona Technologies
          </Reveal>
          <h2 className="mt-[9px] text-[28px] font-semibold leading-[1.3] text-ink md:mt-1 md:text-[40px]">Our Capabilities And Technological Expertise</h2>
          <Reveal as="p" animation="fadeInUp" delay={600} className="mt-0.5 text-[15px] leading-6 text-body">
            We offer advanced capabilities and deep technological expertise, delivering innovative solutions tailored to
            business needs.
          </Reveal>
        </div>

        <div className="mt-[25px] md:mt-[35px]">
          {techRows.map((row, ri) => (
            <div key={ri} className={row.title ? "mt-10 first:mt-0" : "mt-[25px]"}>
              {row.title && (
                <h3
                  className={`mb-2.5 rounded-[5px] bg-[#f3f3f3] py-2.5 pl-2.5 font-medium leading-[1.3] text-brand lg:text-lg ${row.bigTitle ? "text-lg" : "text-base"}`}
                >
                  {row.title}
                </h3>
              )}
              <div className={`flex flex-wrap gap-y-5 lg:flex-nowrap lg:pt-0 ${row.groups.some((g) => g.label) ? "pt-5" : ""}`}>
                {row.groups.map((g, gi) => {
                  const vars = {
                    "--w": `${(g.w / 1200) * 100}%`,
                    "--ml": `${((g.ml ?? 0) / 1200) * 100}%`,
                    "--wm": g.wm ? `${(g.wm / 360) * 100}%` : "100%",
                    "--mlm": `${g.mlm ?? 0}px`,
                    "--lw": g.lw ? `${g.lw}px` : g.wm ? `${(g.wm / 360) * 100}%` : "auto",
                  } as CSSProperties;
                  return (
                    <div key={gi} className="contents lg:block lg:w-[var(--w)] lg:shrink-0 lg:ml-[var(--ml)]" style={vars}>
                      {g.label && (
                        <Reveal
                          as="h4"
                          animation="fadeInUp"
                          delay={200}
                          className={`order-0 mr-5 w-[var(--lw)] font-normal text-brand lg:order-none lg:mb-[13px] lg:mr-0 lg:w-auto lg:text-base lg:leading-5 ${
                            row.small ? "text-sm leading-[17.5px]" : "text-base leading-5"
                          } ${g.lgap ? "mt-10 lg:mt-0" : ""}`}
                        >
                          {g.label}
                        </Reveal>
                      )}
                      <div className="order-1 ml-[var(--mlm)] w-[var(--wm)] lg:order-none lg:ml-0 lg:w-auto">
                        <LogoSlider
                          logos={g.logos.map((l, li) => ({ src: techLogo(l), hover: g.hover?.[li] ? techLogo(g.hover[li]) : undefined }))}
                          spv={g.spv}
                          groupMobile={g.gm}
                          autoplay={g.ap}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
