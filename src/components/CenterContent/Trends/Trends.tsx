import StatCard from "./StatCard";
import { trendsStyles } from "./styles";
import { TRENDS_CONFIG } from "./constants";

const Trends = () => {
  return (
    <div style={trendsStyles.container}>
      {TRENDS_CONFIG.map((item) => (
        <StatCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Trends;
