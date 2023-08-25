import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { removeFromFavorites } from '../../store/favoritesReducer';

function Favorites() {
  const currentUser = useSelector(state => state.session.user);
  const userFavorites = useSelector(state => state.favorites) || [];
  const dispatch = useDispatch();

  if (!currentUser) {
    return <Redirect to="/" />;
  }
// console.log(userFavorites);
  return (
    <div>
      <h1>Favoritos</h1>
      <div>
      {userFavorites.length === 0 ? (
        <p>You have no favorites yet. Start exploring listings!</p>
      ) : (
        userFavorites.map(listingId => (
          <div key={listingId}>
            <Link to={`/listings/${listingId}`}>Listing {listingId}</Link>
            <button onClick={() => dispatch(removeFromFavorites(listingId))}>
              Remove from Favorites
            </button>
          </div>
        ))
      )}
      </div>
    </div>
  );
}

export default Favorites;
