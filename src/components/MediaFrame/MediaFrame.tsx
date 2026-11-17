
import { useEffect, useRef } from "react";

// Types
import type { DevlogMedia } from "../../types/DevlogEntry.ts";

// Styles
import styles from "./MediaFrame.module.css";

type MediaFrameProps = {
  media: DevlogMedia;
};

export default function MediaFrame({ media }: MediaFrameProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || media.type !== "video") return;

    let isInViewport = false;

    // Controls playback based on visibility and tab state.
    const updatePlayback = () => {
      const isPageVisible = document.visibilityState === "visible";

      if (isInViewport && isPageVisible) {
        video.play().catch((error) => {
          if (error.name !== "AbortError") {
            console.warn("Video playback failed:", error);
          }
        });
      } else {
        video.pause();
      }
    };

    // Detects when the video enters or leaves the viewport.
    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewport =
          entry.isIntersecting && entry.intersectionRatio >= 0.25;

        updatePlayback();
      },
      {
        threshold: [0, 0.25],
      }
    );

    // Detects when the user changes browser tabs.
    const handleVisibilityChange = () => {
      updatePlayback();
    };

    observer.observe(video);

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    // Cleanup.
    return () => {
      observer.disconnect();

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );

      video.pause();
    };
  }, [media.type, media.src]);

  const visual = (
    <span className={styles.visual}>
      {media.type === "video" ? (
        <video
          ref={videoRef}
          src={media.src}
          className={styles.image}
          muted
          loop
          playsInline
          preload="none"
          aria-label={media.alt || "Gameplay footage"}
        />
      ) : (
        <img
          src={media.src}
          alt={media.alt}
          className={styles.image}
          loading="lazy"
        />
      )}
    </span>
  );

  return (
    <figure className={styles.frame}>
      {media.href ? (
        <a
          className={styles.mediaLink}
          href={media.href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${media.alt} — abrir mídia`}
        >
          {visual}
        </a>
      ) : (
        visual
      )}
    </figure>
  );
}
