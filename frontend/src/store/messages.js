// actions/messages.js
import axios from 'axios';

export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE';

export const fetchMessages = () => {
    return (dispatch) => {
      axios.get('/api/messages')
        .then((response) => {
          dispatch({ type: FETCH_MESSAGES_SUCCESS, messages: response.data });
        })
        .catch((error) => {
          dispatch({ type: FETCH_MESSAGES_FAILURE, error });
        });
    };
  };
