import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import handleFavorites from '../../components/Favorites/HandleFavorites';

function Favorites() {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.user);
  const userFavorites = useSelector(state => state.favorites) || [];

  useEffect(() => {
    // Populate favorites when component mounts
    handleFavorites.getUserFavorites(dispatch)
      .catch(error => {
        console.error("Failed to fetch user's favorites:", error);
      });
  }, [dispatch]);

  if (!currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Favorites</h1>
      <div>
        {userFavorites.length === 0 ? (
          <p>You have no favorites yet. Start exploring listings!</p>
        ) : (
          userFavorites.map(favorite => (
            <div key={favorite.id}>
              <Link to={`/listings/${favorite.listingId}`}>Listing {favorite.listingId}</Link>
              <button onClick={() => handleFavorites.removeFromFavorites(favorite.listingId, dispatch)}>
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
