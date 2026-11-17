import { createContext, useContext, useEffect, useState, type ReactNode, } from "react";

export type Language = "pt-BR" | "en-US";

type LanguageContextType = {
    language: Language;
    setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

type LanguageProviderProps = {
    children: ReactNode;
};

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguage] = useState<Language>(() => {
        const savedLanguage = localStorage.getItem("language");

        return savedLanguage === "en-US" ? "en-US" : "pt-BR";
    });

    useEffect(() => {
        localStorage.setItem("language", language);
        document.documentElement.lang = language;
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }

    return context;
}
