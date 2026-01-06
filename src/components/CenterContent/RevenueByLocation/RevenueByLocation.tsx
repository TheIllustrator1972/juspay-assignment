import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { useAppContext } from "../../../contexts/AppContext";
import { commonStyles } from "../../../commonStyles";
import { revenueByLocationStyles } from "./styles";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface LocationData {
  name: string;
  coordinates: [number, number];
  revenue: number;
}

const locations: LocationData[] = [
  { name: "New York", coordinates: [-74.006, 40.7128], revenue: 72 },
  { name: "San Francisco", coordinates: [-122.4194, 37.7749], revenue: 39 },
  { name: "Sydney", coordinates: [151.2093, -33.8688], revenue: 25 },
  //   { name: "Singapore", coordinates: [103.8198, 1.3521], revenue: 61 },
];

const RevenueByLocation = () => {
  const { theme } = useAppContext();

  // Find max revenue for progress bar calculation
  const maxRevenue = Math.max(...locations.map((loc) => loc.revenue));

  return (
    <div style={revenueByLocationStyles.container}>
      <span
        style={{
          ...commonStyles.sectionTitle,
          ...revenueByLocationStyles.title,
        }}
      >
        Revenue by Location
      </span>

      <div style={revenueByLocationStyles.mapContainer}>
        <ComposableMap
          projectionConfig={{
            scale: 200,
            center: [0, 0],
          }}
          style={revenueByLocationStyles.map}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="var(--map-country-fill)"
                  stroke="var(--light-highlight)"
                  style={revenueByLocationStyles.geography}
                />
              ))
            }
          </Geographies>
          {locations.map((location, index) => (
            <Marker key={index} coordinates={location.coordinates}>
              <g>
                <circle
                  r={8}
                  fill="var(--map-pin-color)"
                  opacity={0.3}
                  style={revenueByLocationStyles.pinGlow}
                />
                <circle
                  r={6}
                  fill="var(--map-pin-color)"
                  style={revenueByLocationStyles.pin}
                />
              </g>
            </Marker>
          ))}
        </ComposableMap>
      </div>

      {/* Location List */}
      <div style={revenueByLocationStyles.locationList}>
        {locations.map((location) => {
          const progressPercentage = (location.revenue / maxRevenue) * 100;
          return (
            <div
              key={location.name}
              style={revenueByLocationStyles.locationItem}
            >
              <div style={revenueByLocationStyles.locationHeader}>
                <span style={revenueByLocationStyles.locationName}>
                  {location.name}
                </span>
                <span style={revenueByLocationStyles.locationRevenue}>
                  {location.revenue}K
                </span>
              </div>
              <div style={revenueByLocationStyles.progressBarContainer}>
                <div
                  style={revenueByLocationStyles.getProgressBar(
                    progressPercentage
                  )}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RevenueByLocation;
