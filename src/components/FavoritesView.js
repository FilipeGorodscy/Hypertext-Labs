import React from "react";
import { useFavorites } from "../hooks/useFavorite";

import FavoriteIcon from "./FavoriteIcon";

const FavoritesView = () => {
  const [favorites] = useFavorites();
  return (
    <div>
      <h2>Favorites</h2>
      {Object.entries(favorites)
        .filter(([date, isFavorite]) => isFavorite)
        .map(([date]) => (
          <FavoriteIcon date={date} />
        ))}
    </div>
  );
};

export default FavoritesView;
