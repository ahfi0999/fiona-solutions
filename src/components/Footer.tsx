import Image from "next/image";
import Link from "next/link";
import { contact, images } from "@/lib/site";
import SolutionPartner from "./SolutionPartner";

// Live footer template, measured at 1536px: 100/60px padding, 160px top corners, Footerbg map image with a
// 2% brand tint; columns 383 / 239 / 327 / 331px. Live quirks kept: "Solutions" and the contact lines are
// plain text (no links), social links open in the same tab.
const quickLinks: { label: string; href?: string }[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Solutions" },
  { label: "Events", href: "/events" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Footer() {
  return (
    <>
      {/* On the live site this block is part of the footer template, so it closes every page. */}
      <SolutionPartner />
      <footer className="text-[#111]">
        <section
          className="relative rounded-t-[160px] bg-white bg-center bg-no-repeat pb-[60px] pt-[100px] max-md:rounded-t-[80px] max-md:pb-[49px] max-md:px-2.5 max-md:pt-[60px]"
          style={{ backgroundImage: `url(${images.footerBg})` }}
        >
          <div className="pointer-events-none absolute inset-0 rounded-t-[inherit] bg-brand opacity-[0.02]" />
          <div className="relative mx-auto grid max-w-[1280px] grid-cols-[383px_239px_327px_331px] max-lg:grid-cols-2 max-md:grid-cols-1">
            <div className="pr-[30px] max-md:pr-0">
              {/* Live wraps this logo in a link to the ElementsKit plugin site; left unlinked here. */}
              <Image src={images.footerLogo} alt="Fiona Solutions" width={265} height={50} className="mb-[15px] h-auto w-[265px] max-md:w-[278px]" />
              <p className="mb-[15px] text-justify text-[15px] font-light leading-[26px] max-md:text-sm max-md:leading-[22px]">
                We are an experienced data and analytics consultancy combining technical skill, commercial expertise,
                communication and listening. Our highly-skilled team use information management strategies and tools to
                help you make intelligent use of your data and make the right commercial decisions.
              </p>
            </div>

            <div className="px-2.5 max-md:mt-0.5 max-md:px-0">
              <Heading>Quick Links</Heading>
              <ul className="pt-[5px]">
                {quickLinks.map((n) => {
                  const inner = (
                    <>
                      <span className="flex w-2.5 justify-center text-brand transition-colors duration-[400ms] group-hover/li:text-[#ea5356]">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
                          <path d="M3 1l4 4-4 4" />
                        </svg>
                      </span>
                      <span className="pl-2 text-[15px] font-light leading-[30px] max-md:text-sm">{n.label}</span>
                    </>
                  );
                  return (
                    <li key={n.label} className="group/li h-[30px]">
                      {n.href ? (
                        <Link href={n.href} className="inline-flex items-center">{inner}</Link>
                      ) : (
                        <span className="inline-flex cursor-pointer items-center">{inner}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="px-2.5 max-md:-mt-1 max-md:px-0">
              <Heading>Contact Us</Heading>
              <ul className="text-sm font-light leading-[25px]">
                <ContactLine icon={<PinIcon />} className="pt-2.5">
                  {contact.address}
                </ContactLine>
                <ContactLine icon={<MailIcon />} className="pt-2.5">{contact.email}</ContactLine>
                <ContactLine icon={<PhoneIcon />} className="pt-[18px]">{contact.phones[0]}</ContactLine>
                <ContactLine icon={null} className="pt-2.5">{contact.phones[1]}</ContactLine>
              </ul>
              <h2 className="pt-[15px] text-base font-medium capitalize leading-[35px] text-[#333] max-md:text-lg">Follow Us</h2>
              <ul className="-ml-[5px] flex">
                <Social href={contact.facebook} label="Facebook" color="#3b5998" d="M14 8h3V4h-3c-2.2 0-4 1.8-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8z" />
                <Social href={contact.linkedin} label="LinkedIn" color="#0077b5" d="M4 9h4v12H4zM6 3a2 2 0 110 4 2 2 0 010-4zm4 6h4v2c.6-1.1 2-2.2 4-2.2 4 0 4.6 2.6 4.6 6V21h-4v-5.6c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21h-4z" />
                <Social href={contact.instagram} label="Instagram" color="#3f729b" d="M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm0 2a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H7zm5 3a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4zm5.2-3.6a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2z" />
              </ul>
            </div>

            <div className="px-2.5 max-md:mt-[50px] max-md:px-0">
              <Heading>Connect With Us</Heading>
              {/* TODO: wire this form to an email service or API route (live posts to Elementor Forms). */}
              <form className="pt-[5px]">
                <input name="name" type="text" placeholder="Name" aria-label="Name" className={field} />
                <input name="email" type="email" required placeholder="Email" aria-label="Email" className={field} />
                <textarea name="message" rows={4} placeholder="Message" aria-label="Message" className={`${field} h-[95px] rounded-[3px] px-[14px] py-[5px] max-md:h-[89px]`} />
                <button
                  type="submit"
                  className="mb-2.5 h-14 w-full rounded-[3px] border-[3px] border-brand bg-[#04acec] text-sm font-semibold leading-none tracking-[0.5px] text-white transition-all duration-300 hover:text-white max-md:text-[12.77px]"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
        <div className="border-t border-[#eee] bg-white pb-0.5 pt-[5px]">
          <p className="mx-auto max-w-[1200px] p-2.5 text-center text-sm font-light leading-[26px] text-[#333]">
            Copyright © <Year />. Fiona Solutions
          </p>
        </div>
      </footer>
      <BackToTop />
    </>
  );
}

const field =
  "mb-2.5 block h-[45px] w-full rounded-[2px] border-b border-[#c2c2c2] bg-transparent p-[11.25px] text-[15px] leading-[21px] text-[#1f2124] outline-none placeholder:text-[#1f2124] max-md:h-[42px] max-md:text-sm";

function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="pt-[15px] text-xl font-medium capitalize leading-[35px] text-[#333] max-md:text-lg">{children}</h2>;
}

function ContactLine({ icon, children, className = "" }: { icon: React.ReactNode; children: React.ReactNode; className?: string }) {
  return (
    <li className={`flex ${className}`}>
      <span className="flex w-[23px] shrink-0 text-brand">{icon}</span>
      <span className="pl-2.5 pt-0.5 max-md:pt-0">{children}</span>
    </li>
  );
}

// Fixed "back to top" button (live: 28x35 white pill, 40px from the bottom-right corner, links to #header).
function BackToTop() {
  return (
    <a
      href="#"
      aria-label="Back to top"
      className="fixed bottom-10 right-10 z-[1] flex h-[35px] w-[28px] justify-center rounded-[100px] bg-white pt-[9px] text-brand shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] transition-all duration-300"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden>
        <path d="M8 15V1.5M2.5 7L8 1.5 13.5 7" />
      </svg>
    </a>
  );
}

function PinIcon() {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <path d="M12 22s-7-7.6-7-13a7 7 0 0114 0c0 5.4-7 13-7 13z" />
      <circle cx="12" cy="9" r="2.6" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <path d="M3 9.5l9-6 9 6V20H3z" />
      <path d="M3 9.5l9 6 9-6M6 7.5V12M18 7.5V12M6 7.5h12" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <path d="M5 3.5h3.5l2 5-2.5 1.5a11 11 0 005 5l1.5-2.5 5 2v3.5a2 2 0 01-2 2A16.5 16.5 0 013 5.5a2 2 0 012-2z" />
      <path d="M14.5 3.5a6.5 6.5 0 016 6M14.5 7a3 3 0 012.5 2.5" />
    </svg>
  );
}

function Social({ href, label, color, d }: { href: string; label: string; color: string; d: string }) {
  return (
    <li className="m-1">
      <a
        href={href}
        aria-label={label}
        className="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-[#eaebf1] bg-white transition-all duration-[400ms] hover:bg-transparent hover:shadow-[0_10px_10px_rgba(39,49,113,0.07)]"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill={color} aria-hidden>
          <path d={d} fillRule="evenodd" />
        </svg>
      </a>
    </li>
  );
}

// Cached so the page can be prerendered; refreshed on each build.
async function Year() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}
