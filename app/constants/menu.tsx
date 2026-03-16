
import {
  HiHome,
  HiUser,
  HiCollection,
  HiFolder,
  HiChatAlt2,
  HiMail,
} from "react-icons/hi";

import { MenuItemProps } from "../types/menu";
import { HiTrophy } from "react-icons/hi2";


const iconSize = 20;

export const MENU_ITEMS: MenuItemProps[] = [
  {
    title: "Home",
    href: "/",
    icon: <HiHome size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Home",
  },
  {
    title: "About",
    href: "/about",
    icon: <HiUser size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: About",
  },
  {
    title: "Contents",
    href: "/contents",
    icon: <HiCollection size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Contents",
  },
  {
    title: "Achievements",
    href: "/achievements",
    icon: <HiTrophy size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Achievements",
  },
  {
    title: "Projects",
    href: "/projects",
    icon: <HiFolder size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Projects",
  },
  {
    title: "Chat Room",
    href: "/chat",
    icon: <HiChatAlt2 size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Chat Room",
  },
  {
    title: "Contact",
    href: "/contact",
    icon: <HiMail size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Contact",
  },
];
