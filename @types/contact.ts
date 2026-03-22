export interface SocialMediaItem {
  name: string;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  accentColor: string; // tailwind text color
  hoverBorder: string; // tailwind hover border color
  glowColor: string;   // shadow rgba for glow
}
