// import BrandMark from "@/components/BrandMark/BrandMark";
import siteData from "../../data/siteData";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <a className={styles.brand} href="#top">
                    {/* <BrandMark className={styles.mark} /> */}
                    <span className={styles.brandText}>
                        Abyss <span className={styles.brandAccent}>Hunters</span>
                    </span>
                </a>

                <nav className={styles.nav} aria-label="Navegação principal">
                    <ul className={styles.navList}>
                        {siteData.nav.map((item) => (
                            <li key={item.href}>
                                <a className={styles.navLink} href={item.href}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        {siteData.externalLink ? (
                            <li>
                                <a
                                    className={styles.externalLink}
                                    href={siteData.externalLink.href}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    {siteData.externalLink.label}
                                    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                                        <path
                                            d="M6 3h7v7M13 3 5 11"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </li>
                        ) : null}
                    </ul>
                </nav>
            </div>
        </header>
    );
}