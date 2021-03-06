import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useFavorites = () => {
  const favorites = useSelector((state) => state.favorites);

  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(favorites).length === 0) {
      dispatch({
        type: "FAVORITES_FETCHED",
        payload: { favorites: JSON.parse(localStorage.getItem("favorites")) || {} },
      });
    }
  }, [favorites, dispatch]);

  const toggleFavorite = useCallback(
    (date) => {
      const newFavorites = { ...favorites, [date]: !favorites[date] };
      dispatch({ type: "FAVORITES_UPDATED", payload: { date, isFavorite: !favorites[date] } });
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    },
    [favorites]
  );

  return [favorites, { toggleFavorite }];
};
