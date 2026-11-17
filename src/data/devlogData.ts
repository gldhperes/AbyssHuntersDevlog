// WEBP
import _2026_03_23 from '../assets/webp/2026-03-23.webp'
import _2026_03_30 from '../assets/webp/2026-03-30.webp'
import _2026_04_07 from '../assets/webp/2026-04-07.webp'
import _2026_04_19 from '../assets/webp/2026-04-19.webp'
import _2026_05_04 from '../assets/webp/2026-05-04.webp'
import _2026_06_01 from '../assets/webp/2026-06-01.webp'



import type { DevlogCategory, DevlogEntry } from "../types/DevlogEntry";



export const devlogCategoryLabels: Record<DevlogCategory, string> = {
  combat: "Combate",
  systems: "Sistemas",
  world: "Mundo",
  progress: "Progresso",
  gameplay: "Gameplay",
};

/**
 * Devlog entries, newest first.
 * Add a new object at the top of the array — the timeline handles the
 * alternating layout on its own.
 */
export const devlogEntries: DevlogEntry[] = [
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
      type: "image",
      src: _2026_06_01,
      alt: ""
    },
  },
];