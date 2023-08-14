import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationForm from './store/RegistrationForm';
import LoginForm from './store/LoginForm';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={RegistrationForm} />
        <Route path="/login" component={LoginForm} />
        {/* Add other routes */}
      </Switch>
    </Router>
  );
};

export default App;