
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../data/translations";

// Styles
import styles from "./Hero.module.css";

export default function Hero() {
  const { language } = useLanguage();
  const content = translations[language].hero;

  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-title">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowRule} aria-hidden="true" />
          {content.eyebrow}
        </p>

        <h1 className={styles.title} id="hero-title">
          DEVLOG
        </h1>

        <p className={styles.projectName}>Abyss Hunters</p>

        <p className={styles.description}>{content.description}</p>

        <div className={styles.actions}>
          <a className={styles.primaryAction} href="#devlog">
            {content.action}
            <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
              <path
                d="M10 3v13M4.5 10.5 10 16l5.5-5.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      <span className={styles.scrollCue} aria-hidden="true">
        <span className={styles.scrollLine} />
      </span>
    </section>
  );
}