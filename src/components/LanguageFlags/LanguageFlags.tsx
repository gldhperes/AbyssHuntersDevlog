
import { useLanguage, type Language } from "../../contexts/LanguageContext";
import styles from "./LanguageFlags.module.css";

const languages: { value: Language; label: string; flag: string }[] = [
  {
    value: "pt-BR",
    label: "Português",
    flag: "🇧🇷",
  },
  {
    value: "en-US",
    label: "English",
    flag: "🇺🇸",
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
            className={`${styles.flagButton} ${
              isActive ? styles.active : ""
            }`}
            onClick={() => setLanguage(item.value)}
            aria-label={`Mudar idioma para ${item.label}`}
            aria-pressed={isActive}
            title={item.label}
          >
            {item.flag}
          </button>
        );
      })}
    </div>
  );
}
