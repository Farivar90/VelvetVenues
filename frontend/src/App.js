import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import UsersPage from './components/UsersPage/UsersPage';
import LogoutButton from './components/LogoutButton/LogoutButton';

const PrivateRoute = ({ component: Component, isLoggedIn, onLogout, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? (
        <>
          <LogoutButton onLogout={onLogout} />
          <Component {...props} />
        </>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform your login logic here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform your logout logic here
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <MainPage {...props} onLogin={handleLogin} />}
        />
        <PrivateRoute
          path="/users/:userId"
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
          component={UsersPage}
        />
      </Switch>
    </Router>
  );
};

export default App;
