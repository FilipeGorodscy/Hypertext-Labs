import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiKey } from "./NasaPhoto";

const FavoriteIcon = ({ date }) => {
  const url = useSelector((state) => state.images[date]?.url);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!url) {
      fetchPhoto();
    }
    async function fetchPhoto() {
      const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&&date=${date}`);
      const data = await res.json();
      dispatch({ type: "FETCH_PHOTO_SUCCEEDED", payload: { data, date } });
    }
  }, [date, dispatch]);

  return (
    <div>
      <h3>{date}</h3>
      <img src={url} height={100} />
    </div>
  );
};

export default FavoriteIcon;
