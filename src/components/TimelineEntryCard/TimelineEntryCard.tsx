// Types
import type { DevlogCategory, DevlogEntry } from "../../types/DevlogEntry.ts";

// Data
import { devlogCategoryLabels } from "../../data/devlogData.ts";

// Utils
import { formatDevlogDate } from "../../utils/formatDate.ts";

// Components
import MediaFrame from "../../components/MediaFrame/MediaFrame.tsx";

// Styles
import styles from "./TimelineEntryCard.module.css";

const categoryTone: Record<DevlogCategory, string> = {
  combat: styles.toneCombat,
  systems: styles.toneSystems,
  world: styles.toneWorld,
  progress: styles.toneProgress,
};

type TimelineEntryCardProps = {
  entry: DevlogEntry;
};

export function TimelineEntryCard({ entry }: TimelineEntryCardProps) {
  const titleId = `entry-title-${entry.id}`;

  return (
    <article className={[styles.card, categoryTone[entry.category]].join(" ")} aria-labelledby={titleId}>
      <span className={styles.edge} aria-hidden="true" />

      <header className={styles.header}>
        <p className={styles.category}>
          <span className={styles.categoryDot} aria-hidden="true" />
          {devlogCategoryLabels[entry.category]}
        </p>
        <time className={styles.date} dateTime={entry.date}>
          {formatDevlogDate(entry.date)}
        </time>
      </header>

      <h3 className={styles.title} id={titleId}>
        {entry.title}
      </h3>

      {entry.description ? <p className={styles.description}>{entry.description}</p> : null}

      {entry.media ? <MediaFrame media={entry.media} /> : null}

      {entry.bulletPoints.length > 0 ? (
        <ul className={styles.points}>
          {entry.bulletPoints.map((point) => (
            <li className={styles.point} key={point}>
              {point}
            </li>
          ))}
        </ul>
      ) : null}

      {entry.action ? (
        <a
          className={styles.action}
          href={entry.action.href}
          target="_blank"
          rel="noreferrer noopener"
        >
          {entry.action.label}
          <span className={styles.actionArrow} aria-hidden="true">
            →
          </span>
        </a>
      ) : null}
    </article>
  );
}