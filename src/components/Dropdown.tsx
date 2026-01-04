import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { dropdownStyles } from "../styles/dropdownStyles";
import ChevronIcon from "./ChevronIcon";

export interface DropdownChildItem {
  id: string;
  label: string;
  icon?: React.ComponentType<any>;
  onClick?: () => void;
}

export interface DropdownItem {
  id: string;
  label: string;
  icon?: React.ComponentType<any>;
  children?: DropdownChildItem[];
  onClick?: () => void;
  defaultExpanded?: boolean;
}

export interface DropdownProps {
  title?: string;
  items: DropdownItem[];
  activeItemId?: string | null;
  onItemClick?: (itemId: string, parentId?: string) => void;
}

export default function Dropdown({
  title,
  items,
  activeItemId,
  onItemClick,
}: DropdownProps) {
  const [expandedId, setExpandedId] = useState<string | null>(() => {
    const defaultExpanded = items.find((item) => item.defaultExpanded);
    return defaultExpanded?.id || null;
  });

  const getChildItemId = (childId: string, parentId: string) => {
    return `${parentId}-${childId}`;
  };

  const handleParentClick = (item: DropdownItem) => {
    if (item.children && item.children.length > 0) {
      setExpandedId((prev) => (prev === item.id ? null : item.id));
    } else {
      if (item.onClick) {
        item.onClick();
      }
      if (onItemClick) {
        onItemClick(item.id);
      }
    }
  };

  const handleChildClick = (child: DropdownChildItem, parentId: string) => {
    if (child.onClick) {
      child.onClick();
    }
    if (onItemClick) {
      const childItemId = getChildItemId(child.id, parentId);
      onItemClick(childItemId, parentId);
    }
  };

  const handleSingleItemClick = (item: DropdownItem) => {
    if (item.onClick) {
      item.onClick();
    }
    if (onItemClick) {
      onItemClick(item.id);
    }
  };

  const isItemActive = (itemId: string, parentId?: string) => {
    if (!activeItemId) return false;

    if (parentId) {
      const childItemId = getChildItemId(itemId, parentId);
      return activeItemId === childItemId;
    }

    return activeItemId === itemId;
  };

  return (
    <div style={dropdownStyles.container}>
      {title && <h3 style={dropdownStyles.title}>{title}</h3>}
      <div style={dropdownStyles.list}>
        {items.map((item) => {
          const hasChildren = item.children && item.children.length > 0;
          const isExpanded = expandedId === item.id;

          const isActive = !hasChildren && isItemActive(item.id);

          if (hasChildren) {
            return (
              <div key={item.id} style={dropdownStyles.itemWrapper}>
                <motion.button
                  style={{
                    ...dropdownStyles.baseItem,
                    backgroundColor: "transparent",
                  }}
                  onClick={() => handleParentClick(item)}
                  aria-expanded={isExpanded}
                  onMouseDown={(e) => e.preventDefault()}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.1 }}
                >
                  <span style={dropdownStyles.chevron}>
                    <ChevronIcon isExpanded={isExpanded} />
                  </span>
                  {item.icon && (
                    <span style={dropdownStyles.icon}>
                      <item.icon
                        size={20}
                        weight="duotone"
                        color="var(--icon-fill)"
                      />
                    </span>
                  )}
                  <span style={dropdownStyles.label}>{item.label}</span>
                </motion.button>
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      style={{ overflow: "hidden" }}
                    >
                      <div style={dropdownStyles.children}>
                        {item.children!.map((child, index) => {
                          const isChildActive = isItemActive(child.id, item.id);
                          return (
                            <motion.button
                              key={`${item.id}-${child.id}`}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              transition={{
                                duration: 0.2,
                                delay: index * 0.05,
                                ease: "easeOut",
                              }}
                              style={{
                                ...dropdownStyles.baseItem,
                                backgroundColor: isChildActive
                                  ? "var(--dropdown-item-bg-active)"
                                  : "transparent",
                              }}
                              onClick={() => handleChildClick(child, item.id)}
                              onMouseDown={(e) => e.preventDefault()}
                              whileTap={{ scale: 0.98 }}
                            >
                              {isChildActive && (
                                <div style={dropdownStyles.activeBar} />
                              )}
                              {child.icon && (
                                <span style={dropdownStyles.icon}>
                                  <child.icon
                                    size={20}
                                    weight="duotone"
                                    color="var(--icon-fill)"
                                  />
                                </span>
                              )}
                              <span style={dropdownStyles.label}>
                                {child.label}
                              </span>
                            </motion.button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          }

          return (
            <motion.button
              key={item.id}
              style={{
                ...dropdownStyles.baseItem,
                backgroundColor: isActive
                  ? "var(--dropdown-item-bg-active)"
                  : "transparent",
              }}
              onClick={() => handleSingleItemClick(item)}
              onMouseDown={(e) => e.preventDefault()}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.1 }}
            >
              {/* Active indicator bar */}
              {isActive && <div style={dropdownStyles.activeBar} />}
              {item.icon && (
                <span style={dropdownStyles.icon}>
                  <item.icon
                    size={20}
                    weight="duotone"
                    color="var(--icon-fill)"
                  />
                </span>
              )}
              <span style={dropdownStyles.label}>{item.label}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
