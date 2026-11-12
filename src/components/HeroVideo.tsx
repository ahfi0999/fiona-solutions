"use client";

import { useEffect, useRef } from "react";

// Background video for the hero. Calls play() on mount because some browsers
// skip autoplay when the page first loads in a background tab.
export default function HeroVideo({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {}); // poster image stays visible if playback is blocked
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover"
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      aria-hidden
    />
  );
}
