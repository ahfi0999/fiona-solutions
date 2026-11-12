import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import EventCard from "@/components/events/EventCard";
import ImageCarousel from "@/components/events/ImageCarousel";
import PageHero from "@/components/events/PageHero";
import PerkCards from "@/components/events/PerkCards";
import { clubs, eventPerks, events, eventsHero } from "@/content/events";

export const metadata: Metadata = {
  title: "Events - Fiona Solutions",
  description: eventsHero.text,
};

export default function EventsPage() {
  return (
    <>
      <PageHero video={eventsHero.video} overlay={0.6} className="pb-[251px] pt-[229px] md:py-[250px]">
        <div className="max-w-[707px]">
          <Reveal animation="fadeIn" delay={200}>
            <h1 className="text-center text-[52px] font-semibold leading-[1.1] text-white md:text-left">{eventsHero.title}</h1>
          </Reveal>
          <h3 className="mt-2.5 text-[32px] font-semibold leading-[1.3] text-brand">{eventsHero.subtitle}</h3>
          <p className="mb-[15px] mt-5 w-[260.4px] text-center text-[14.592px] leading-[25px] text-[#eee] md:w-auto md:max-w-[577px] md:text-left md:text-base">{eventsHero.text}</p>
        </div>
      </PageHero>

      <PerkCards perks={eventPerks} overlap={100} mobileOverlap={55} minHeight={234} className="px-5 pb-5 md:pb-[130px]" />

      {/* Event cards */}
      <section className="pb-[95px] md:px-5">
        <div className="mx-auto grid max-w-[1280px] gap-[15px] pr-[15px] md:grid-cols-2 md:pr-0 lg:grid-cols-3 lg:pr-[15px]">
          {events.map((e) => (
            <EventCard key={e.name} event={e} />
          ))}
        </div>
      </section>

      {/* Clubs and activities */}
      <section className="pb-[70px] md:px-5">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto mb-[45px] max-w-[1200px] text-center">
            <h3 className="text-[22px] font-medium leading-[1.3] text-brand">@Fiona Actions</h3>
            <h2 className="mt-2.5 text-[40px] font-semibold leading-[50px] text-black md:text-4xl md:leading-[60px]">Clubs And Activities</h2>
            <p className="mx-auto mt-[5px] max-w-[150px] text-[15px] leading-[27.86px] text-[#444] md:max-w-[960px]">
              Explore a variety of clubs and activities at Fiona Solutions. Engage, connect, and enhance your skills
              through exciting events and community programs!
            </p>
          </div>

          {clubs.map((c, ci) => (
            <div key={c.category}>
              <h2
                className={`mb-[15px] h-[30px] bg-[#edf4f7] pl-[15px] text-center text-[40px] font-semibold leading-[30px] text-brand md:h-10 md:text-left md:text-2xl md:leading-10 ${
                  ci ? "mt-8 md:mt-[30px]" : "mr-[17px] md:mr-0 lg:mr-[17px]"
                }`}
              >
                {c.category}
              </h2>
              <div className="grid pr-[15px] md:grid-cols-2 md:gap-[15px] md:pr-0 lg:grid-cols-3 lg:pr-[17px]">
                {c.albums.map((a) => (
                  <div key={a.title} className="bg-white pb-2.5 shadow-[0_0_10px_5px_rgba(0,0,0,0.1)]">
                    {/* live: the Heckathon album title box is 5px taller than the others (image starts 50px vs 45px below the card top) */}
                    {/* mobile: 40px/50px title pulled up into the card and overlapping the image box, like live */}
                    <h3
                      className={`flex items-center justify-center text-center text-[40px] font-semibold leading-[50px] text-[#444] md:mb-0 md:mt-0 md:text-xl md:leading-10 ${
                        ci ? "-mb-2 -mt-2.5 md:h-[42.6px]" : "-mb-[7px] -mt-1.5 md:h-[47.6px]"
                      }`}
                    >
                      {a.title}
                    </h3>
                    <div className="mx-2.5 border-[2.4px] border-brand">
                      <ImageCarousel images={a.images} alt={a.title} arrowInset={ci ? -2 : 8} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </>
  );
}
