import React, { useState } from "react";
import "./FavoriteButton.css";
import { useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../store/favoritesReducer";
import handleFavorites from "../../components/Favorites/HandleFavorites";

export default function FavoriteButton({ listingId, defaultFavorite = false }) {
  const dispatch = useDispatch();
  const [favorited, setFavorited] = useState(defaultFavorite);

  const toggleFavorite = (e) => {
    e.preventDefault();
    if (favorited) {
      dispatch(removeFromFavorites(listingId));
      handleFavorites.removeFromFavorites(listingId, dispatch);
    } else {
      dispatch(addToFavorites(listingId));
      handleFavorites.addToFavorites(listingId, dispatch);
    }
    setFavorited(!favorited);
}


  return (
    <div className="favorite-icon-container">
      <i className={`fa-solid fa-heart favorite-icon ${favorited ? 'favorited' : 'not-favorited'}`} onClick={toggleFavorite}></i>
    </div>
  )
}
