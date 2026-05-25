"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  HERO_CONTENT,
  HERO_END_TRIM,
  HERO_POSTER_SRC,
  HERO_VIDEO_SRC,
  SCROLL_TARGET_ID,
} from "@/lib/cinematic/config";
import styles from "./VideoIntro.module.css";

type HeroPhase = "playing" | "paused" | "ended";

function IconPlay() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5.14v13.72L19 12 8 5.14z" />
    </svg>
  );
}

function IconPause() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" />
    </svg>
  );
}

function IconVolumeOn() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M11 5 6 9H3v6h3l5 4V5z" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7M18 6a8 8 0 0 1 0 12" strokeLinecap="round" />
    </svg>
  );
}

function IconVolumeOff() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M11 5 6 9H3v6h3l5 4V5z" />
      <path d="m16 9 5 6M21 9l-5 6" strokeLinecap="round" />
    </svg>
  );
}

function applyVideoMute(video: HTMLVideoElement, muted: boolean) {
  video.muted = muted;
  video.defaultMuted = muted;
  if (muted) {
    video.setAttribute("muted", "");
  } else {
    video.removeAttribute("muted");
  }
}

type VideoIntroProps = {
  enabled?: boolean;
  onRegisterStart?: (start: () => void) => void;
};

export default function VideoIntro({ enabled = false, onRegisterStart }: VideoIntroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoStageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const phaseRef = useRef<HeroPhase>("playing");
  const hasPlayedRef = useRef(false);
  const userChoseMuteRef = useRef(false);
  const firstNameRef = useRef<HTMLParagraphElement>(null);
  const lastNameRef = useRef<HTMLSpanElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const scrollRef = useRef<HTMLButtonElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);

  const [phase, setPhase] = useState<HeroPhase>("playing");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasVisual, setHasVisual] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const showPoster = phase === "paused" || phase === "ended";

  const setPhaseSync = useCallback((next: HeroPhase) => {
    phaseRef.current = next;
    setPhase(next);
  }, []);

  const applyMutePreference = useCallback((video: HTMLVideoElement) => {
    if (userChoseMuteRef.current) {
      applyVideoMute(video, true);
      setIsMuted(true);
    } else {
      applyVideoMute(video, false);
      video.volume = 1;
      setIsMuted(false);
    }
  }, []);

  const playVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video || phaseRef.current === "ended") return;

    video.loop = false;
    video.removeAttribute("loop");
    applyMutePreference(video);

    void video.play().then(
      () => {
        setIsPlaying(true);
        setHasVisual(true);
      },
      () => setIsPlaying(false),
    );
  }, [applyMutePreference]);

  const pauseVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    setPhaseSync("paused");
    setIsPlaying(false);
  }, [setPhaseSync]);

  const startHeroPlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    hasPlayedRef.current = false;
    setPhaseSync("playing");
    playVideo();
  }, [playVideo, setPhaseSync]);

  const replayFromStart = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    hasPlayedRef.current = false;
    video.currentTime = 0;
    setPhaseSync("playing");
    playVideo();
  }, [playVideo, setPhaseSync]);

  const showPosterOnEnd = useCallback(() => {
    const video = videoRef.current;
    if (!video || phaseRef.current === "ended") return;

    video.loop = false;
    video.removeAttribute("loop");
    video.pause();

    if (video.duration && Number.isFinite(video.duration)) {
      video.currentTime = Math.max(0, video.duration - HERO_END_TRIM);
    }

    setPhaseSync("ended");
    setIsPlaying(false);
  }, [setPhaseSync]);

  useEffect(() => {
    onRegisterStart?.(startHeroPlayback);
  }, [onRegisterStart, startHeroPlayback]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.loop = false;
    video.removeAttribute("loop");

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onVolumeChange = () => setIsMuted(video.muted);

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("volumechange", onVolumeChange);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("volumechange", onVolumeChange);
    };
  }, [enabled]);

  useEffect(() => {
    const img = new Image();
    img.src = HERO_POSTER_SRC;
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !hasVisual || phaseRef.current !== "playing") return;

    const onTimeUpdate = () => {
      if (phaseRef.current !== "playing") return;

      const { duration, currentTime } = video;
      if (!duration || !Number.isFinite(duration)) return;

      if (currentTime > 0.4) hasPlayedRef.current = true;
      if (hasPlayedRef.current && currentTime >= duration - HERO_END_TRIM) {
        showPosterOnEnd();
      }
    };

    video.addEventListener("timeupdate", onTimeUpdate);
    return () => video.removeEventListener("timeupdate", onTimeUpdate);
  }, [hasVisual, phase, showPosterOnEnd]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.1,
      });

      tl.to(heroRef.current, {
        opacity: 1,
        duration: 1.2,
        ease: "power2.inOut",
      });

      if (videoStageRef.current && !reducedMotion) {
        tl.fromTo(
          videoStageRef.current,
          { opacity: 0.85, scale: 1.02 },
          { opacity: 1, scale: 1, duration: 1.6, ease: "power2.out" },
          0,
        );
      }

      if (!reducedMotion) {
        tl.to(firstNameRef.current, { opacity: 1, y: 0, duration: 1.1 }, "-=0.9")
          .to(lastNameRef.current, { opacity: 1, y: 0, duration: 1.1 }, "-=0.9")
          .to(roleRef.current, { opacity: 1, y: 0, duration: 0.95 }, "-=0.8")
          .fromTo(
            controlsRef.current,
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.85 },
            "-=0.7",
          )
          .to(scrollRef.current, { opacity: 1, duration: 0.8 }, "-=0.5");
      } else {
        gsap.set(
          [
            firstNameRef.current,
            lastNameRef.current,
            roleRef.current,
            controlsRef.current,
            scrollRef.current,
          ],
          { opacity: 1, y: 0 },
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (phaseRef.current === "ended") {
      replayFromStart();
      return;
    }

    if (phaseRef.current === "playing" && !video.paused) {
      pauseVideo();
      return;
    }

    setPhaseSync("playing");
    playVideo();
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.muted || userChoseMuteRef.current) {
      userChoseMuteRef.current = false;
      applyVideoMute(video, false);
      video.volume = 1;
      setIsMuted(false);
      return;
    }

    userChoseMuteRef.current = true;
    applyVideoMute(video, true);
    setIsMuted(true);
  };

  const onVideoLoaded = () => {
    const video = videoRef.current;
    if (!video) return;
    video.loop = false;
    video.removeAttribute("loop");
    setHasVisual(true);
    setVideoError(false);
  };

  const scrollToNext = () => {
    document.getElementById(SCROLL_TARGET_ID)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const onVideoError = () => {
    setVideoError(true);
    setHasVisual(false);
    setIsPlaying(false);
  };

  const showFallback = !hasVisual && !videoError;

  return (
    <section className={styles.wrapper} aria-label="Cinematic introduction">
      <div className={styles.sticky}>
        <div ref={heroRef} className={styles.hero}>
          <div
            ref={videoStageRef}
            className={`${styles.videoStage} ${showPoster ? styles.videoStageFinished : ""}`}
          >
            {showFallback && <div className={styles.videoFallback} aria-hidden />}

            <video
              ref={videoRef}
              className={styles.videoForeground}
              src={HERO_VIDEO_SRC}
              playsInline
              preload="auto"
              suppressHydrationWarning
              disablePictureInPicture
              onLoadedData={onVideoLoaded}
              onPlaying={onVideoLoaded}
              onEnded={showPosterOnEnd}
              onError={onVideoError}
            />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_POSTER_SRC}
              alt=""
              className={`${styles.videoPoster} ${showPoster ? styles.videoPosterVisible : ""}`}
              aria-hidden
            />
          </div>

          <div className={styles.ambientGlow} aria-hidden />
          <div className={styles.gradientTop} aria-hidden />
          <div className={styles.gradientVignette} aria-hidden />
          <div className={styles.gradientWarm} aria-hidden />
          <div className={styles.gradientBlue} aria-hidden />

          <div ref={controlsRef} className={styles.controls}>
            <button
              type="button"
              className={styles.glassButton}
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              aria-label={
                phase === "playing" && isPlaying
                  ? "Pause video"
                  : phase === "paused"
                    ? "Resume video"
                    : "Replay video"
              }
            >
              {phase === "playing" && isPlaying ? <IconPause /> : <IconPlay />}
            </button>
            <button
              type="button"
              className={styles.glassButton}
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <IconVolumeOff /> : <IconVolumeOn />}
            </button>
          </div>

          <div
            className={`${styles.content} pointer-events-none absolute inset-0 z-[5] flex flex-col justify-end px-4 pb-[calc(2.75rem+env(safe-area-inset-bottom,0px))] sm:px-6 sm:pb-[calc(3.25rem+env(safe-area-inset-bottom,0px))] md:px-8 md:pb-[calc(3.75rem+env(safe-area-inset-bottom,0px))] lg:px-10 lg:pb-[calc(4.25rem+env(safe-area-inset-bottom,0px))]`}
          >
            <div className="pointer-events-auto w-full max-w-4xl md:max-w-5xl lg:max-w-6xl">
              <h1 className="m-0 flex flex-col gap-0 leading-[0.86] tracking-[-0.035em]">
                <span
                  ref={firstNameRef}
                  className={`${styles.nameLine} font-[family-name:var(--font-syne)] text-[clamp(2.75rem,14vw,5rem)] font-extrabold uppercase text-[#fff8f0] sm:text-[clamp(3rem,12vw,6.5rem)] md:text-[clamp(3.5rem,10vw,7.5rem)] lg:text-[clamp(4rem,9vw,9rem)]`}
                >
                  {HERO_CONTENT.firstName}
                </span>
                <span
                  ref={lastNameRef}
                  className={`${styles.nameLine} ${styles.nameLineAccent} font-[family-name:var(--font-syne)] text-[clamp(2.75rem,14vw,5rem)] font-extrabold uppercase sm:text-[clamp(3rem,12vw,6.5rem)] md:text-[clamp(3.5rem,10vw,7.5rem)] lg:text-[clamp(4rem,9vw,9rem)]`}
                >
                  {HERO_CONTENT.lastName}
                </span>
              </h1>
              <p
                ref={roleRef}
                className={`${styles.role} mt-4 max-w-xl pl-0.5 font-sans text-[0.9rem] leading-relaxed tracking-wide text-[rgba(210,220,235,0.68)] sm:mt-5 sm:max-w-2xl sm:text-base md:mt-6 md:text-[1.05rem] lg:max-w-3xl`}
              >
                {HERO_CONTENT.role}
              </p>
            </div>
          </div>

          <button
            ref={scrollRef}
            type="button"
            className={styles.scrollIndicator}
            onClick={(e) => {
              e.stopPropagation();
              scrollToNext();
            }}
            aria-label="Scroll to next section"
          >
            <span>Scroll</span>
            <span className={styles.scrollLine} aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
}
