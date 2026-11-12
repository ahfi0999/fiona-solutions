"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import { type MenuLink, servicesMenu, solutionsMenu } from "@/lib/menu";
import { employeeLogin, images, nav } from "@/lib/site";

// Mega panels (live: Services 1100px wide / Solutions 720px, measured incl. 10px side padding).
// On mobile the Services panel keeps a 1100px wrapper with a centred 767px box (so it starts at x=167
// and runs off the 350px off-canvas), Solutions a 720px wrapper with a 700px box - same as live.
const megaMenus: Record<string, { columns: MenuLink[][]; width: number; mobileBox?: number }> = {
  Services: { columns: servicesMenu, width: 1100, mobileBox: 767 },
  Solutions: { columns: solutionsMenu, width: 720 },
};

// The live header is two Elementor containers:
//  - a transparent bar that sits on top of the page banner (z-index 100) and scrolls away with it;
//  - a blue sticky copy, always fixed at the top with z-index 9. Page banners (z-index 10, see
//    globals.css) slide over it, so the blue bar only shows once the banner has scrolled past.
export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu after navigating (state adjusted during render, per React docs).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-[100]">
        <Bar variant="top" onMenu={() => setOpen(true)} />
      </header>
      <div className="fixed inset-x-0 top-0 z-[9] bg-brand">
        <Bar variant="sticky" onMenu={() => setOpen(true)} />
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function Bar({ variant, onMenu }: { variant: "top" | "sticky"; onMenu: () => void }) {
  const top = variant === "top";
  return (
    <div
      className={`mx-auto flex max-w-[1280px] items-center justify-between max-[1024px]:px-2.5 ${
        top ? "py-2 max-[1024px]:py-2.5" : "py-2"
      }`}
    >
      <Link href="/" aria-label="Fiona Solutions home" className="shrink-0 min-[1025px]:pr-[15px]">
        <Image
          src={top ? images.logo : images.logoAllWhite}
          alt="Fiona Solutions"
          width={1024}
          height={192}
          priority={top}
          className={`h-auto w-[267px] ${top ? "max-[1024px]:w-[209px]" : "max-[1024px]:w-[248px]"}`}
        />
      </Link>

      {/* Desktop nav (ElementsKit nav menu, desktop above 1024px). */}
      <nav className="relative mx-2.5 hidden flex-1 justify-end min-[1025px]:flex">
        <ul className="flex">
          {nav.map((item) => {
            const mega = megaMenus[item.label];
            return (
              <li key={item.label} className="group">
                <Link
                  href={item.href}
                  className="flex h-[52px] items-center px-[15px] text-[15px] leading-[27.86px] text-white capitalize transition-colors duration-[400ms] hover:text-white"
                >
                  {item.label}
                  {mega && <Chevron className="ml-[11px]" />}
                </Link>
                {mega && <MegaPanel columns={mega.columns} width={mega.width} />}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="hidden w-[226px] shrink-0 justify-end px-[15px] min-[1025px]:flex">
        <Reveal speed="fast">
          <a
            href={employeeLogin}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block rounded-[3px] border px-[25px] py-3 text-sm leading-none tracking-[0.5px] text-nowrap capitalize transition-all duration-300 hover:bg-brand hover:text-white focus:bg-brand focus:text-white ${
              top ? "border-brand text-brand" : "border-white text-white"
            }`}
          >
            Employee Login
          </a>
        </Reveal>
      </div>

      {/* Hamburger (live: 45x29, 1px border, three 1px lines; blue on the top bar, white on the sticky one). */}
      <button
        type="button"
        onClick={onMenu}
        aria-label="Open menu"
        className={`group/h flex h-[29px] w-[45px] flex-col justify-center gap-[5px] rounded-[3px] border p-2 transition-all duration-[400ms] min-[1025px]:hidden ${
          top ? "border-brand hover:bg-brand" : "mt-0.5 border-white hover:bg-white"
        }`}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`block h-px w-[27px] ${top ? "bg-brand group-hover/h:bg-white" : "bg-white group-hover/h:bg-brand"}`}
          />
        ))}
      </button>
    </div>
  );
}

// Live: panel hangs from the nav (left edge of the nav widget, top of the panel = bottom of the links),
// appears instantly and slides down 10px over 0.4s. White box with 30px/10px padding and a soft blue glow,
// columns divided by faint blue lines, 24px icons + Lato 14px labels, and a 10px gradient bar at the bottom.
function MegaPanel({ columns, width }: { columns: MenuLink[][]; width: number }) {
  return (
    <div
      className="pointer-events-none invisible absolute left-0 top-full z-[999] -translate-y-2.5 px-2.5 pb-2.5 pt-2.5 opacity-0 transition-transform duration-[400ms] group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
      style={{ width }}
    >
      <div className="bg-white px-2.5 pb-10 pt-[34px] shadow-[0_0_10px_5px_rgba(0,173,238,0.1)]">
        <div className="flex">
          {columns.map((col, i) => (
            <div
              key={i}
              className={`flex-1 px-2.5 ${i < columns.length - 1 ? "mr-5 border-r-[0.8px] border-brand/[0.12]" : ""}`}
            >
              {col.map((link) => (
                <MenuItem key={link.href} link={link} className="mb-4 last:mb-0" />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="h-2.5 bg-[linear-gradient(170deg,#00adee_0%,#93e1ff_100%)]" />
    </div>
  );
}

function MenuItem({ link, className = "" }: { link: MenuLink; className?: string }) {
  return (
    <Link
      href={link.href}
      className={`flex items-center font-[family-name:var(--font-lato)] text-sm leading-[26px] text-black transition-colors duration-300 hover:text-[#121147] ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- small static SVG icons */}
      <img src={link.icon} alt="" width={24} height={24} className="mr-1.5 h-6 w-6 shrink-0" />
      <span className="pl-[5px] tracking-[0.2px]">{link.label}</span>
    </Link>
  );
}

// Live mobile menu: ElementsKit off-canvas sliding in from the left (350px, #f7f7f7) over a 50% grey
// overlay; bordered orange "X" close button; one sub-menu open at a time.
function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sub, setSub] = useState<string | null>(null);
  return (
    <div className="min-[1025px]:hidden">
      <div
        onClick={onClose}
        aria-hidden
        className={`fixed inset-0 z-[1000] bg-[rgba(51,51,51,0.5)] transition-all duration-[600ms] ease-[cubic-bezier(0.22,0.61,0.24,1)] ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
        className={`fixed top-0 z-[1001] h-full w-[350px] max-w-full overflow-y-auto overflow-x-hidden bg-[#f7f7f7] pb-2.5 font-[family-name:var(--font-poppins)] transition-[left] duration-[600ms] ease-[cubic-bezier(0.6,0.1,0.68,0.53)] ${
          open ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex h-[75px] items-center justify-end px-3 py-2.5">
          <button
            type="button"
            onClick={onClose}
            className="mr-0 h-[31px] w-[45px] rounded-[3px] border border-black/50 p-2 text-[12.77px] font-semibold leading-none text-[#ff5e13] transition-all duration-[400ms] hover:text-black/50"
            aria-label="Close menu"
          >
            X
          </button>
        </div>
        <ul>
          {nav.map((item) => {
            const mega = megaMenus[item.label];
            const isOpen = sub === item.label;
            return (
              <li key={item.label}>
                <div className="relative flex items-center">
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block flex-1 px-[15px] py-2.5 text-[15px] leading-[27.86px] text-black capitalize transition-colors duration-[400ms] hover:text-white"
                  >
                    {item.label}
                  </Link>
                  {mega && (
                    <button
                      type="button"
                      aria-label={`${item.label} submenu`}
                      aria-expanded={isOpen}
                      onClick={() => setSub(isOpen ? null : item.label)}
                      className="absolute right-[15px] flex h-[21px] w-[43px] items-center justify-center rounded-[30px] border border-white text-white"
                    >
                      <Chevron />
                    </button>
                  )}
                </div>
                {mega && isOpen && (
                  <div className="px-2.5" style={{ width: mega.width }}>
                    <div
                      className="py-2.5"
                      style={mega.mobileBox ? { width: mega.mobileBox, marginInline: "auto" } : undefined}
                    >
                      <div className="flex flex-col gap-5 bg-white px-2.5 py-[30px] shadow-[0_0_10px_5px_rgba(0,173,238,0.1)]">
                        {mega.columns.map((col, i) => (
                          // Live rows sit 5px, 44px and 88px into each 124px group.
                          <div key={i} className="flex flex-col px-2.5 pb-2.5 pt-[5px]">
                            {col.map((link, j) => (
                              <MenuItem key={link.href} link={link} className={["", "mt-[13px]", "mt-[18px]"][j]} />
                            ))}
                          </div>
                        ))}
                      </div>
                      <div className="h-2.5 bg-[linear-gradient(170deg,#00adee_0%,#93e1ff_100%)]" />
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

// ElementsKit "down-arrow1" icon: thin chevron in an 11px box.
function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden className={`shrink-0 ${className}`}>
      <path d="M3 8l9 9 9-9" />
    </svg>
  );
}
