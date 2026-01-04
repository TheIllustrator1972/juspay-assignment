import { AppProvider } from "./contexts/AppContext";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Header from "./components/Header";
import { commonStyles } from "./commonStyles";

function MainContent() {
  return (
    <main className="main-content" style={commonStyles.container}>
      <Header />
    </main>
  );
}

function App() {
  return (
    <AppProvider>
      <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
        <LeftSidebar />
        <MainContent />
        <RightSidebar />
      </div>
    </AppProvider>
  );
}

export default App;
