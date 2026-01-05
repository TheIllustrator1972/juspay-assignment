import { AppProvider } from "./contexts/AppContext";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Header from "./components/Header";
import { commonStyles, mainContentGridStyles } from "./commonStyles";
import Trends from "./components/CenterContent/Trends/Trends";
import Projections from "./components/CenterContent/Projections/Projections";
import Revenue from "./components/CenterContent/Revenue/Revenue";

function MainContent() {
  return (
    <main className="main-content" style={commonStyles.container}>
      <Header />
      <div style={commonStyles.mainContentContainer}>
        <span style={commonStyles.sectionTitle}>eCommerce</span>
        <div style={mainContentGridStyles.container}>
          <div
            style={{
              ...mainContentGridStyles.baseItem,
              ...mainContentGridStyles.half,
            }}
          >
            <Trends />
          </div>
          <div
            style={{
              ...mainContentGridStyles.baseItem,
              ...mainContentGridStyles.half,
              backgroundColor: "var(--section-background)",
            }}
          >
            <Projections />
          </div>

          <div
            style={{
              ...mainContentGridStyles.baseItem,
              ...mainContentGridStyles.threeQuarters,
              backgroundColor: "var(--section-background)",
            }}
          >
            <Revenue />
          </div>
          <div
            style={{
              ...mainContentGridStyles.baseItem,
              ...mainContentGridStyles.oneQuarter,
            }}
          >
            25%
          </div>

          <div
            style={{
              ...mainContentGridStyles.baseItem,
              ...mainContentGridStyles.threeQuarters,
            }}
          >
            75%
          </div>
          <div
            style={{
              ...mainContentGridStyles.baseItem,
              ...mainContentGridStyles.oneQuarter,
            }}
          >
            25%
          </div>
        </div>
      </div>
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
