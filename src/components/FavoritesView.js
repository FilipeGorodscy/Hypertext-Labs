import React from "react";

const FavoritesView = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites"));
  return <div>TEST</div>;
};

export default FavoritesView;
