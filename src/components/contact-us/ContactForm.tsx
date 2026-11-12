"use client";

import { useState, type FormEvent } from "react";

const field =
  "h-[44px] w-full rounded-[2px] border-0 border-b border-[#c2c2c2] bg-transparent px-3 py-[11px] text-[15px] text-[#1f2124] outline-none placeholder:text-[#757575] focus:border-brand";

// "Get In Touch" form. TODO: wire to a backend (API route / email service); for now it only
// validates in the browser and shows the success message.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-2.5">
      <input name="name" type="text" placeholder="Name" aria-label="Name" className={field} />
      <input
        name="phone"
        type="tel"
        placeholder="Phone"
        aria-label="Phone"
        required
        pattern="[0-9()#&+*-=.]+"
        title="Only numbers and phone characters (#, -, *, etc) are accepted."
        className={field}
      />
      <input name="email" type="email" placeholder="Email" aria-label="Email" required className={field} />
      <textarea name="message" rows={4} placeholder="Message" aria-label="Message" className={`${field} h-[95px]! rounded-[3px] px-[14px] py-[5px]!`} />
      <label className="block pr-[15px] text-[14.592px] leading-[28px] text-body md:pr-0 md:text-base">
        <input type="checkbox" name="sms_consent" className="relative -top-[5px] mr-1 h-[13px] w-[13px] align-middle" /> I accept to receive calls
        and/or text messages from Fiona Solutions Inc regarding account notifications and marketing. Message and data rates
        may apply. Reply STOP to opt out.{" "}
        <a href="/privacy-policy" className="text-brand">Privacy Policy</a> |{" "}
        <a href="/terms-conditions" className="text-brand">Terms and Conditions</a>
      </label>
      <button
        type="submit"
        className="mt-[3px]! h-[54px] w-full rounded-[3px] border-[3px] border-brand bg-[#04acec] text-[12.768px] font-semibold text-white md:h-[55px] md:text-sm"
      >
        Send
      </button>
      {sent && <p className="!my-2.5 text-base leading-none text-[#5cb85c]">Your submission was successful.</p>}
    </form>
  );
}
