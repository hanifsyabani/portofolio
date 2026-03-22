import {
  SiGmail,
  SiGithub,
  SiInstagram,
} from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { SocialMediaItem } from "@/@types/contact";


const iconSize = 24;

export const SOCIAL_MEDIA: SocialMediaItem[] = [
  {
    name: "email",
    title: "Email",
    description: "Drop me an email for inquiries, collaborations, or just to say hello.",
    href: "mailto:mh070940@gmail.com",
    icon: <SiGmail size={iconSize} />,
    accentColor: "text-red-400",
    hoverBorder: "hover:border-red-400/30",
    glowColor: "rgba(248,113,113,0.12)",
  },
  {
    name: "linkedin",
    title: "LinkedIn",
    description: "Connect with me professionally and explore my career journey.",
    href: "https://www.linkedin.com/in/muhammad-hanif-sya-bani/",
    icon: <BsLinkedin size={iconSize} />,
    accentColor: "text-sky-400",
    hoverBorder: "hover:border-sky-400/30",
    glowColor: "rgba(56,189,248,0.12)",
  },
  {
    name: "github",
    title: "GitHub",
    description: "Check out my open-source projects and code contributions.",
    href: "https://github.com/hanifsyabani",
    icon: <SiGithub size={iconSize} />,
    accentColor: "text-neutral-300",
    hoverBorder: "hover:border-neutral-400/30",
    glowColor: "rgba(163,163,163,0.10)",
  },
  {
    name: "instagram",
    title: "Instagram",
    description: "Follow my creative journey and behind-the-scenes moments.",
    href: "https://www.instagram.com/mhanifs_",
    icon: <SiInstagram size={iconSize} />,
    accentColor: "text-pink-400",
    hoverBorder: "hover:border-pink-400/30",
    glowColor: "rgba(244,114,182,0.12)",
  },
];
