import { useAppContext } from "../contexts/AppContext";
import { commonStyles } from "../commonStyles";
import Profile from "./Left/Profile";

function LeftSidebar() {
  const { leftCollapsed } = useAppContext();

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
          gap: "36px",
        }}
      >
        <Profile />
        <p>Left sidebar content</p>
      </div>
    </aside>
  );
}

export default LeftSidebar;
