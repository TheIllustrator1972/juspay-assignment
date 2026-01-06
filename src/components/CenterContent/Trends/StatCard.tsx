import { THEME } from "../../../constants";
import { useAppContext } from "../../../contexts/AppContext";
import { statCardStyles, trendsStyles } from "./styles";

//@ts-ignore
const StatCard = ({ item }) => {
  const { theme, setCurrentView } = useAppContext();
  const cardTheme =
    item.colors[theme === THEME.DARK ? THEME.DARK : THEME.LIGHT];

  console.log(theme);
  const cardStyle = {
    ...trendsStyles.cardBase,
    backgroundColor: cardTheme.background,
    cursor: item.id === "orders" ? "pointer" : "default",
  };

  const handleClick = () => {
    if (item.id === "orders") {
      setCurrentView("orders");
    }
  };

  return (
    <div style={cardStyle} onClick={handleClick}>
      <div style={{ ...statCardStyles.title, color: cardTheme.text }}>
        {item.title}
      </div>
      <div style={statCardStyles.textContainer}>
        <h2
          style={{
            ...statCardStyles.value,
            color: cardTheme.value,
          }}
        >
          {item.value}
        </h2>
        <span
          style={{
            ...statCardStyles.trend,
            color: cardTheme.text,
          }}
        >
          {item.trend} {item.isUp ? "↗" : "↘"}
        </span>
      </div>
    </div>
  );
};
export default StatCard;
