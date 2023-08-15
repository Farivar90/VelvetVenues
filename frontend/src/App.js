import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage';
import UsersPage from './components/UsersPage';

const App = () => {
  return (
    <Router>

      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/users/:userId" component={UsersPage} />
      </Switch>
    </Router>
  );
};

export default App;
