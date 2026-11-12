import Image from "next/image";
import type { CSSProperties } from "react";
import type { Feature, Features, Mobile } from "@/content/products";
import "./product-effects.css";

// Feature section: two columns of feature cards around a central illustration.
// Three card styles exist on the live site:
//  - "cards": rounded boxes, icon on top, centred text (Cloud Connect, SECAPI, Verifi AI)
//  - "list":  white boxes, icon on the left (Cloud Sphere)
//  - "pills": wide pills, icon facing the centre (Vox AI)
// Below 768px everything stacks (left cards, illustration, right cards) with the live site's mobile values.
export default function ProductFeatures({ f, m }: { f: Features; m: Mobile }) {
  const sectionCls =
    f.variant === "list"
      ? "rounded-t-[250px] bg-[linear-gradient(180deg,rgba(0,173,238,0.05)_0%,#fff_100%)] md:pb-20 md:pt-[70px]"
      : `${f.bg ? "bg-cover bg-center" : "bg-white"} md:pt-[var(--pt)] md:pb-[70px]`;

  const vars: Record<string, string> = {
    "--pt": `${f.padTop ?? 70}px`,
    "--m-f-pt": `${m.featPt ?? 0}px`,
    "--m-f-pb": `${m.featPb ?? 0}px`,
    "--m-f-kfs": `${m.featKicker?.[0] ?? 20}px`,
    "--m-f-klh": `${m.featKicker?.[1] ?? 26}px`,
    "--m-f-tmb": `${m.featTitleMb ?? 5}px`,
    "--m-f-mt": `${m.featCardsMt + 15}px`, // + the text's 15px bottom margin
    "--m-f-cpx": `${m.featCardPx ?? 0}px`,
    "--m-f-rpr": `${m.featRightPr ?? 0}px`,
  };

  return (
    <section
      className={`px-2.5 pb-[var(--m-f-pb)] pt-[var(--m-f-pt)] md:px-5 ${sectionCls}`}
      style={{ backgroundImage: f.bg ? `url(${f.bg})` : undefined, ...(vars as CSSProperties) }}
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="mb-2.5 text-[length:var(--m-f-kfs)] font-medium leading-[var(--m-f-klh)] text-brand md:text-[22px] md:leading-[1.3]">
            {f.kicker}
          </p>
          <h2 className="mb-[var(--m-f-tmb)] text-[32px] md:mb-[5px] font-semibold leading-10 text-black md:text-[36px] md:leading-[60px]">{f.title}</h2>
          <p className="text-[15px] leading-[27.86px] text-[#444] md:px-[120px]">{f.text}</p>
        </div>

        <div
          className="mt-[var(--m-f-mt)] grid items-center gap-10 md:mt-[45px] md:gap-5 lg:grid-cols-[var(--cols)] lg:gap-[var(--gap)] lg:[padding-inline:var(--inset)]"
          style={{ ["--cols" as string]: f.cols, ["--gap" as string]: `${f.gap ?? 40}px`, ["--inset" as string]: f.inset ?? "0px" }}
        >
          <Column items={f.left} f={f} side="left" />
          <div
            className={`flex justify-center md:order-first lg:order-none ${f.imageStart ? "lg:justify-start" : ""} ${
              m.featImgFull ? "max-md:-mx-2.5" : ""
            }`}
          >
            <Image
              src={f.image}
              alt=""
              width={f.imageW}
              height={f.imageH}
              className="h-auto w-full md:max-w-[var(--imw)]"
              style={{ ["--imw" as string]: `${f.imageW}px` }}
            />
          </div>
          <Column items={f.right} f={f} side="right" />
        </div>
      </div>
    </section>
  );
}

// Hover: the card's shadow moves up-left (live: -8px -18px 50px <spread> rgba(0,173,238,<alpha>)).
function hoverShadow(f: Features, it: Feature): CSSProperties {
  return { ["--hover-shadow" as string]: `-8px -18px 50px ${f.hoverSpread ?? 10}px rgba(0,173,238,${it.hoverAlpha ?? 0.1})` };
}

// "cards" icons are sized in % of the card's content box on the live site (Elementor image-box),
// so they keep their desktop pixel size at 1536px and scale with the card on mobile.
function cardIconWidth(f: Features, it: Feature, side: "left" | "right") {
  const cols = f.cols.split(/\s+/);
  const colW = parseFloat(side === "left" ? cols[0] : cols[cols.length - 1]);
  const pad = (it.pad ?? "20px 10px").split(/\s+/).map((x) => parseFloat(x));
  const padX = pad.length === 4 ? pad[1] + pad[3] : (pad[1] ?? pad[0]) * 2;
  return `${(it.w / (colW - padX)) * 100}%`;
}

function Column({ items, f, side }: { items: Feature[]; f: Features; side: "left" | "right" }) {
  const variant = f.variant;
  return (
    <div
      className={`mt-[var(--co)] flex flex-col px-[var(--m-f-cpx)] md:px-0 ${side === "right" ? "max-md:pr-[calc(var(--m-f-cpx)+var(--m-f-rpr))]" : ""} ${
        variant === "list" ? "gap-[15px]" : "gap-5"
      }`}
      style={{ ["--co" as string]: `${(side === "right" ? f.rightOffset : f.leftOffset) ?? 0}px` }}
    >
      {items.map((it, i) =>
        variant === "cards" ? (
          <div
            key={it.title}
            className="fp-feature rounded-[30px] bg-white px-2.5 py-5 text-center shadow-[0_0_10px_5px_rgba(0,173,238,0.15)] lg:min-h-[var(--mh)]"
            style={{ ["--mh" as string]: `${it.minH ?? 0}px`, padding: it.pad, ...hoverShadow(f, it) }}
          >
            {/* mobile: inline image in a text line box (like the live <figure>) + the figure's margin */}
            <div className="mb-[var(--fm)] text-[14.592px] leading-[27.0994px] md:contents" style={{ ["--fm" as string]: `${(f.iconGap ?? 25) - 10}px` }}>
              <FeatureIcon
                it={it}
                className="mx-auto max-md:inline max-md:align-baseline md:mb-[var(--ig)]"
                style={{ width: cardIconWidth(f, it, side), ["--ig" as string]: `${f.iconGap ?? 25}px` }}
              />
            </div>
            <h3 className="mb-0.5 text-base font-semibold leading-[1.3] text-ink">{it.title}</h3>
            <p className="text-sm leading-5 text-body">{it.text}</p>
          </div>
        ) : variant === "list" ? (
          <div
            key={it.title}
            className="fp-feature rounded-[5px] bg-white p-2.5 shadow-[0_0_10px_5px_rgba(0,173,238,0.15)] md:flex md:items-start md:gap-[18px]"
            style={hoverShadow(f, it)}
          >
            {/* mobile: inline image in a text line box, like the live <figure>, for the same gap below it */}
            <div className="text-[14.592px] leading-[27.0994px] md:contents">
              <FeatureIcon
                it={it}
                className="w-[16%] shrink-0 max-md:inline max-md:align-baseline md:w-[var(--iw)]"
                style={{ ["--iw" as string]: `${it.w}px` }}
              />
            </div>
            <div>
              <h3 className="text-base font-semibold leading-[1.3] text-[#333]">{it.title}</h3>
              <p className="mt-0.5 leading-[21px] text-[#555]" style={{ fontSize: it.textSize ?? 15 }}>
                {it.text}
              </p>
            </div>
          </div>
        ) : (
          <div
            key={it.title}
            className={`fp-feature bg-white p-2.5 text-center shadow-[0_0_10px_rgba(0,172,237,0.21)] md:flex md:items-start md:gap-[15px] md:py-[15px] md:pl-[var(--pl)] md:pr-[var(--pr)] ${
              side === "left" ? "md:flex-row-reverse md:text-right" : "md:text-left"
            } ${i === 1 ? "" : side === "left" ? "lg:-mr-10" : "lg:-ml-10"}`}
            style={{
              borderRadius: pillRadius(side, i),
              ["--pl" as string]: `${side === "right" && i === 2 ? 40 : 20}px`,
              ["--pr" as string]: `${side === "left" && i !== 1 ? 40 : 20}px`,
              ...hoverShadow(f, it),
            }}
          >
            <div className="text-[14.592px] leading-[27.0994px] md:contents">
              <FeatureIcon
                it={it}
                className="w-[14%] shrink-0 max-md:inline max-md:align-baseline md:w-[var(--iw)]"
                style={{ ["--iw" as string]: `${it.w}px` }}
              />
            </div>
            <div>
              <h3 className="text-[19px] font-medium leading-[1.3] text-[#333]">{it.title}</h3>
              <p className="mt-[5px] text-[15px] leading-6 text-[#555]">{it.text}</p>
            </div>
          </div>
        ),
      )}
    </div>
  );
}

// Vox AI pills: the outer corners of the top and bottom pills are extra rounded.
function pillRadius(side: "left" | "right", i: number) {
  if (i === 1) return "10px";
  const big = (side === "left") === (i === 0);
  return big ? "60px 10px" : "10px 60px";
}

function FeatureIcon({ it, className = "", style }: { it: Feature; className?: string; style?: CSSProperties }) {
  return (
    <Image
      src={it.icon}
      alt=""
      width={Math.round(it.w)}
      height={it.h}
      className={`h-auto object-contain ${className}`}
      style={style}
    />
  );
}
