import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import UsersPage from './components/UsersPage/UsersPage';
import HeadNav from './components/HeadNav/HeadNav';
import Listings from './components/Listings/Listings';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import'./App.css';
import Favorites from './components/Favorites/Favorites';
import Search from './components/Search/Search';

const App = () => {
  
  return (
    <Router>
      <Route path="/" component={({ location }) => (
        location.pathname !== "/" ? <HeadNav /> : null
      )}/>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/listings" component={Listings} />
        {/* <Route path="/listings/:listingId" component={ListingDetail} /> */}
        <Route path="/users/:userId" component={UsersPage} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/search" component={Search} />
        <Redirect to="/"/>
      </Switch>
      <footer id="footer">
    <p>© 2023 by F.A.  Imperial Estates. All rights reserved.</p>
  </footer>
    </Router>
  );
};

export default App;
