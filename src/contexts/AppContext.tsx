import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import type { ReactNode } from "react";
import { THEME } from "../constants";

const SIDEBAR_STORAGE_KEY = "sidebar-state";
const THEME_STORAGE_KEY = "theme";
const THEME_MANUAL_OVERRIDE_KEY = "theme-manual-override";

interface SidebarState {
  leftCollapsed: boolean;
  rightCollapsed: boolean;
}

type ThemeValue = (typeof THEME)[keyof typeof THEME];

type ViewType = "dashboard" | "orders";

interface AppContextType {
  leftCollapsed: boolean;
  rightCollapsed: boolean;
  toggleLeft: () => void;
  toggleRight: () => void;

  theme: ThemeValue;
  toggleTheme: () => void;

  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

function loadSidebarStateFromStorage(): SidebarState {
  try {
    const stored = localStorage.getItem(SIDEBAR_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return {
        leftCollapsed: parsed.leftCollapsed ?? false,
        rightCollapsed: parsed.rightCollapsed ?? false,
      };
    }
  } catch (error) {
    console.error("Error loading sidebar state from localStorage:", error);
  }
  return {
    leftCollapsed: false,
    rightCollapsed: false,
  };
}

function saveSidebarStateToStorage(state: SidebarState): void {
  try {
    localStorage.setItem(SIDEBAR_STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error("Error saving sidebar state to localStorage:", error);
  }
}

function getSystemThemePreference(): ThemeValue {
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? THEME.DARK
      : THEME.LIGHT;
  }
  return THEME.LIGHT;
}

export function AppProvider({ children }: AppProviderProps) {
  const [leftCollapsed, setLeftCollapsed] = useState<boolean>(() => {
    const stored = loadSidebarStateFromStorage();
    return stored.leftCollapsed;
  });
  const [rightCollapsed, setRightCollapsed] = useState<boolean>(() => {
    const stored = loadSidebarStateFromStorage();
    return stored.rightCollapsed;
  });

  const [currentView, setCurrentView] = useState<ViewType>("dashboard");

  const [theme, setTheme] = useState<ThemeValue>(() => {
    const isManual = localStorage.getItem(THEME_MANUAL_OVERRIDE_KEY) === "true";
    if (isManual) {
      const savedTheme = localStorage.getItem(
        THEME_STORAGE_KEY
      ) as ThemeValue | null;
      return savedTheme || getSystemThemePreference();
    }

    return getSystemThemePreference();
  });

  useEffect(() => {
    saveSidebarStateToStorage({ leftCollapsed, rightCollapsed });
  }, [leftCollapsed, rightCollapsed]);

  useEffect(() => {
    if (theme === THEME.DARK) {
      document.documentElement.classList.add(THEME.DARK);
    } else {
      document.documentElement.classList.remove(THEME.DARK);
    }
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const isManual =
        localStorage.getItem(THEME_MANUAL_OVERRIDE_KEY) === "true";
      if (!isManual) {
        const newTheme = e.matches ? THEME.DARK : THEME.LIGHT;
        setTheme(newTheme);
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleSystemThemeChange);
      return () =>
        mediaQuery.removeEventListener("change", handleSystemThemeChange);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleSystemThemeChange);
      return () => mediaQuery.removeListener(handleSystemThemeChange);
    }
  }, []);

  const toggleLeft = useCallback(() => {
    setLeftCollapsed((prev) => !prev);
  }, []);

  const toggleRight = useCallback(() => {
    setRightCollapsed((prev) => !prev);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const newTheme = prev === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;

      localStorage.setItem(THEME_MANUAL_OVERRIDE_KEY, "true");
      return newTheme;
    });
  }, []);

  const value: AppContextType = {
    leftCollapsed,
    rightCollapsed,
    toggleLeft,
    toggleRight,
    theme,
    toggleTheme,
    currentView,
    setCurrentView,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext(): AppContextType {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
