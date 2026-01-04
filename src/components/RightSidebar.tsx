import { useAppContext } from "../contexts/AppContext";
import { commonStyles } from "../commonStyles";
import Notifications from "./Right/Notifications";

function RightSidebar() {
  const { rightCollapsed } = useAppContext();

  return (
    <aside
      style={{
        ...commonStyles.rightSidebar,
        ...(rightCollapsed ? commonStyles.rightSidebarCollapsed : {}),
      }}
    >
      <div style={{ ...commonStyles.sidebarContent, padding: "24px" }}>
        <Notifications />
      </div>
    </aside>
  );
}

export default RightSidebar;
