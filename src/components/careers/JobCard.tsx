import Image from "next/image";
import { Fragment } from "react";
import { jobIcon, type Job } from "@/content/careers";

export default function JobCard({ job }: { job: Job }) {
  return (
    <article className="rounded-xl bg-white p-5 shadow-[0_0_50px_-10px_rgba(0,0,0,0.06)] hover:shadow-[0_0_40px_0_rgba(0,0,0,0.08)]">
      <h2 className="text-2xl font-semibold leading-[1.3] text-[#444]">{job.title}</h2>
      {/* live (mobile): the job icon shrinks to 10px and sits 3px left of the padding */}
      <div className="flex items-start gap-px pt-3 md:gap-[13px]">
        <Image src={jobIcon} alt="" width={36} height={36} className="-ml-[3px] mt-[14px] h-2.5 w-2.5 md:ml-0 md:mt-0 md:h-9 md:w-9" />
        <p className="mt-1.5 text-[15px] leading-[28px] text-body">
          <strong className="font-bold">Posted On:</strong> {job.postedOn}
        </p>
      </div>
      <div className="mt-[15px] flex flex-col gap-[15px] md:mt-[13px] md:flex-row md:gap-5">
        <div className="w-[86%] text-justify text-[15px] leading-6 text-body md:w-[80.8%]">
          {job.paragraphs.map((lines, i) => (
            <p key={i} className="mb-[15px]">
              {lines.map((l, j) => (
                <Fragment key={j}>
                  {j > 0 && <br />}
                  {l.label && <strong className="font-bold">{l.label}</strong>} {l.text}
                </Fragment>
              ))}
            </p>
          ))}
        </div>
        <div className="md:-mr-1.5 md:mt-[5px] md:flex-1 md:text-right">
          {/* TODO: wire to backend — the live "Apply Now" button links to "#" (applications are sent by post/email per the listing). */}
          <a
            href="#"
            className="inline-block rounded-md bg-brand px-10 py-[15px] text-[12.768px] font-semibold capitalize leading-[12.768px] tracking-[0.5px] text-white md:text-sm md:leading-[14px]"
          >
            Apply Now
          </a>
        </div>
      </div>
    </article>
  );
}
