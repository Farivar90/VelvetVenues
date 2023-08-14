import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux'; // Import Provider
import store from './store'; // Import your Redux store
import App from './App';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> {/* Provide the Redux store */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
