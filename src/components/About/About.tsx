
// Language
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../data/translations";

// Styles
import styles from "./About.module.css";

export default function About() {
  const { language } = useLanguage();
  const content = translations[language].about;

  return (
    <section className={styles.section} id="about" aria-labelledby="about-title">
      <div className={styles.inner}>
        <div className={styles.text}>
          <p className={styles.kicker}>{content.about}</p>
          <h2 className={styles.title} id="about-title">
            {/* Um mundo construído sobre o abismo */}
            {content.title}
          </h2>
          <p className={styles.paragraph}>
            Abyss Hunters é um jogo online multiplayer Action RPG inspirado em Dauntless e Monster Hunter. Este
            devlog registra, atualização após atualização, o que está sendo construído: os sistemas,
            as mecânicas e as decisões que dão forma à descida.
          </p>
        </div>

        <dl className={styles.highlights}>
          {content.highlights.map((item) => (
            <div className={styles.highlight} key={item.label}>
              <dt className={styles.highlightLabel}>{item.label}</dt>
              <dd className={styles.highlightValue}>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}