import React from "react";
import { useSelector } from "react-redux";

import { useFavorites } from "../hooks/useFavorite";

const FavoriteButton = () => {
  const date = useSelector((state) => state.date);
  const [_, { toggleFavorite }] = useFavorites();
  const onFavorite = () => {
    toggleFavorite(date);
  };

  return <button onClick={onFavorite}>Favorite</button>;
};

export default FavoriteButton;
