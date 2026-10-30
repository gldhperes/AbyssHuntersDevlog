// Types
import type { DevlogCategory, DevlogEntry } from "../../types/DevlogEntry.ts";

// Utils
import { formatDevlogDate } from "../../utils/formatDate.ts";

// Components
import { TimelineEntryCard } from "../../components/TimelineEntryCard/TimelineEntryCard.tsx";

// Styles
import styles from "./Timeline.module.css";

const markerTone: Record<DevlogCategory, string> = {
  combat: styles.toneCombat,
  systems: styles.toneSystems,
  world: styles.toneWorld,
  progress: styles.toneProgress,
};

type TimelineProps = {
  entries: DevlogEntry[];
};

export default function Timeline({ entries }: TimelineProps) {
  return (
    <section className={styles.section} id="devlog" aria-labelledby="devlog-title">
      <div className={styles.inner}>
        <header className={styles.heading}>
          <p className={styles.kicker}>Histórico do projeto</p>
          <h2 className={styles.title} id="devlog-title">
            Atualizações
          </h2>
          <p className={styles.lead}>
            Cada entrada registra o que foi construído, ajustado e aprendido durante o
            desenvolvimento de Abyss Hunters.
          </p>
        </header>

        <ol className={styles.list}>
          {entries.map((entry, index) => (
            <li
              key={entry.id}
              className={[styles.item, index % 2 === 0 ? styles.itemLeft : styles.itemRight].join(" ")}
            >
              <div className={[styles.marker, markerTone[entry.category]].join(" ")}>
                <time className={styles.markerDate} dateTime={entry.date}>
                  {formatDevlogDate(entry.date)}
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