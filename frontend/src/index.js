import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import csrfFetch from './store/csrf';
import * as sessionActions from './store/session';

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.sessionActions = sessionActions;
}


function Root() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <App />
          {/* <Carrot /> */}
        </BrowserRouter>
      </Provider>
  );
}

const renderApplication = () => {
  const root = ReactDOM.createRoot(document.getElementById('root')) ;
  root.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  );
}

if (
  sessionStorage.getItem("currentUser") === null ||
  sessionStorage.getItem("X-CSRF-Token") === null 
) {
  store.dispatch(sessionActions.restoreSession()).then(renderApplication);
} else {
  renderApplication();
}