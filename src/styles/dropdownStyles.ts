import { DROPDOWN_CONSTANTS } from "./dropdownConstants";

export const dropdownStyles = {
  container: {
    ...DROPDOWN_CONSTANTS.container,
  },
  title: {
    ...DROPDOWN_CONSTANTS.sectionTitle,
    color: "var(--dropdown-section-title)",
  },
  list: {
    ...DROPDOWN_CONSTANTS.list,
  },
  itemWrapper: {
    ...DROPDOWN_CONSTANTS.itemWrapper,
  },
  baseItem: {
    ...DROPDOWN_CONSTANTS.baseItem,
    color: "var(--dropdown-item-text)",
    backgroundColor: "transparent",
  },
  getItemActive: () => ({
    ...DROPDOWN_CONSTANTS.activeItem,
    backgroundColor: "var(--dropdown-item-bg-active)",
  }),
  activeBar: {
    ...DROPDOWN_CONSTANTS.activeBar,
    backgroundColor: "var(--dropdown-item-border-active)",
  },
  icon: {
    ...DROPDOWN_CONSTANTS.icon,
  },
  iconSvg: {
    width: "20px",
    height: "20px",
    color: "var(--icon-fill)",
  },
  label: {
    ...DROPDOWN_CONSTANTS.label,
  },
  chevron: {
    ...DROPDOWN_CONSTANTS.chevron,
    color: "var(--dropdown-arrow)",
  },
  children: {
    ...DROPDOWN_CONSTANTS.children,
  },
};
