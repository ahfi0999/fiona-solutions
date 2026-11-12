import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { BannerCards, PageBanner } from "@/components/about-us/PageBanner";
import ContactForm from "@/components/contact-us/ContactForm";
import Reveal from "@/components/Reveal";
import { contact, WP } from "@/lib/site";

export const metadata: Metadata = { title: "Contact Us - Fiona Solutions" };

const cards = [
  { title: "Discuss Our Services", text: "Looking to outsource your software development? Discuss your needs with one of our reps.", icon: `${WP}/2025/02/Discuss-Our-Services.png`, w: 61, h: 60 },
  { title: "Careers At Fiona", text: "Shape the future of tech in a dynamic company with over 1,000 experts worldwide.", icon: `${WP}/2025/02/Careers-at-Fiona.png`, w: 61, h: 55 },
  { title: "Press And Media", text: "For enquiries related to speaking engagements, quotes, company history, and articles.", icon: `${WP}/2025/02/Press-and-Media.png`, w: 61, h: 61 },
  { title: "General Inquiries", text: "Reach out to us for support, information, or any general inquiries.", icon: `${WP}/2025/02/General-Inquiries.png`, w: 56, h: 63 },
];

const offices = [
  { title: "USA Corporate Office - Texas", address: contact.address, image: `${WP}/2025/01/california.webp` },
  {
    title: "India Head Quarters - Hyderbad - Madhapur",
    address: "Madhapur ,First Floor , 13, Kavuri Hills Rd, RBI Colony, Madhapur, Hyderabad, Telangana 500081, India",
    image: `${WP}/2025/02/madhapur-office.webp`,
  },
];

const phones = [
  { flag: `${WP}/2025/02/usa-flag.png`, number: contact.phones[0] },
  { flag: `${WP}/2025/02/ind-flag.png`, number: contact.phones[1] },
];

// iconClass / headClass: live sizes the two icon boxes and their offsets differently (Call 46px / Email 50px on mobile).
function IconBlock({ icon, title, children, iconClass, headClass }: { icon: ReactNode; title: string; children: ReactNode; iconClass: string; headClass: string }) {
  return (
    <div className="-ml-[10px] flex gap-[14px] md:ml-0">
      <span className={`flex shrink-0 items-center justify-center rounded-full bg-brand/[0.08] text-accent md:h-14 md:w-14 ${iconClass}`}>{icon}</span>
      <div className={headClass}>
        <h2 className="text-lg font-semibold leading-[1.2] text-ink">{title}</h2>
        {children}
      </div>
    </div>
  );
}

const svg = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export default function ContactUs() {
  return (
    <>
      <PageBanner
        image={`${WP}/2025/02/about-fiona.webp`}
        video={`${WP}/2025/03/contact-us.mp4`}
        overlay={0.45}
        className="pb-[96px] pt-[109px] md:pb-[275px] md:pt-[260px]"
      >
        <div className="-mx-2.5 max-w-[876px] text-center md:mx-0 md:text-left">
          <Reveal as="h1" animation="fadeIn" delay={200} className="text-[28px] font-semibold leading-[1.1] text-white md:text-[52px]">Contact Us</Reveal>
          <p className="mt-2.5 text-lg font-semibold leading-[1.3] text-brand md:text-[32px]">How Can We Help?</p>
          <p className="mt-5 max-w-[760px] text-center text-[14.592px] leading-[25px] text-[#eee] md:text-justify md:text-base">
            Boost your business with our cutting-edge IT solutions. From optimization to security, we deliver innovation
            tailored to your needs. Partner with us for a smarter, future-ready business!
          </p>
        </div>
      </PageBanner>

      <div className="bg-white bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${WP}/2020/06/blob-grad.svg)` }}>
        <BannerCards
          cards={cards}
          overlap="-mt-[36px] md:-mt-[110px]"
          className="pb-0 max-md:px-[29px] md:pb-[150px]"
          titleClass="mt-6"
          iconClass="max-md:h-[calc(var(--ih)*1.148)] max-md:w-[calc(var(--iw)*1.148)]"
          cardClass="justify-start! px-5 pb-[25px] pt-[25px] shadow-[0_40px_100px_10px_rgba(0,173,238,0.2)] md:px-[25px] lg:min-h-[226px]"
        />
      </div>

      <section className="bg-white bg-contain bg-center bg-no-repeat px-2.5 pb-[70px] pt-[30px] md:px-5" style={{ backgroundImage: `url(${WP}/2020/06/blob-grad.svg)` }}>
        <div className="mx-auto grid max-w-7xl items-start gap-[26px] md:gap-12 lg:grid-cols-[581px_610px] lg:justify-between lg:gap-0">
          <div className="pt-[36px] md:pt-[26px]">
            <IconBlock
              title="Call Us"
              iconClass="h-[46px] w-[46px] md:mt-[5px]"
              headClass="pt-0 md:pt-[18px]"
              icon={
                <svg {...svg} aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  <path d="M14.05 2a9 9 0 0 1 8 7.94M14.05 6A5 5 0 0 1 18 10" />
                </svg>
              }
            >
              <div className="mt-[33px] space-y-[15px] md:mt-[22px]">
                {phones.map((p) => (
                  <p key={p.number} className="flex flex-col items-start gap-[9px] text-[14.592px] leading-[27.1px] md:flex-row md:gap-[19px] md:text-base md:leading-[30px]">
                    <Image src={p.flag} alt="" width={28} height={18} className="h-[22px] w-[33px] md:h-[18px] md:w-[28px]" />
                    <a href={`tel:${p.number.replace(/\s/g, "")}`} className="text-brand">{p.number}</a>
                  </p>
                ))}
              </div>
            </IconBlock>

            <div className="mt-[45px] md:mt-[21px]">
              <IconBlock
                title="Email"
                iconClass="h-[50px] w-[50px] md:mt-[19px]"
                headClass="pt-0 md:pt-[19px]"
                icon={
                  <svg {...svg} aria-hidden>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                }
              >
                <p className="mt-2 text-[14.592px] leading-[27.1px] text-body md:mt-2.5 md:text-base md:leading-[30px]">{contact.email}</p>
              </IconBlock>
            </div>

            <div className="mt-[31px] border-t border-[#eaeaea] pt-[22px] md:mt-[14px]">
              <h2 className="px-5 text-center text-2xl font-semibold leading-[1.2] text-ink md:px-0 md:text-left">
                Fiona Solutions Around The World - <span className="text-[#04acec]">Our Offices</span>
              </h2>
              <div className="mt-[37px] space-y-[28px] md:mt-[29px]">
                {offices.map((o) => (
                  <div key={o.title} className="flex items-start gap-5 md:gap-[18px]">
                    <Image src={o.image} alt="" width={87} height={58} className="h-[43px] w-16 shrink-0 rounded-[10px] object-cover md:h-[56px] md:w-[87px]" />
                    <div className="max-w-[238px] md:max-w-none">
                      <h3 className="text-[15px] font-semibold leading-[1.2] text-ink md:text-lg">{o.title}</h3>
                      <p className="mt-[11px] text-sm leading-[26px] text-body md:text-[15px] md:leading-[1.857]">{o.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white px-10 pb-10 pt-5 shadow-[0_0_15px_10px_rgba(0,173,238,0.1)] lg:mr-[30px]">
            <h2 className="text-center text-2xl font-semibold leading-[1.3] text-ink md:text-[40px]">Get In Touch</h2>
            <div className="mt-[35px]">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
