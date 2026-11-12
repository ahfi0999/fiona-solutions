import type { ReactNode } from "react";
import HeroVideo from "@/components/HeroVideo";

// Dark video banner with rounded bottom corners, shared by the Events and Careers pages.
// The fixed header sits on top of it, hence the large top padding.
export default function PageHero({
  video,
  poster,
  overlay,
  className = "",
  children,
}: {
  video: string;
  poster?: string;
  /** Opacity of the black overlay drawn over the video (live: 0.6 events, 0.7 careers). */
  overlay: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      className={`relative overflow-hidden rounded-b-[110px] bg-white bg-cover bg-center md:bg-black ${className}`}
      style={poster ? { backgroundImage: `url(${poster})` } : undefined}
    >
      {/* Like the live site, the video is hidden on mobile: only the poster (careers) or the page's white
          background (events) shows under the black overlay, which makes the events banner grey on phones. */}
      <div className="absolute inset-0 hidden md:block">
        <HeroVideo src={video} poster={poster ?? ""} />
      </div>
      <div className="absolute inset-0 bg-black" style={{ opacity: overlay }} aria-hidden />
      <div className="relative mx-auto w-full max-w-[1320px] md:px-5">{children}</div>
    </section>
  );
}
