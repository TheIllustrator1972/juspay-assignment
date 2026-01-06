import { useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import { commonStyles } from "../commonStyles";
import Profile from "./Left/Profile";
import FavouritesAndRecently from "./Left/FavouritesAndRecently";
import Dropdown from "./Dropdown";
import { dropdownConfig, pagesDropdownConfig } from "../configs/dropdownConfig";

function LeftSidebar() {
  const { leftCollapsed } = useAppContext();
  const [activeItemId, setActiveItemId] = useState<string | null>("default");

  const handleItemClick = (itemId: string, _parentId?: string) => {
    // itemId already contains the composite ID for child items
    // or the direct ID for parent items
    setActiveItemId(itemId);
  };

  return (
    <aside
      style={{
        ...commonStyles.leftSidebar,
        ...(leftCollapsed ? commonStyles.leftSidebarCollapsed : {}),
      }}
    >
      <div
        style={{
          ...commonStyles.sidebarContent,
          display: "flex",
          flexDirection: "column",
          padding: "24px",
          gap: "24px",
        }}
      >
        <Profile />
        <FavouritesAndRecently />
        <Dropdown
          title="Dashboards"
          items={dropdownConfig}
          activeItemId={activeItemId}
          onItemClick={handleItemClick}
        />
        <Dropdown
          title="Pages"
          items={pagesDropdownConfig}
          activeItemId={activeItemId}
          onItemClick={handleItemClick}
        />
      </div>
    </aside>
  );
}

export default LeftSidebar;
