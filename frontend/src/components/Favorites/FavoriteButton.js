import React, { useState } from "react";
import "./FavoriteButton.css";
import { useDispatch } from "react-redux";
import handleFavorites from "../../components/Favorites/HandleFavorites";
import { useEffect } from "react";

export default function FavoriteButton({ listingId, defaultFavorite }) {
    const dispatch = useDispatch();
    const [favorited, setFavorited] = useState(defaultFavorite);
  // console.log(favorited, defaultFavorite, 'f');

  useEffect(() => {
    setFavorited(defaultFavorite);
  }, [defaultFavorite]);
  
  const toggleFavorite = async (e) => {
      e.preventDefault();
      if (favorited) {
        await handleFavorites.removeFromFavorites(listingId, dispatch);
        setFavorited(false);
      } else {
        await handleFavorites.addToFavorites(listingId, dispatch);
        setFavorited(true);
      }
    };
  
    return (
      <div className="favorite-icon-container">
        <i className={`fa-solid fa-heart favorite-icon ${favorited ? 'favorited' : 'not-favorited'}`} onClick={toggleFavorite}></i>
      </div>
    );
}
