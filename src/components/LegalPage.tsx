import { WP } from "@/lib/site";

// Layout shared by /privacy-policy and /terms-conditions, measured on the live pages at 1536px:
// banner 200/80px padding, 110px bottom corners, black 70% overlay, 52px/1.1 title in a 68.4% column;
// body 80px padding, justified 15px/1.857 #444 text, 15px paragraph gaps, lists indented 45px.
export default function LegalPage({ title, html }: { title: string; html: string }) {
  return (
    <>
      <section
        className="relative z-10 rounded-b-[110px] bg-[#05060f] bg-cover bg-center pb-20 pt-[200px] max-md:-mt-[21px] max-md:rounded-none max-md:px-2.5 max-md:pb-[50px] max-md:pt-[130px]"
        style={{ backgroundImage: `url(${WP}/2025/02/Cloud-Enablement.webp)` }}
      >
        <div className="absolute inset-0 rounded-b-[inherit] bg-black opacity-70" />
        <div className="relative mx-auto max-w-[1280px]">
          <h1 className="w-[68.44%] text-[52px] font-semibold capitalize leading-[1.1] text-white max-md:w-full max-md:text-[32px]">{title}</h1>
        </div>
      </section>
      <section className="py-20 max-md:px-2.5 max-md:pb-[50px] max-md:pt-0">
        <div
          className="mx-auto max-w-[1280px] text-justify text-[15px] leading-[1.857] text-[#444] [&_a]:text-accent [&_li]:mb-0 [&_ol]:mb-[22.5px] [&_ol]:ml-[45px] [&_ol]:list-decimal [&_p]:mb-[15px] [&_strong]:font-bold [&_ul]:mb-[22.5px] [&_ul]:ml-[45px] [&_ul]:list-disc max-md:text-sm max-md:leading-[26px]"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </section>
    </>
  );
}
