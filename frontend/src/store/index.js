import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session';

const rootReducer = combineReducers({
    session
});

// Configure store with middleware
const configureStore = (preloadedState) => {
  let enhancer;

  if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
  } else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
  }

  return createStore(rootReducer, preloadedState, enhancer);
};

const store = configureStore();

export default store;
