// Types
import type { DevlogCategory } from "../../types/DevlogEntry.ts";


// Utils
import { formatDevlogDate } from "../../utils/formatDate.ts";

// Contexts
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../data/translations";

// Components
import { TimelineEntryCard } from "../../components/TimelineEntryCard/TimelineEntryCard.tsx";

// Styles
import styles from "./Timeline.module.css";

const markerTone: Record<DevlogCategory, string> = {
  combat: styles.toneCombat,
  systems: styles.toneSystems,
  world: styles.toneWorld,
  progress: styles.toneProgress,
  gameplay: styles.toneGameplay,
};

export default function Timeline() {
  const { language } = useLanguage();
  const content = translations[language].timeline;

  return (
    <section className={styles.section} id="devlog" aria-labelledby="devlog-title">
      <div className={styles.inner}>
        <header className={styles.heading}>
          <p className={styles.kicker}>{content.header}</p>
          <h2 className={styles.title} id="devlog-title">
            {content.title}
          </h2>
          <p className={styles.lead}>
            {content.description}
          </p>
        </header>

        <ol className={styles.list}>
          {content.entries.map((entry, index) => (
            <li
              key={entry.id}
              className={[styles.item, index % 2 === 0 ? styles.itemLeft : styles.itemRight].join(" ")}
            >
              <div className={[styles.marker, markerTone[entry.category]].join(" ")}>
                <time className={styles.markerDate} dateTime={entry.date}>
                  {formatDevlogDate(entry.date, language)}
                </time>
                <span className={styles.markerDot} aria-hidden="true" />
              </div>

              <div className={styles.cardSlot}>
                <TimelineEntryCard entry={entry} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}