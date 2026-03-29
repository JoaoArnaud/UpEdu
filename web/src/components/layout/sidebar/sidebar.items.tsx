import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import type { SvgIconProps } from "@mui/material/SvgIcon";
import type { ComponentType } from "react";

export type SidebarItem = {
  icon: ComponentType<SvgIconProps>;
  title: string;
  route: string;
};

// Centralize os botões da sidebar aqui.
export const sidebarItems: SidebarItem[] = [
  {
    icon: HomeRoundedIcon,
    title: "Home",
    route: "/",
  },
];
