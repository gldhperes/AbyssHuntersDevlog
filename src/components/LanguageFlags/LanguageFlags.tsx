// Images
import BrazilFlag from "../../assets/Flag_of_Brazil.webp"
import EUAFlag from "../../assets/Flag_of_the_United_States.webp"

// Context
import { useLanguage, type Language } from "../../contexts/LanguageContext";

// Styles
import styles from "./LanguageFlags.module.css";

const languages: { value: Language; label: string; image: string; }[] = [
    {
        value: "pt-BR",
        label: "Português",
        image: BrazilFlag,
    },
    {
        value: "en-US",
        label: "English",
        image: EUAFlag,
    },
];

export default function LanguageFlags() {
    const { language, setLanguage } = useLanguage();

    return (
        <div
            className={styles.languageFlags}
            role="group"
            aria-label="Selecionar idioma"
        >
            {languages.map((item) => {
                const isActive = language === item.value;

                return (
                    <button
                        key={item.value}
                        type="button"
                        className={`${styles.flagButton} ${isActive ? styles.active : ""}`}
                        onClick={() => setLanguage(item.value)}
                        aria-label={`Mudar idioma para ${item.label}`}
                        aria-pressed={isActive}
                        title={item.label}
                    >
                        <img
                            src={item.image}
                            alt={item.label}
                            className={styles.flagImage}
                        />
                    </button>
                );
            })}
        </div>
    );
}
