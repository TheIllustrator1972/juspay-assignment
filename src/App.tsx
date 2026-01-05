import { AppProvider } from "./contexts/AppContext";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Header from "./components/Header";
import { commonStyles, mainContentGridStyles } from "./commonStyles";
import Trends from "./components/CenterContent/Trends/Trends";
import Projections from "./components/CenterContent/Projections/Projections";

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
            <div style={{ display: "flex", flexDirection: "column", width: '100%', height: '100%' }}>

            <span style={{...commonStyles.sectionTitle, padding: '24px 0px 0px 24px'}}>Projections vs Actuals</span>
            <Projections />
            </div>
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
