import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "./Button";
import DatePicker from "./DatePicker";
import FavoriteButton from "./FavoriteButton";
import NavBar from "./NavBar";

export const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);
  const date = useSelector((state) => state.date);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&&date=${date}`);
      const data = await res.json();
      setPhotoData(data);
      dispatch({ type: "FETCH_PHOTO_SUCCEEDED", payload: { data, date } });
    }
  }, [date, dispatch]);

  if (!photoData) return <div />;

  return (
    <>
      <NavBar />
      <DatePicker />
      <div className="nasa-photo">
        {photoData.media_type === "image" ? (
          <img src={photoData.url} alt={photoData.title} className="photo" />
        ) : (
          <iframe
            title="space-video"
            src={photoData.url}
            frameBorder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
            className="photo"
          />
        )}
        <div>
          <h1>{photoData.title}</h1>
          <p className="date">{photoData.date}</p>
          <p className="explanation">{photoData.explanation}</p>
        </div>
      </div>
      <Button text="Previous" type="dec" />
      <Button text="Next" type="inc" />
      <FavoriteButton />
    </>
  );
}
