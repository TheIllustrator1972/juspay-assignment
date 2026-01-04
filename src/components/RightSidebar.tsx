import { useAppContext } from "../contexts/AppContext";
import { commonStyles } from "../commonStyles";
import Notifications from "./Right/Notifications";
import Activities from "./Right/Activities";
import Contacts from "./Right/Contacts";

function RightSidebar() {
  const { rightCollapsed } = useAppContext();

  return (
    <aside
      style={{
        ...commonStyles.rightSidebar,
        ...(rightCollapsed ? commonStyles.rightSidebarCollapsed : {}),
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
        <Notifications />
        <Activities />
        <Contacts />
      </div>
    </aside>
  );
}

export default RightSidebar;
