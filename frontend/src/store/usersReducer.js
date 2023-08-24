
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
      default:
        return state;
    }
  }
  
  export default userReducer;
  