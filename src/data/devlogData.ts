// WEBM VIDEOS
import _2026_03_23 from '../assets/videos/2026-03-23.webm'
import _2026_03_30 from '../assets/videos/2026-03-30.webm'
import _2026_04_07 from '../assets/videos/2026-04-07.webm'
import _2026_04_19 from '../assets/videos/2026-04-19.webm'
import _2026_05_04 from '../assets/videos/2026-05-04.webm'
import _2026_06_01 from '../assets/videos/2026-06-01.webm'


import type { DevlogCategory, DevlogEntry } from "../types/DevlogEntry";


export const devlogCategoryLabels: Record<DevlogCategory, string> = {
  combat: "Combat",
  systems: "Systems",
  world: "World",
  progress: "Progress",
  gameplay: "Gameplay",
};

export const devlogEntries_PT_BR: DevlogEntry[] = [
  // 1
  {
    id: "multiplayer-foundation",
    date: "2026-03-23",
    category: "systems",
    title: "Fundamentos do Multiplayer",
    description:
      "Implementação da infraestrutura inicial do multiplayer, incluindo pareamento de jogadores, conexões de sessão, sincronização de movimentação e animações, detecção de colisões entre jogadores e controles da câmera local.",
    bulletPoints: [
      "Configuração inicial do Multiplayer.",
      "Sistema básico de pareamento para conectar jogadores na mesma sala e sessão.",
      "Sincronização da movimentação dos jogadores e suas animações.",
      "Detecção de colisões entre jogadores.",
      "Movimentação da câmera local."
    ],
    media: {
      type: "video",
      src: _2026_03_23,
      alt: "Lâmina curva cortando o ar com faíscas de energia ciano sobre fundo escuro"
    }
  },

  // 2
  {
    id: "hunt-and-combat-system",
    date: "2026-03-30",
    category: "combat",
    title: "Sistema de Caçadas e Combate",
    description:
      "Implementação da interface de seleção de caçadas, sistema de pareamento multiplayer para sessões públicas e privadas e surgimento dos jogadores. Também foram configurados o prefab do Behemoth, suas hitboxes, sistema de vida e tipos de dano por região do corpo, além das primeiras mecânicas de combate utilizando Raycasts executados no servidor.",
    bulletPoints: [
      "HUD para seleção de caçadas.",
      "Interface com informações básicas da caçada.",
      "Sistema de pareamento para partidas públicas e privadas em salas separadas.",
      "Surgimento dos jogadores na partida selecionada.",
      "Configuração do prefab, hitboxes e sistema de vida do Behemoth.",
      "Configuração dos tipos de dano aplicados às diferentes partes do corpo do Behemoth.",
      "Mecânicas básicas de combate utilizando Raycasts no servidor."
    ],
    media: {
      type: "video",
      src: _2026_03_30,
      alt: "Ruínas colossais com pontes de pedra quebradas sobre um abismo iluminado por cristais ciano",
    },
  },

  // 3
  {
    id: "gathering-and-behemoth-systems",
    date: "2026-04-07",
    category: "gameplay",
    title: "Sistema de Coleta e Behemoths",
    description:
      "Implementação do sistema de coleta com HUD interativo, diferentes tipos de interação e gerenciamento de surgimento dos recursos. Desenvolvimento do sistema de surgimento e reaparecimento dos Behemoths, bancos de dados e configurações de caçadas utilizando ScriptableObjects, inteligência artificial básica com recuperação de vida e HUD de feedback de dano com indicadores animados.",
    bulletPoints: [
      "Sistema de Coleta:",
      "HUD para interação com recursos coletáveis.",
      "Tipos de interação: apenas clicar ou pressionar um botão para interagir.",
      "Sistema de surgimento dos recursos coletáveis.",
      "Sistema de surgimento dos Behemoths, incluindo reaparecimento na localização correta após serem derrotados.",
      "Bancos de dados para Behemoths e objetos coletáveis.",
      "ScriptableObjects para configurar o surgimento de Behemoths e recursos em cada caçada.",
      "IA básica dos Behemoths: retorna ao ponto central de surgimento e recupera a vida ao sair da área de combate.",
      "HUD básico de feedback de dano, exibindo tipo de dano, valor aplicado e animações."
    ],
    media: {
      type: "video",
      src: _2026_04_07,
      alt: ""
    },
  },

  // 4
  {
    id: "combat-feedback-and-weapon-system",
    date: "2026-04-19",
    category: "combat",
    title: "Feedback de Combate e Sistema de Armas",
    description:
      "Melhorias no feedback de combate, com animações aprimoradas para os indicadores de dano e novos indicadores de dano de atordoamento. Implementação do sistema básico de configuração da arma equipada, incluindo tipos de dano e multiplicadores para ataques leves e pesados.",
    bulletPoints: [
      "Melhoria nas animações dos indicadores de dano.",
      "Adição de indicadores de dano de atordoamento quando esse tipo de dano é aplicado.",
      "Configuração básica do tipo de arma equipada pelo jogador.",
      "Configuração dos tipos de dano das armas.",
      "Multiplicadores de dano para ataques leves e pesados."
    ],
    media: {
      type: "video",
      src: _2026_04_19,
      alt: ""
    },
  },

  // 5
  {
    id: "player-support-and-consumables",
    date: "2026-05-04",
    category: "gameplay",
    title: "Suporte ao Jogador e Consumíveis",
    description:
      "Implementação de mecânicas de suporte e sobrevivência, permitindo que os jogadores revivam seus companheiros, interajam com fontes de cura e utilizem consumíveis. Adição de seringas para reviver jogadores abatidos e diferentes poções que concedem melhorias temporárias de atributos.",
    bulletPoints: [
      "Sistema de reviver jogadores: permite que os jogadores reanimem seus companheiros.",
      "Fontes de cura.",
      "Sistema de consumíveis.",
      "Utilização de seringas para reviver companheiros abatidos.",
      "Utilização de diferentes tipos de poções para receber bônus temporários."
    ],
    media: {
      type: "video",
      src: _2026_05_04,
      alt: ""
    },
  },

  // 6
  {
    id: "core-gameplay-systems-integration",
    date: "2026-06-01",
    category: "gameplay",
    title: "Integração dos Sistemas Principais do Jogo",
    description:
      "Grande atualização de gameplay e arquitetura, introduzindo os sistemas completos de consumíveis, inventário, recompensas e drops. Integração do primeiro ciclo completo de gameplay, conectando os confrontos contra Behemoths à obtenção de itens e ao gerenciamento do inventário. Refatoração da arquitetura MVVM, melhorias na estabilidade do multiplayer e reformulação da validação de combate, com aplicação de dano autoritativa no servidor e compensação de latência.",
    bulletPoints: [
      "Sistema de Consumíveis: seringas para reviver jogadores, bônus temporários, HUD e sincronização multiplayer.",
      "Sistema de Inventário: banco de dados de itens, dados do inventário dos jogadores e serviços de gerenciamento.",
      "Sistema de Recompensas: processamento de recompensas e integração com o inventário dos jogadores.",
      "Sistema de Drops: tabelas de drops, chances de obtenção e distribuição automática de recompensas.",
      "Ciclo Completo de Gameplay: derrota do Behemoth → obtenção de itens → inventário.",
      "Refatoração da Arquitetura MVVM: contexto do jogador, Player Root, padrão Observable e inicialização centralizada da interface.",
      "Melhorias no Multiplayer: sincronização de objetos, remoção de jogadores das sessões e gerenciamento de conexões.",
      "Refatoração da Arquitetura de Combate: validação de ataques no servidor, compensação de latência e aplicação autoritativa de dano.",
      "Combate Autoritativo no Servidor: separação da lógica de gameplay dos efeitos visuais.",
      "Expansão dos Sistemas do Jogador: melhorias na arquitetura e inicialização para facilitar a implementação de futuros sistemas relacionados ao jogador."
    ],
    media: {
      type: "video",
      src: _2026_06_01,
      alt: ""
    },
  },
];





export const devlogEntries_EN_US: DevlogEntry[] = [
  // 1
  {
    id: "multiplayer-foundation",
    date: "2026-03-23",
    category: "systems",
    title: "Multiplayer Foundation",
    description: "Implemented the initial multiplayer infrastructure, including player matchmaking, session connections, synchronized movement and animations, player collisions, and local camera controls.",
    bulletPoints: [
      "Multiplayer Setup.",
      "Basic matchmaking to spawn players in the same room and session.",
      "Player movement synchronized with animations.",
      "Player collision detection.",
      "Local camera movement."
    ],
    media: {
      type: "video",
      src: _2026_03_23,
      alt: "Lâmina curva cortando o ar com faíscas de energia ciano sobre fundo escuro"
    }
  },

  // 2
  {
    id: "hunt-and-combat-system",
    date: "2026-03-30",
    category: "combat",
    title: "Hunt & Combat System",
    description:
      "Implemented the hunt selection interface, multiplayer matchmaking for public and private sessions, and player spawning. Also configured the Behemoth's prefab, hitboxes, health system, and limb damage types, alongside the first server-side raycast-based combat mechanics.",
    bulletPoints: [
      "HUD for hunt selection.",
      "Basic hunt information HUD.",
      "Matchmaking for public and private matches across separate rooms.",
      "Player spawning in the selected match.",
      "Behemoth prefab, hitboxes, and health configuration.",
      "Configuration of damage types applied to Behemoth body parts.",
      "Basic combat mechanics using server-side raycasts."
    ],
    media: {
      type: "video",
      src: _2026_03_30,
      alt: "Ruínas colossais com pontes de pedra quebradas sobre um abismo iluminado por cristais ciano",
    },
  },

  // 3
  {
    id: "gathering-and-behemoth-systems",
    date: "2026-04-07",
    category: "gameplay",
    title: "Gathering & Behemoth Systems",
    description:
      "Implemented the gathering system with interactive HUD, multiple interaction types, and spawn management. Developed Behemoth spawning and respawning, databases and ScriptableObject configurations for hunts, basic Behemoth AI with health recovery, and a combat damage feedback HUD with animated damage indicators.",
    bulletPoints: [
      "Gathering System:",
      "HUD for gatherable interactions.",
      "Interaction types: Click-only or press-to-interact.",
      "Gatherable spawn system.",
      "Behemoth spawning system, including respawning at the correct location after being defeated.",
      "Databases for Behemoths and gatherable objects.",
      "ScriptableObjects for configuring Behemoth and gatherable spawns per hunt.",
      "Basic Behemoth AI: Returns to its spawn center and restores health when leaving the combat area.",
      "Basic damage feedback HUD displaying damage type, damage value, and animations."
    ],
    media: {
      type: "video",
      src: _2026_04_07,
      alt: ""
    },
  },

  // 4
  {
    id: "combat-feedback-and-weapon-system",
    date: "2026-04-19",
    category: "combat",
    title: "Combat Feedback & Weapon System",
    description:
      "Improved combat feedback with enhanced damage text animations and stun damage indicators. Implemented the basic equipped weapon configuration system, including weapon damage types and damage multipliers for light and heavy attacks.",
    bulletPoints: [
      "Improved damage text animations.",
      "Added stun damage indicators when stun damage is applied.",
      "Basic configuration of the player's equipped weapon type.",
      "Weapon damage type configuration.",
      "Damage multipliers for light and heavy attacks."
    ],
    media: {
      type: "video",
      src: _2026_04_19,
      alt: ""
    },
  },

  // 5
  {
    id: "player-support-and-consumables",
    date: "2026-05-04",
    category: "gameplay",
    title: "Player Support & Consumables",
    description:
      "Implemented player support and survival mechanics, allowing players to revive teammates, interact with health fountains, and use consumables. Added syringes for reviving downed players and various potions that provide temporary buffs.",
    bulletPoints: [
      "Player revival system: Players can revive other players.",
      "Health fountains.",
      "Consumable system.",
      "Players can use syringes to revive downed teammates.",
      "Players can use different types of potions to gain buffs."
    ],
    media: {
      type: "video",
      src: _2026_05_04,
      alt: ""
    },
  },

  // 6
  {
    id: "core-gameplay-systems-integration",
    date: "2026-06-01",
    category: "gameplay",
    title: "Core Gameplay & Systems Integration",
    description:
      "Major gameplay and architecture update, introducing the complete consumable, inventory, reward, and drop systems. Integrated the first complete gameplay loop, connecting Behemoth encounters to item drops and inventory management. Refactored the MVVM architecture, improved multiplayer stability, and reworked combat validation with server-authoritative damage and lag compensation.",
    bulletPoints: [
      "Consumable System: Revive syringes, temporary buffs, HUD, and multiplayer synchronization.",
      "Inventory System: Item database, player inventory data, and inventory management services.",
      "Reward System: Reward processing and integration with the player inventory.",
      "Drop System: Drop tables, drop chances, and automated reward distribution.",
      "Complete Gameplay Loop: Behemoth defeat → Item drops → Inventory.",
      "MVVM Architecture Refactoring: Player context, player root, observable pattern, and centralized UI initialization.",
      "Multiplayer Improvements: Object synchronization, player despawning, and connection management.",
      "Combat Architecture Refactoring: Server-side attack validation, lag compensation, and authoritative damage application.",
      "Server-Authoritative Combat: Separated gameplay logic from visual feedback.",
      "Player Systems Expansion: Improved architecture and initialization for future player-related systems."
    ],
    media: {
      type: "video",
      src: _2026_06_01,
      alt: ""
    },
  },
];