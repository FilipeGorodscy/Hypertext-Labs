export const useFavorites = () => {
  const getFavorites = () => JSON.parse(localStorage.getItem("favorites")) || {};

  const toggleFavorite = (date) => {
    const favorites = getFavorites();
    localStorage.setItem("favorites", JSON.stringify({ ...favorites, [date]: !favorites[date] }));
  };

  return [getFavorites(), { toggleFavorite }];
};
