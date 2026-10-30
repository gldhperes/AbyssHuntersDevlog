// Components
import BrandMark from "../components/BrandMark/BrandMark";

// Data
import siteData from "../../data/siteData";

// Styles
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <a className={styles.brand} href="#top">
            <BrandMark className={styles.mark} />
            <span className={styles.brandName}>{siteData.brandName}</span>
          </a>
          <p className={styles.tagline}>Abyss Hunters — Em desenvolvimento</p>
        </div>

        <nav className={styles.nav} aria-label="Navegação do rodapé">
          <ul className={styles.navList}>
            {siteData.nav.map((item) => (
              <li key={item.href}>
                <a className={styles.navLink} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
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
        <p className={styles.meta}>Diário de desenvolvimento · {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}