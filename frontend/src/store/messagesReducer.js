import { FETCH_MESSAGES_SUCCESS, FETCH_MESSAGES_FAILURE } from './messages';

const initialState = {
  messages: [],
  error: null,
};

export default function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MESSAGES_SUCCESS:
      return { ...state, messages: action.messages, error: null };
    case FETCH_MESSAGES_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
}
