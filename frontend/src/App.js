import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import UsersPage from './components/UsersPage/UsersPage';
import HeadNav from './components/HeadNav/HeadNav';
import Listings from './components/Listings/Listings';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import'./App.css';

const App = () => {
  
  return (
    <Router>
      <Route path="/" component={({ location }) => (
        location.pathname !== "/" ? <HeadNav /> : null
      )}/>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/listings" component={Listings} />
        <Route path="/users/:userId" component={UsersPage} />
        <Redirect to="/"/>
      </Switch>
      <footer id="footer">
    <p>© 2023 by F.A.  Imperial Estates. All rights reserved.</p>
  </footer>
    </Router>
  );
};

export default App;
