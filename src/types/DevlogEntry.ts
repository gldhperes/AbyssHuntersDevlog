export type DevlogCategory = "combat" | "systems" | "world" | "progress";

export type DevlogMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
  /** Optional destination for the media (e.g. an external video page). */
  href?: string;
};

export type DevlogAction = {
  label: string;
  href: string;
};

export type DevlogEntry = {
  id: string;
  /** ISO date, e.g. "2026-10-18". */
  date: string;
  category: DevlogCategory;
  title: string;
  description?: string;
  bulletPoints: string[];
  media?: DevlogMedia;
  action?: DevlogAction;
};