import { useAppContext } from "../contexts/AppContext";
import { commonStyles } from "../commonStyles";

function LeftSidebar() {
  const { leftCollapsed } = useAppContext();

  return (
    <aside
      style={{
        ...commonStyles.leftSidebar,
        ...(leftCollapsed ? commonStyles.leftSidebarCollapsed : {}),
      }}
    >
      <div style={commonStyles.sidebarContent}>
        <h3>Left Sidebar</h3>
        <p>Left sidebar content</p>
      </div>
    </aside>
  );
}

export default LeftSidebar;

