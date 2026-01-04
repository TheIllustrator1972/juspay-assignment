import {
  ChartPieIcon,
  ShoppingBagIcon,
  FolderIcon,
  BookOpenIcon,
  UserIcon,
  UsersIcon,
  BuildingsIcon,
  ArticleIcon,
  ChatCircleIcon,
} from "@phosphor-icons/react";
import type { DropdownItem } from "../components/Dropdown";

export const dropdownConfig: DropdownItem[] = [
  {
    id: "default",
    label: "Default",
    icon: ChartPieIcon,
    onClick: () => console.log("Default clicked"),
  },
  {
    id: "ecommerce",
    label: "eCommerce",
    icon: ShoppingBagIcon,
    children: [],
    onClick: () => console.log("eCommerce clicked"),
  },
  {
    id: "projects",
    label: "Projects",
    icon: FolderIcon,
    children: [],
    onClick: () => console.log("Projects clicked"),
  },
  {
    id: "online-courses",
    label: "Online Courses",
    icon: BookOpenIcon,
    children: [],
    onClick: () => console.log("Online Courses clicked"),
  },
];

export const pagesDropdownConfig: DropdownItem[] = [
  {
    id: "user-profile",
    label: "User Profile",
    icon: UserIcon,
    defaultExpanded: true,
    children: [
      {
        id: "overview",
        label: "Overview",
        onClick: () => console.log("Overview clicked"),
      },
      {
        id: "projects",
        label: "Projects",
        onClick: () => console.log("Projects clicked"),
      },
      {
        id: "campaigns",
        label: "Campaigns",
        onClick: () => console.log("Campaigns clicked"),
      },
      {
        id: "documents",
        label: "Documents",
        onClick: () => console.log("Documents clicked"),
      },
      {
        id: "followers",
        label: "Followers",
        onClick: () => console.log("Followers clicked"),
      },
    ],
    onClick: () => console.log("User Profile clicked"),
  },
  {
    id: "account",
    label: "Account",
    icon: UsersIcon,
    children: [],
    onClick: () => console.log("Account clicked"),
  },
  {
    id: "corporate",
    label: "Corporate",
    icon: BuildingsIcon,
    children: [],
    onClick: () => console.log("Corporate clicked"),
  },
  {
    id: "blog",
    label: "Blog",
    icon: ArticleIcon,
    children: [],
    onClick: () => console.log("Blog clicked"),
  },
  {
    id: "social",
    label: "Social",
    icon: ChatCircleIcon,
    children: [],
    onClick: () => console.log("Social clicked"),
  },
];
