"use client";

import { useEffect } from "react";
import { getSkillIcon } from "@/lib/portfolio/skill-icons";
import { PROFILE } from "@/lib/portfolio/profile";

const skills = ["Java 21", "Spring Boot", "Kafka", "Apache Camel", "Microservices", "REST APIs", "AWS", "MSSQL", "Redis", "Spring AI"];
const achievements = [
  "Delivered 15+ production REST APIs for LMS and Supply Chain Finance workflows at Vayana Networks.",
  "Built SCF disbursement and bulk repayment services processing 1,000+ loan records per invoice or batch via Kafka.",
  "Developed reusable Apache Camel flows for multi-bank CBS integrations with the LMS → Kafka → Camel → CBS pipeline.",
  "Implemented loan servicing workflows and optimized MSSQL queries, improving API response times by ~30%.",
] as const;

type RecruiterViewProps = { isOpen: boolean; onClose: () => void };

export default function RecruiterViewSection({ isOpen, onClose }: RecruiterViewProps) {
  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", closeOnEscape); };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center bg-[#030806]/80 p-3 backdrop-blur-md sm:p-6" role="dialog" aria-modal="true" aria-labelledby="recruiter-view-heading" onMouseDown={onClose}>
      <section className="max-h-[calc(100dvh-1.5rem)] w-full max-w-6xl overflow-y-auto rounded-2xl border border-[rgba(171,123,255,0.34)] bg-[#0b1210] shadow-2xl sm:max-h-[calc(100dvh-3rem)]" onMouseDown={(event) => event.stopPropagation()}>
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-white/[0.1] bg-[#101614]/95 px-5 py-4 backdrop-blur sm:px-8">
          <div><p className="m-0 text-xs font-semibold uppercase tracking-[0.2em] text-[#d6ceff]">Available for work</p><h2 id="recruiter-view-heading" className="mt-1 font-[family-name:var(--font-syne)] text-xl font-bold text-white">Quick View for Recruiters</h2></div>
          <button type="button" onClick={onClose} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.18] text-xl text-white transition hover:bg-white/[0.1]" aria-label="Close recruiter view">×</button>
        </div>
        <div className="grid gap-9 p-6 sm:p-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-[var(--text-muted)]">Everything you need in 60 seconds.</p>
            <h3 className="mt-6 font-[family-name:var(--font-syne)] text-lg font-bold text-white">Profile Snapshot</h3>
            <dl className="mt-5 grid gap-px overflow-hidden rounded-xl border border-white/[0.1] bg-white/[0.1] sm:grid-cols-2">
              {[["Current role", "Software Engineer — Java Backend @ Vayana Networks"], ["Experience", "4+ Years Backend Engineering"], ["Primary stack", "Java 21 · Spring Boot · Kafka · Apache Camel · AWS"], ["Production APIs", "15+ REST APIs for LMS & SCF"], ["Location", "Surat, India · Open to any location"], ["Status", "Actively Seeking New Role"]].map(([label, value]) => <div key={label} className="bg-[rgba(9,15,14,0.78)] p-4"><dt className="text-[0.66rem] font-semibold uppercase tracking-[0.15em] text-white/45">{label}</dt><dd className="mt-1.5 text-sm font-medium leading-6 text-white">{value}</dd></div>)}
            </dl>
            <h3 className="mt-8 font-[family-name:var(--font-syne)] text-lg font-bold text-white">Core Skills</h3>
            <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">{skills.map((skill) => {
              const { icon: Icon, color } = getSkillIcon(skill);
              return (
                <li key={skill} className="inline-flex items-center gap-1.5 rounded-md border border-[rgba(171,123,255,0.25)] bg-[rgba(171,123,255,0.09)] px-2.5 py-1.5 text-xs font-medium text-[#ded9ff]">
                  <Icon className="h-3.5 w-3.5 shrink-0" style={{ color }} aria-hidden />
                  {skill}
                </li>
              );
            })}</ul>
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-white">Key Achievements</h3>
            <ul className="mt-5 grid list-none gap-3 p-0">{achievements.map((achievement) => <li key={achievement} className="border-l-2 border-[#9b8cff] bg-white/[0.025] py-3 pl-4 pr-3 text-sm leading-6 text-[var(--text-muted)]">{achievement}</li>)}</ul>
            <div className="mt-8 flex flex-wrap gap-3">
              {PROFILE.resumeUrl ? <a href={PROFILE.resumeUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[#9b8cff] px-4 py-2.5 text-sm font-semibold text-[#171125] no-underline transition hover:bg-[#b9adff]">Download Resume</a> : null}
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/[0.18] px-4 py-2.5 text-sm font-semibold text-white no-underline transition hover:bg-white/[0.07]">LinkedIn Profile</a>
              <a href={`mailto:${PROFILE.email}`} className="rounded-lg px-3 py-2.5 text-sm font-semibold text-[#d6ceff] no-underline hover:text-white">Send Email</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
