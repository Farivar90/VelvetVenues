import csrfFetch from '../../store/csrf';
import {setFavorites} from '../../store/favoritesReducer';

async function getUserFavorites(dispatch) {
  try {
    const response = await csrfFetch('/api/user/favorites');
    const data = await response.json();
    if (data.favorites) {
      dispatch(setFavorites(data.favorites));
    } else {
      console.error("Unexpected data format from server:", data);
    }
  } catch (error) {
    console.error("Failed to fetch user's favorites:", error);
  }
}

async function addToFavorites(listingId, dispatch) {
  try {
    const response = await csrfFetch('/favorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ listing_id: listingId }),
    });

    const data = await response.json();
    if (data.status === 'success') {
      getUserFavorites(dispatch);
    } else {
      console.error("Failed to add to favorites:", data.message);
    }
  } catch (error) {
    console.error("Fetch error when adding to favorites:", error);
  }
}

async function removeFromFavorites(listingId, dispatch) {
  try {
    const response = await csrfFetch(`/favorites/${listingId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    if (data.status === 'success') {
      getUserFavorites(dispatch);
    } else {
      console.error("Failed to remove from favorites:", data.message);
    }
  } catch (error) {
    console.error("Fetch error when removing from favorites:", error);
  }
}

const handleFavorites = { getUserFavorites, addToFavorites, removeFromFavorites };
export default handleFavorites;
