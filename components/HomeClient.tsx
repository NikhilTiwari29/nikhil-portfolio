"use client";

import { useState } from "react";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteNav from "@/components/layout/SiteNav";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import RecruiterViewSection from "@/components/sections/RecruiterViewSection";
import ResumeSection from "@/components/sections/ResumeSection";
import SkillsSection from "@/components/sections/SkillsSection";
import MotionEffects from "@/components/ui/MotionEffects";
import { PROFILE } from "@/lib/portfolio/profile";

const metrics = [
  ["4+", "Years experience"],
  ["10+", "Services built"],
  ["6+", "AWS services"],
  ["50K+", "Loan records processed"],
] as const;

export default function HomeClient() {
  const [recruiterViewOpen, setRecruiterViewOpen] = useState(false);
  return (
    <>
      <MotionEffects />
      <SiteNav onRecruiterView={() => setRecruiterViewOpen(true)} />
      <main className="main relative z-[2] overflow-x-hidden">
        <section id="home" className="hero-shell relative isolate overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 md:px-8 md:pb-24 lg:px-10 lg:pt-40">
          <div className="hero-orb hero-orb-one" aria-hidden />
          <div className="hero-orb hero-orb-two" aria-hidden />
          <div className="relative mx-auto max-w-6xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(79,214,161,0.27)] bg-[rgba(79,214,161,0.09)] px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#a3f4cf]">
              <span className="h-2 w-2 rounded-full bg-[#4fd6a1] shadow-[0_0_12px_#4fd6a1]" />
              Open to work
            </div>
            <p className="mb-3 font-sans text-base text-[var(--text-muted)] sm:text-lg">Hi, I&apos;m</p>
            <h1 className="m-0 max-w-4xl font-[family-name:var(--font-syne)] text-[clamp(2.85rem,8vw,6.1rem)] font-extrabold leading-[0.95] tracking-[-0.065em] text-white">
              {PROFILE.name}
            </h1>
            <p className="mt-6 max-w-3xl font-[family-name:var(--font-syne)] text-[clamp(1.08rem,2.4vw,1.55rem)] font-semibold leading-tight text-[#a3f4cf]">
              Java <span className="text-white/35">·</span> Spring Boot <span className="text-white/35">·</span> Kafka <span className="text-white/35">·</span> Apache Camel <span className="text-white/35">·</span> Microservices
            </p>
            <p className="mt-6 max-w-3xl text-[1rem] leading-8 text-[var(--text-muted)] sm:text-[1.08rem]">
              {PROFILE.headline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-[#4fd6a1] px-5 py-3 font-semibold text-[#062219] no-underline transition hover:-translate-y-0.5 hover:bg-[#7aebbd]">
                View projects <span aria-hidden>→</span>
              </a>
              {PROFILE.resumeUrl ? <a href={PROFILE.resumeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-lg border border-white/20 bg-white/[0.03] px-5 py-3 font-semibold text-white no-underline transition hover:border-white/45 hover:bg-white/[0.08]">Download resume</a> : null}
              <button type="button" onClick={() => setRecruiterViewOpen(true)} className="inline-flex items-center gap-2 rounded-lg border border-[rgba(171,123,255,0.62)] bg-[rgba(155,140,255,0.17)] px-5 py-3 font-semibold text-[#e0dcff] shadow-[0_0_28px_rgba(155,140,255,0.13)] transition hover:-translate-y-0.5 hover:bg-[rgba(155,140,255,0.28)]">Recruiter View <span aria-hidden>→</span></button>
              <a href="#contact" className="inline-flex items-center rounded-lg px-4 py-3 font-semibold text-[#bdeed7] no-underline transition hover:text-white">Let&apos;s talk</a>
            </div>
            <dl className="mt-14 grid max-w-4xl grid-cols-2 border-y border-white/[0.1] sm:grid-cols-4">
              {metrics.map(([value, label]) => (
                <div key={label} className="border-b border-r border-white/[0.1] px-4 py-5 last:border-r-0 sm:border-b-0 sm:px-5 first:pl-0">
                  <dt className="order-2 mt-1 text-xs font-medium uppercase tracking-[0.13em] text-white/48">{label}</dt>
                  <dd className="m-0 font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight text-white">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <PhilosophySection />
        <EducationSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <RecruiterViewSection isOpen={recruiterViewOpen} onClose={() => setRecruiterViewOpen(false)} />
      <SiteFooter />
    </>
  );
}
