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
  /** True after the user clicks “Enter portfolio” (unlocks sound via user gesture). */
  enabled?: boolean;
  onRegisterStart?: (start: () => void) => void;
};

export default function VideoIntro({ enabled = false, onRegisterStart }: VideoIntroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoStageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasPlayedRef = useRef(false);
  const autoplayAttemptedRef = useRef(false);
  /** Only true when the user explicitly pressed mute — not browser autoplay policy. */
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

  const forceSoundOn = useCallback((video: HTMLVideoElement) => {
    if (userChoseMuteRef.current) return;
    applyVideoMute(video, false);
    video.volume = 1;
    setIsMuted(false);
  }, []);

  const playWithSound = useCallback(
    (video: HTMLVideoElement) => {
      video.loop = false;
      video.volume = 1;

      if (userChoseMuteRef.current) {
        applyVideoMute(video, true);
        setIsMuted(true);
      } else {
        forceSoundOn(video);
      }

      return video.play();
    },
    [forceSoundOn],
  );

  const startHeroPlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!video.paused && !video.muted && phase === "playing") {
      setIsPlaying(true);
      setHasVisual(true);
      return;
    }

    setPhase("playing");
    userChoseMuteRef.current = false;

    const run = (attempt: number) => {
      forceSoundOn(video);
      const p = playWithSound(video);
      if (!p) return;

      void p.then(
        () => {
          setIsPlaying(true);
          setHasVisual(true);
          forceSoundOn(video);
        },
        () => {
          if (attempt < 4) {
            window.setTimeout(() => run(attempt + 1), attempt * 80);
            return;
          }
          applyVideoMute(video, true);
          void video.play().then(
            () => {
              setIsPlaying(true);
              setHasVisual(true);
              forceSoundOn(video);
            },
            () => setIsPlaying(false),
          );
        },
      );
    };

    run(0);
  }, [forceSoundOn, phase, playWithSound]);

  const replayFromStart = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    hasPlayedRef.current = false;
    autoplayAttemptedRef.current = false;
    userChoseMuteRef.current = false;
    setPhase("playing");
    video.currentTime = 0;
    startHeroPlayback();
  }, [startHeroPlayback]);

  const showPosterOnEnd = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    setPhase("ended");
    setIsPlaying(false);
  }, []);

  const ensureAutoplay = useCallback(() => {
    const video = videoRef.current;
    if (!enabled || !video || phase !== "playing") return;

    if (!video.paused) {
      autoplayAttemptedRef.current = true;
      setIsPlaying(true);
      setHasVisual(true);
      forceSoundOn(video);
      return;
    }

    if (autoplayAttemptedRef.current) return;
    autoplayAttemptedRef.current = true;
    startHeroPlayback();
  }, [enabled, forceSoundOn, phase, startHeroPlayback]);

  const onVideoPlaying = useCallback(() => {
    const video = videoRef.current;
    if (!video || phase !== "playing") return;

    setHasVisual(true);
    setVideoError(false);
    setIsPlaying(true);
    video.loop = false;
    forceSoundOn(video);
  }, [forceSoundOn, phase]);

  useEffect(() => {
    onRegisterStart?.(startHeroPlayback);
  }, [onRegisterStart, startHeroPlayback]);

  useEffect(() => {
    if (!enabled) return;
    const video = videoRef.current;
    if (video && video.paused) {
      startHeroPlayback();
    }
  }, [enabled, startHeroPlayback]);

  useEffect(() => {
    const img = new Image();
    img.src = HERO_POSTER_SRC;
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !hasVisual || phase !== "playing") return;

    const onTimeUpdate = () => {
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
    const onPageShow = () => {
      if (!enabled) return;
      replayFromStart();
    };

    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, [enabled, replayFromStart]);

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
          .to(controlsRef.current, { opacity: 1, y: 0, duration: 0.85 }, "-=0.7")
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

  const togglePlay = (e: React.PointerEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (phase === "playing" && isPlaying) {
      video.pause();
      setPhase("paused");
      setIsPlaying(false);
      return;
    }

    if (phase === "paused") {
      setPhase("playing");
      if (!userChoseMuteRef.current) forceSoundOn(video);
      else applyVideoMute(video, true);
      void video.play().then(
        () => setIsPlaying(true),
        () => setIsPlaying(false),
      );
      return;
    }

    replayFromStart();
  };

  const onVolumePointerDown = (e: React.PointerEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.muted || userChoseMuteRef.current) {
      userChoseMuteRef.current = false;
      forceSoundOn(video);
      void video.play().then(() => setIsPlaying(true));
      return;
    }

    userChoseMuteRef.current = true;
    applyVideoMute(video, true);
    setIsMuted(true);
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
              autoPlay={enabled}
              playsInline
              preload="auto"
              suppressHydrationWarning
              disablePictureInPicture
              onPlaying={onVideoPlaying}
              onLoadedData={ensureAutoplay}
              onCanPlay={ensureAutoplay}
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
              onPointerDown={togglePlay}
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
              onPointerDown={onVolumePointerDown}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <IconVolumeOff /> : <IconVolumeOn />}
            </button>
          </div>

          <div className={styles.content}>
            <div className={styles.copyBlock}>
              <h1 className={styles.nameStack}>
                <span ref={firstNameRef} className={styles.nameLine}>
                  {HERO_CONTENT.firstName}
                </span>
                <span
                  ref={lastNameRef}
                  className={`${styles.nameLine} ${styles.nameLineAccent}`}
                >
                  {HERO_CONTENT.lastName}
                </span>
              </h1>
              <p ref={roleRef} className={styles.role}>
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
