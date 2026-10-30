import type { DevlogCategory, DevlogEntry } from "@/types/DevlogEntry";

export const devlogCategoryLabels: Record<DevlogCategory, string> = {
  combat: "Combate",
  systems: "Sistemas",
  world: "Mundo",
  progress: "Progresso",
};

/**
 * Devlog entries, newest first.
 * Add a new object at the top of the array — the timeline handles the
 * alternating layout on its own.
 */
export const devlogEntries: DevlogEntry[] = [
  {
    id: "sistema-de-combate",
    date: "2026-10-18",
    category: "combat",
    title: "Sistema de Combate",
    description:
      "Implementamos os ataques básicos e ajustamos a detecção de acerto para que o combate responda com precisão mesmo em conexões instáveis.",
    bulletPoints: [
      "Implementação dos ataques básicos e das combinações iniciais.",
      "Detecção de acerto validada no servidor.",
      "Ajustes nas animações e nos tempos de recuperação.",
      "Primeiros testes de combate em multiplayer.",
    ],
    media: {
      type: "image",
      src: "https://media.base44.com/images/public/6ae367fe1ff7beeda8902bad/5076a16fe_generated_6be1bdce.png",
      alt: "Lâmina curva cortando o ar com faíscas de energia ciano sobre fundo escuro",
    },
  },
  {
    id: "ruinas-do-abismo",
    date: "2026-09-27",
    category: "world",
    title: "As Primeiras Ruínas do Abismo",
    description:
      "Construímos o primeiro conjunto de ruínas jogáveis: pontes quebradas, plataformas suspensas e cristais que iluminam a descida.",
    bulletPoints: [
      "Blocagem de três áreas exploráveis.",
      "Iluminação volumétrica em cristais bioluminescentes.",
      "Pontos de ancoragem para o gancho do caçador.",
      "Primeira passagem de névoa e profundidade atmosférica.",
    ],
    media: {
      type: "image",
      src: "https://media.base44.com/images/public/6ae367fe1ff7beeda8902bad/3bd73eb50_generated_8705d340.png",
      alt: "Ruínas colossais com pontes de pedra quebradas sobre um abismo iluminado por cristais ciano",
    },
  },
  {
    id: "reliquias",
    date: "2026-09-09",
    category: "systems",
    title: "Relíquias e Encantamentos",
    description:
      "As relíquias passaram a alterar o comportamento do caçador de forma permanente, abrindo espaço para builds bem diferentes entre si.",
    bulletPoints: [
      "Estrutura de dados para relíquias e seus encantamentos.",
      "Efeitos empilháveis com limites por categoria.",
      "Interface de inspeção com leitura de runas.",
      "Balanceamento inicial das primeiras seis relíquias.",
    ],
    media: {
      type: "image",
      src: "https://media.base44.com/images/public/6ae367fe1ff7beeda8902bad/95c623462_generated_2f83615c.png",
      alt: "Relíquia mecânica circular de metal escuro com runas ciano brilhando sobre um altar de pedra",
    },
  },
  {
    id: "movimentacao",
    date: "2026-08-21",
    category: "progress",
    title: "Movimentação do Caçador",
    description:
      "Revisamos o controle de movimentação para que escalar, saltar e descer o abismo pareçam parte de um único gesto contínuo.",
    bulletPoints: [
      "Nova curva de aceleração e frenagem.",
      "Salto com tolerância de borda.",
      "Gancho integrado à escalada.",
      "Estudo de câmera para quedas longas.",
    ],
    media: {
      type: "video",
      src: "https://media.base44.com/images/public/6ae367fe1ff7beeda8902bad/bfef4abef_generated_ae49dd40.png",
      alt: "Caçador encapuzado saltando entre duas plataformas de pedra dentro de um abismo iluminado",
    },
  },
  {
    id: "fatia-vertical",
    date: "2026-07-30",
    category: "progress",
    title: "Primeira Fatia Vertical",
    description:
      "Fechamos um trecho completo de jogo, do menu inicial ao primeiro confronto, para medir ritmo e clareza antes de expandir o mundo.",
    bulletPoints: [
      "Fluxo completo de início ao primeiro chefe.",
      "Passagem de áudio ambiente e trilha dinâmica.",
      "Coleta de métricas de progresso anônimas.",
      "Lista de ajustes priorizada com base nos testes.",
    ],
  },
];