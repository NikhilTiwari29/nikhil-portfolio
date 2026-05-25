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
      <SiteNav />
      <VideoIntro enabled={hasEntered} onRegisterStart={registerVideoStart} />
      <main className="main relative z-[2] w-full overflow-x-hidden">
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ResumeSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
