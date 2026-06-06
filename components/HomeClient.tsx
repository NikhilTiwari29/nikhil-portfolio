"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import VideoIntro from "@/components/cinematic/VideoIntro/VideoIntro";
import PortfolioGate from "@/components/PortfolioGate/PortfolioGate";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteNav from "@/components/layout/SiteNav";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ResumeSection from "@/components/sections/ResumeSection";
import SkillsSection from "@/components/sections/SkillsSection";
import MotionEffects from "@/components/ui/MotionEffects";
import { PROFILE } from "@/lib/portfolio/profile";

export default function HomeClient() {
  const [hasEntered, setHasEntered] = useState(false);
  const [showGate, setShowGate] = useState(true);
  const startVideoRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    document.body.style.overflow = showGate ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showGate]);

  const registerVideoStart = useCallback((start: () => void) => {
    startVideoRef.current = start;
  }, []);

  const handleEnter = useCallback(() => {
    setHasEntered(true);
    startVideoRef.current?.();
    window.setTimeout(() => setShowGate(false), 450);
  }, []);

  return (
    <>
      {showGate && <PortfolioGate onEnter={handleEnter} />}
      <MotionEffects />
      <SiteNav />
      <VideoIntro enabled={hasEntered} onRegisterStart={registerVideoStart} />
      <main className="main relative z-[2] w-full overflow-x-hidden">
        <section
          className="relative z-[3] border-y border-white/[0.08] bg-[#090a0f] px-4 py-5 sm:px-6 md:px-8 lg:px-10"
          aria-label="Professional snapshot"
        >
          <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-4">
            {[
              ["Experience", `${PROFILE.yearsExperience} years`],
              ["Production", "15+ REST APIs"],
              ["Performance", "~30% faster APIs"],
              ["Testing", "70+ project tests"],
            ].map(([label, value]) => (
              <div key={label} data-reveal="metric" className="border-l border-[rgba(255,138,61,0.35)] pl-3 sm:pl-4">
                <p className="m-0 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  {label}
                </p>
                <p className="mt-1 font-[family-name:var(--font-syne)] text-sm font-bold text-[var(--text-primary)] sm:text-base">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
