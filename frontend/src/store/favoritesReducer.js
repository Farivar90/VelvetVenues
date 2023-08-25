// favoritesReducer.js
const ADD_TO_FAVORITES = 'favorites/addToFavorites';
const SET_FAVORITES = 'favorites/setFavorites';
const REMOVE_FROM_FAVORITES = 'favorites/removeFromFavorites';
const initialState = [];
export const addToFavorites = (listingId) => ({
  type: ADD_TO_FAVORITES,
  payload: listingId,
});

export const removeFromFavorites = (listingId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: listingId,
});

export const setFavorites = (favorites) => ({
    type: SET_FAVORITES,
    payload: favorites,
  });

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      if (!state.includes(action.payload)) {
        return [...state, action.payload];
      }
      return state;

    case SET_FAVORITES:
        return [...action.payload];

    case REMOVE_FROM_FAVORITES:
      return state.filter(id => id !== action.payload);

    default:
      return state;
  }
};

export default favoritesReducer;
