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

export default function VideoIntro() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoStageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasAutoStartedRef = useRef(false);
  const isHoldingRef = useRef(false);
  const hasPlayedRef = useRef(false);
  const firstNameRef = useRef<HTMLSpanElement>(null);
  const lastNameRef = useRef<HTMLSpanElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const scrollRef = useRef<HTMLButtonElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const soundBadgeRef = useRef<HTMLButtonElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const [showSoundBadge, setShowSoundBadge] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [awaitingSoundGesture, setAwaitingSoundGesture] = useState(false);

  const syncMuteState = useCallback(() => {
    const video = videoRef.current;
    if (!video || hasFinished) return;
    setIsMuted(video.muted);
  }, [hasFinished]);

  const showPosterOnEnd = useCallback(() => {
    const video = videoRef.current;
    if (!video || isHoldingRef.current) return;
    isHoldingRef.current = true;

    video.pause();
    video.muted = true;
    setIsPlaying(false);
    setIsMuted(true);
    setHasFinished(true);
    setShowSoundBadge(false);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = HERO_POSTER_SRC;
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoReady || hasFinished) return;

    const onTimeUpdate = () => {
      const { duration, currentTime } = video;
      if (!duration || !Number.isFinite(duration)) return;
      if (currentTime > 0.4) hasPlayedRef.current = true;
      if (
        hasPlayedRef.current &&
        currentTime >= duration - HERO_END_TRIM
      ) {
        showPosterOnEnd();
      }
    };

    video.addEventListener("timeupdate", onTimeUpdate);
    return () => video.removeEventListener("timeupdate", onTimeUpdate);
  }, [hasFinished, videoReady, showPosterOnEnd]);

  const startUnmutedPlayback = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    video.loop = false;
    video.volume = 1;
    setShowSoundBadge(false);
    setAwaitingSoundGesture(false);

    const playWithSound = async () => {
      video.muted = false;
      setIsMuted(false);
      await video.play();
    };

    try {
      await playWithSound();
      setIsPlaying(true);
      sessionStorage.setItem("hero-audio-unlocked", "1");
      return;
    } catch {
      /* direct unmuted play blocked — try muted start then unmute */
    }

    try {
      video.muted = true;
      await video.play();
      video.muted = false;
      setIsMuted(false);
      setIsPlaying(true);
      sessionStorage.setItem("hero-audio-unlocked", "1");
      return;
    } catch {
      /* still blocked */
    }

    /* Last resort: play muted so the video is still visible */
    try {
      video.muted = true;
      await video.play();
      setIsPlaying(true);
      setIsMuted(true);
      setAwaitingSoundGesture(true);
      setShowSoundBadge(true);
    } catch {
      setIsPlaying(false);
    }
  }, []);

  const enableSoundAfterBlock = useCallback(async () => {
    if (hasFinished) return;
    await startUnmutedPlayback();
  }, [hasFinished, startUnmutedPlayback]);

  const tryInitPlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video || hasAutoStartedRef.current || isHoldingRef.current) return;
    if (video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return;

    hasAutoStartedRef.current = true;
    hasPlayedRef.current = false;
    isHoldingRef.current = false;
    video.currentTime = 0;
    setVideoReady(true);
    setHasFinished(false);
    void startUnmutedPlayback();
  }, [startUnmutedPlayback]);

  const setVideoElement = useCallback(
    (element: HTMLVideoElement | null) => {
      videoRef.current = element;
      if (!element) return;

      element.muted = false;
      element.defaultMuted = false;
      element.volume = 1;
      element.currentTime = 0;

      if (element.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        tryInitPlayback();
      }
    },
    [tryInitPlayback],
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onReady = () => tryInitPlayback();

    video.addEventListener("loadeddata", onReady);
    video.addEventListener("canplay", onReady);

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      tryInitPlayback();
    }

    return () => {
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("canplay", onReady);
    };
  }, [tryInitPlayback]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onVolumeChange = () => {
      if (!hasFinished) setIsMuted(video.muted);
    };

    video.addEventListener("volumechange", onVolumeChange);
    return () => video.removeEventListener("volumechange", onVolumeChange);
  }, [hasFinished, videoReady]);

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

  useEffect(() => {
    if (!showSoundBadge || !soundBadgeRef.current) return;

    const timer = window.setTimeout(() => {
      gsap.to(soundBadgeRef.current, {
        opacity: 0,
        y: -8,
        duration: 0.7,
        ease: "power2.inOut",
        onComplete: () => setShowSoundBadge(false),
      });
    }, 6000);

    return () => window.clearTimeout(timer);
  }, [showSoundBadge]);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (hasFinished) {
      isHoldingRef.current = false;
      hasPlayedRef.current = false;
      hasAutoStartedRef.current = false;
      video.currentTime = 0;
      setHasFinished(false);
      hasAutoStartedRef.current = true;
      await startUnmutedPlayback();
      return;
    }

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
      return;
    }

    video.muted = isMuted;
    try {
      await video.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const toggleMute = async () => {
    const video = videoRef.current;
    if (!video || hasFinished) return;

    const next = !isMuted;
    video.muted = next;
    setIsMuted(next);
    setShowSoundBadge(false);

    if (!isPlaying) {
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        /* keep paused */
      }
    }
  };

  const scrollToNext = () => {
    document.getElementById(SCROLL_TARGET_ID)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const onHeroInteract = () => {
    if (!isPlaying && !hasFinished) {
      hasAutoStartedRef.current = false;
      void tryInitPlayback();
    }
    if (awaitingSoundGesture || showSoundBadge) {
      void enableSoundAfterBlock();
    }
  };

  return (
    <section
      className={styles.wrapper}
      aria-label="Cinematic introduction"
      onClick={onHeroInteract}
    >
      <div className={styles.sticky}>
        <div ref={heroRef} className={styles.hero}>
          <div
            ref={videoStageRef}
            className={`${styles.videoStage} ${hasFinished ? styles.videoStageFinished : ""}`}
          >
            {!videoReady && <div className={styles.videoFallback} aria-hidden />}

            <video
              ref={setVideoElement}
              className={styles.videoForeground}
              src={HERO_VIDEO_SRC}
              playsInline
              preload="auto"
              disablePictureInPicture
              onEnded={showPosterOnEnd}
              onPlay={syncMuteState}
            />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_POSTER_SRC}
              alt=""
              className={`${styles.videoPoster} ${hasFinished ? styles.videoPosterVisible : ""}`}
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
              onClick={(e) => {
                e.stopPropagation();
                void togglePlay();
              }}
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <IconPause /> : <IconPlay />}
            </button>
            <button
              type="button"
              className={styles.glassButton}
              onClick={(e) => {
                e.stopPropagation();
                void toggleMute();
              }}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
              disabled={hasFinished}
            >
              {isMuted ? <IconVolumeOff /> : <IconVolumeOn />}
            </button>
          </div>

          {showSoundBadge && (
            <button
              ref={soundBadgeRef}
              type="button"
              className={styles.soundBadge}
              onClick={(e) => {
                e.stopPropagation();
                void enableSoundAfterBlock();
              }}
              aria-label="Enable sound"
            >
              Tap for sound
            </button>
          )}

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
