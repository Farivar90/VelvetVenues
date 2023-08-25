
const initialState = {
    users: {},
  };
  
  function userReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          users: {
            ...state.users,
            [action.payload.id]: action.payload,
          },
        };
        case 'UPDATE_FAVORITES':
          return {
            ...state,
            user: { ...state.user, favoriteListings: action.payload },
          };
      default:
        return state;
    }
  }
  
  export default userReducer;
  