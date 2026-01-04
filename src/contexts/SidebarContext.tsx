import { createContext, useContext, useState, useCallback, useEffect } from "react";
import type { ReactNode } from "react";

const STORAGE_KEY = "sidebar-state";

interface SidebarState {
  leftCollapsed: boolean;
  rightCollapsed: boolean;
}

interface SidebarContextType {
  leftCollapsed: boolean;
  rightCollapsed: boolean;
  toggleLeft: () => void;
  toggleRight: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

interface SidebarProviderProps {
  children: ReactNode;
}

function loadStateFromStorage(): SidebarState {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
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

function saveStateToStorage(state: SidebarState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error("Error saving sidebar state to localStorage:", error);
  }
}

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [leftCollapsed, setLeftCollapsed] = useState<boolean>(() => {
    const stored = loadStateFromStorage();
    return stored.leftCollapsed;
  });
  const [rightCollapsed, setRightCollapsed] = useState<boolean>(() => {
    const stored = loadStateFromStorage();
    return stored.rightCollapsed;
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    saveStateToStorage({ leftCollapsed, rightCollapsed });
  }, [leftCollapsed, rightCollapsed]);

  const toggleLeft = useCallback(() => {
    setLeftCollapsed((prev) => !prev);
  }, []);

  const toggleRight = useCallback(() => {
    setRightCollapsed((prev) => !prev);
  }, []);

  const value: SidebarContextType = {
    leftCollapsed,
    rightCollapsed,
    toggleLeft,
    toggleRight,
  };

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebarContext(): SidebarContextType {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebarContext must be used within a SidebarProvider");
  }
  return context;
}

