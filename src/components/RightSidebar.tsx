import { useAppContext } from "../contexts/AppContext";
import { commonStyles } from "../commonStyles";

function RightSidebar() {
  const { rightCollapsed } = useAppContext();

  return (
    <aside
      style={{
        ...commonStyles.rightSidebar,
        ...(rightCollapsed ? commonStyles.rightSidebarCollapsed : {}),
      }}
    >
      <div style={commonStyles.sidebarContent}>
        <h3>Right Sidebar</h3>
        <p>Right sidebar content</p>
      </div>
    </aside>
  );
}

export default RightSidebar;

