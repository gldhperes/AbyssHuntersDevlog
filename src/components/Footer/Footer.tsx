// Components
import BrandMark from "../components/BrandMark/BrandMark";

// Data
import siteData from "../../data/siteData";


// Language
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../data/translations";

// Styles
import styles from "./Footer.module.css";

export default function Footer() {
  const { language } = useLanguage();
  const content = translations[language].footer;
  const contentNav = translations[language].nav;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <a className={styles.brand} href="#top">
            <BrandMark className={styles.mark} />
            <span className={styles.brandName}>Abyss Hunters</span>
          </a>
          <p className={styles.tagline}> — {content.development}</p>
        </div>

        <nav className={styles.nav} aria-label="Navegação do rodapé">
          <ul className={styles.navList}>
            <li >
              <a className={styles.navLink} href="#devlog">
                DEVLOG
              </a>
            </li>

            <li>
              <a className={styles.navLink} href="#about">
                {contentNav.about}
              </a>
            </li>


            {siteData.socialLinks.map((item) => (
              <li key={item.href}>
                <a className={styles.navLink} href={item.href} target="_blank" rel="noreferrer noopener">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={styles.inner}>
        <p className={styles.meta}>{content.eyebrow} · {new Date().getFullYear()}-{content.present}</p>
      </div>
    </footer>
  );
}