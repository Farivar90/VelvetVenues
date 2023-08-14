import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import RegistrationForm from './store/RegistrationForm';
import LoginForm from './store/LoginForm';
import MainPage from './components/MainPage';

const App = () => {
  return (
    <Router>
      <header>
        <Link to="/">
          <img src="/resfiles/Logo.png" alt="Logo" />
        </Link>
        <div>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      </header>

      <Switch>
        <Route path="/register" component={RegistrationForm} />
        <Route path="/login" component={LoginForm} />
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>
  );
};

export default App;
