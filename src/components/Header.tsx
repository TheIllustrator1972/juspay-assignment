import { THEME } from "../constants";
import { useAppContext } from "../contexts/AppContext";
import { headerStyles } from "../styles/headerStyles";
import { SidebarIcon, SunIcon, MoonIcon } from "@phosphor-icons/react";

function Header() {
  const { toggleLeft, toggleRight, theme, toggleTheme } = useAppContext();

  return (
    <header style={headerStyles.header}>
      <div style={headerStyles.leftSection}>
        <button
          onClick={toggleLeft}
          style={headerStyles.iconButton}
          className={headerStyles.iconButtonClassName}
          aria-label="Toggle left sidebar"
        >
          <SidebarIcon size={20} weight="duotone" className="sidebar-icon" />
        </button>
      </div>
      <div style={headerStyles.rightSection}>
        <button
          onClick={toggleTheme}
          style={headerStyles.iconButton}
          className={headerStyles.iconButtonClassName}
          aria-label="Toggle theme"
        >
          {theme === THEME.LIGHT ? (
            <SunIcon size={20} weight="duotone" className="theme-icon" />
          ) : (
            <MoonIcon size={20} weight="duotone" className="theme-icon" />
          )}
        </button>
        <button
          onClick={toggleRight}
          style={headerStyles.iconButton}
          className={headerStyles.iconButtonClassName}
          aria-label="Toggle right sidebar"
        >
          <SidebarIcon size={20} weight="duotone" className="sidebar-icon" />
        </button>
      </div>
    </header>
  );
}

export default Header;
