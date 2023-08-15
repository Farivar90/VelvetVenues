import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationForm from './store/RegistrationForm';
import LoginForm from './store/LoginForm';
import MainPage from './components/MainPage';

const App = () => {
  return (
    <Router>

      <Switch>
        <Route path="/register" component={RegistrationForm} />
        <Route path="/login" component={LoginForm} />
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>
  );
};

export default App;
