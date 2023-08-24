const initialState = {};
const amenitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AMENITIES':
      return action.payload;
    default:
      return state;
  }
};

export const setAmenities = (amenities) => ({
  type: 'SET_AMENITIES',
  payload: amenities,
});

export default amenitiesReducer;
