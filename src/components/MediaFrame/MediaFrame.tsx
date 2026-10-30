// import { Image } from "@/components/ui/image";
import type { DevlogMedia } from "../../types/DevlogEntry.ts";

// Styles
import styles from "./MediaFrame.module.css";

type MediaFrameProps = {
  media: DevlogMedia;
};

function PlayGlyph() {
  return (
    <span className={styles.playGlyph} aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M9 6.5 18 12l-9 5.5V6.5Z" fill="currentColor" />
      </svg>
    </span>
  );
}

export default function MediaFrame({ media }: MediaFrameProps) {
  const isVideo = media.type === "video";

  const visual = (
    <span className={styles.visual}>
      {/* <Image src={media.src} alt={media.alt} className={styles.image} fittingType="fill" /> */}
      {isVideo ? (
        <span className={styles.videoOverlay}>
          {media.href ? <PlayGlyph /> : null}
          <span className={styles.videoBadge}>{media.href ? "Reproduzir" : "Vídeo em produção"}</span>
        </span>
      ) : null}
    </span>
  );

  return (
    <figure className={styles.frame}>
      {isVideo && media.href ? (
        <a
          className={styles.mediaLink}
          href={media.href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${media.alt} — abrir vídeo`}
        >
          {visual}
        </a>
      ) : (
        visual
      )}
    </figure>
  );
}