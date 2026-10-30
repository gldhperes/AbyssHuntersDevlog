/**
 * Site-level configuration: brand, navigation and hero copy/images.
 * Replace `heroImage` with the official key art when it is ready.
 */

import ConceptArt from "../assets/AbyssHuntersConceptArt.png";


export const siteData = {
  brandName: "Abyss Hunters",
  brandShort: "Abyss",
  heroImage: ConceptArt,
  hero: {
    eyebrow: "Diário de desenvolvimento",
    title: "Devlog",
    projectName: "Abyss Hunters",
    description:
      "Acompanhe a evolução de Abyss Hunters: sistemas, mecânicas e muito mais.",
  },
  nav: [
    { label: "Devlog", href: "#devlog" },
    { label: "Sobre", href: "#sobre" },
  ],
  /** External links are rendered only when a real destination is configured. */
  externalLink: null as { label: string; href: string } | null,
  /** Social links render only when configured — no placeholder destinations. */
  socialLinks: [] as { label: string; href: string }[],
};

export default siteData;