const listingsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_LISTINGS':
        return action.payload;
      default:
        return state;
    }
  };

export const setListings = (listings) => ({
    type: 'SET_LISTINGS',
    payload: listings,
  });
  

  export default listingsReducer;
  