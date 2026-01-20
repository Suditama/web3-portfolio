import { AlignJustify } from "@deemlol/next-icons";

export type DropdownItem = {
  title: string;
};

export type NavItem = {
  title: string;
  icon: typeof AlignJustify;
  dropdown: DropdownItem[];
};

export const navConfig: NavItem[] = [
  {
    title: "Home",
    icon: AlignJustify,
    dropdown: [
      { title: "Overview" },
      { title: "Updates" },
    ],
  },
  {
    title: "Services",
    icon: AlignJustify,
    dropdown: [
      { title: "Web Dev" },
      { title: "Blockchain" },
    ],
  