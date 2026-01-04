import { ChartPieSliceIcon } from "@phosphor-icons/react";
import { useTheme } from "./hooks/useTheme";

const styles = {
  container: {
    minHeight: "100vh",
    minWidth: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    backgroundColor: "var(--primary)",
    bacground: "var(--primary)",
  },
  h1Text: {
    color: "var(--custom-color)",
  },
};

function App() {
  const { theme, toggleTheme } = useTheme();

  return <div style={styles.container}></div>;
}

export default App;
