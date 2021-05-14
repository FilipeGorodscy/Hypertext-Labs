import React from "react";
import { useFavorites } from "../hooks/useFavorite";

import FavoriteIcon from "./FavoriteIcon";

const FavoritesView = () => {
  const [favorites] = useFavorites();
  return (
    <div>
      {Object.entries(favorites)
        .filter(([date, isFavorite]) => isFavorite)
        .map(([date]) => (
          <FavoriteIcon date={date} />
        ))}
    </div>
  );
};

export default FavoritesView;
