import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session';
import listingsReducer from './listingsReducer';
import amenitiesReducer from './amenitiesReducer';
import userReducer from './usersReducer';

const entitiesReducer = combineReducers({
  listings: listingsReducer,
  amenities: amenitiesReducer
});

const rootReducer = combineReducers({
  session,
  entities: entitiesReducer,
  users: userReducer
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
