import type { FionaEvent } from "@/content/events";
import EventIcon, { type EventIconName } from "./EventIcons";

// Live icon sizes/colours: the ElementsKit map marker is 20px and grey (#69727d); the Jeg Kit
// industry/booth glyphs are 22px in brand blue, pulled 2px left. The date row's icon font never loads on live (blank).
const iconClass: Record<EventIconName, string> = {
  location: "h-5 w-5 text-[#69727d]",
  industry: "-ml-0.5 h-[22px] w-[22px] text-brand",
  booth: "-ml-0.5 h-[22px] w-[22px] text-brand",
};

// Live rows are 44px-tall white boxes stacked 30px apart (each later row paints over the one above);
// the label column is 20.7% of the row, so on phones "Booth No:" wraps and its 2nd line is mostly hidden.
function Row({ icon, label, value, tight }: { icon?: EventIconName; label: string; value: string; tight?: boolean }) {
  return (
    <div className={`relative flex h-11 items-start bg-white last:mb-0 ${tight ? "-mb-[15px] md:-mb-[14px]" : "-mb-[14px]"}`}>
      <span className="mt-[3px] flex h-[22px] w-[22px] shrink-0">{icon && <EventIcon name={icon} className={iconClass[icon]} />}</span>
      <span className="ml-2 w-[20.7%] shrink-0 pt-1 text-[15px] font-medium leading-[19.5px] text-ink md:ml-[9px]">{label}</span>
      <span className="ml-[7px] text-[15px] leading-[28px] text-body">{value}</span>
    </div>
  );
}

export default function EventCard({ event }: { event: FionaEvent }) {
  return (
    <article className="rounded-[10px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]">
      <div className="flex h-14 items-center rounded-t-[10px] bg-brand pl-[61px] pr-4 pt-0.5 md:h-[57px] md:pt-0">
        <h2 className="text-xl font-semibold leading-[26px] text-white">{event.name}</h2>
      </div>
      <div className="mx-5 mt-[15px] flex flex-col md:mt-[14px]">
        <Row icon="location" label="Location:" value={event.location} />
        {/* live mobile: rows sit 30/29/30px apart (card 204px tall) */}
        <Row icon="industry" label="Industry:" value={event.industry} tight />
        <Row icon="booth" label="Booth No:" value={event.booth} />
        <Row label="Date:" value={event.date} />
      </div>
    </article>
  );
}
