import { favouritesAndRecentlyStyles } from "./styles";

const FAVOURITES = [{ name: "Overview" }, { name: "Projects" }];

const FavouritesAndRecently = () => {
  return (
    <div style={favouritesAndRecentlyStyles.container}>
      <div style={favouritesAndRecentlyStyles.tabContainer}>
        <p style={favouritesAndRecentlyStyles.favouritesText}>Favourites</p>
        <p style={favouritesAndRecentlyStyles.recentlyText}>Recently</p>
      </div>
      <div style={favouritesAndRecentlyStyles.itemsContainer}>
        {FAVOURITES?.map((item) => (
          <div style={favouritesAndRecentlyStyles.itemContainer}>
            <div style={favouritesAndRecentlyStyles.dot} />
            <p style={favouritesAndRecentlyStyles.itemText}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouritesAndRecently;
