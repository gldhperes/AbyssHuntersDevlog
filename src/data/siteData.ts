

export const siteData = {

  /** External links are rendered only when a real destination is configured. */
  externalLink: null as { label: string; href: string } | null,
  /** Social links render only when configured — no placeholder destinations. */
  socialLinks: [] as { label: string; href: string }[],
};

export default siteData;