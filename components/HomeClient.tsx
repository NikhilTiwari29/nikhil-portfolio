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
import Card3D from "@/components/ui/Card3D";
import MotionEffects from "@/components/ui/MotionEffects";
import { PROFILE } from "@/lib/portfolio/profile";

export default function HomeClient() {
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
    // Start playback in the same user-gesture task before React state updates.
    // Mobile Chrome only allows unmuted play when play() runs synchronously on tap/click.
    startVideoRef.current?.();
    window.setTimeout(() => setShowGate(false), 450);
  }, []);

  return (
    <>
      {showGate && <PortfolioGate onEnter={handleEnter} />}
      <MotionEffects />
      <SiteNav />
      <VideoIntro onRegisterStart={registerVideoStart} />
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
              <Card3D
                key={label}
                data-reveal="metric"
                intensity={0.55}
                className="rounded-md border border-white/[0.06] bg-[rgba(12,14,18,0.55)] px-3 py-3 sm:px-4 sm:py-3.5"
              >
                <p className="m-0 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  {label}
                </p>
                <p className="mt-1 font-[family-name:var(--font-syne)] text-sm font-bold text-[var(--text-primary)] sm:text-base">
                  {value}
                </p>
              </Card3D>
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
