import { devlogEntries_EN_US, devlogEntries_PT_BR } from "./devlogData"

export const translations = {
    "pt-BR": {
        nav: {
            about: "Sobre",
        },
        hero: {
            eyebrow: "Diário de desenvolvimento",
            description: "Acompanhe a evolução de Abyss Hunters: sistemas, mecânicas e muito mais.",
            action: "Ver atualizações",
        },
        about: {
            about: "Sobre o projeto",
            title: "Um mundo construído sobre o abismo",
            description: "Abyss Hunters é um jogo online multiplayer Action RPG inspirado em Dauntless e Monster Hunter. Este devlog registra, atualização após atualização, o que está sendo construído: os sistemas, as mecânicas e as decisões que dão forma à descida.",
            highlights: [
                { label: "Gênero", value: "RPG, Ação e exploração" },
                { label: "Ambientação", value: "Fantasia Medieval, Aventura e Exploração." },
                { label: "Tecnologias", value: "Unity, Photon Fusion 2, Playfab" },
                { label: "Status", value: "Em desenvolvimento" },
            ],
        },
        timeline: {
            header: "Histórico do projeto",
            title: "Atualizações",
            description: "Cada entrada registra o que foi construído durante o desenvolvimento.",
            entries: devlogEntries_PT_BR,
        },
        footer: {
            development: "Em desenvolvimento",
            eyebrow: "Diário de desenvolvimento",
            present: "Presente",
        }

    },

    "en-US": {
        nav: {
            devlog: "Devlog",
            about: "About",
        },
        hero: {
            eyebrow: "Development Journal",
            description: "Follow the development of Abyss Hunters: systems, mechanics, and much more.",
            action: "View Updates",
        },
        about: {
            about: "About the project",
            title: "A World Built Upon the Abyss",
            description:
                "Abyss Hunters is an online multiplayer Action RPG inspired by Dauntless and Monster Hunter. This devlog documents the development process, update after update, showcasing the systems, mechanics, and decisions shaping the journey into the abyss.",

            highlights: [
                { label: "Genre", value: "RPG, Action & Exploration" },
                { label: "Setting", value: "Medieval Fantasy, Adventure & Exploration" },
                { label: "Technologies", value: "Unity, Photon Fusion 2, PlayFab" },
                { label: "Status", value: "In Development" },
            ],
        },
        timeline: {
            header: "Project History",
            title: "Updates",
            description: "Each entry documents what has been built during development.",
            entries: devlogEntries_EN_US,
        },
        footer: {
            development: "In development",
            eyebrow: "Development Journal",
            present: "Present",
        }
    },
};



