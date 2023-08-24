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
import ListingDetailsPage from './components/Listings/ListingDetailsPage';
import CreateListingPage from './components/Listings/CreateListing';
import EditProfile from './components/UsersPage/EditProfile';
import EditListingPage from './components/Listings/EditListingForm';

const App = () => {
  
  return (
    <Router>
      <Route path="/" component={({ location }) => (
        location.pathname !== "/" ? <HeadNav /> : null
      )}/>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/listings" component={Listings} />
        <Route exact path="/listings/:id" component={ListingDetailsPage} />
        <Route exact path="/create-listing" component={CreateListingPage} />
        <Route exact path="/listings/:id/edit" component={EditListingPage} />
        <Route exact path="/users/:userId" component={UsersPage} />
        <Route exact path="/users/:userId/edit" component={EditProfile} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/search" component={Search} />
        <Redirect to="/"/>
      </Switch>
      <footer id="footer">
    <p>© 2023 by F.A.  Imperial Estates. All rights reserved.</p>
  </footer>
    </Router>
  );
};

export default App;
