import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import UsersPage from './components/UsersPage/UsersPage';
import HeadNav from './components/HeadNav/HeadNav';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const App = () => {
  // const location = useLocation();

  // Check if the current path is not the main page
  // const isMainPage = location.pathname === '/';
  // {isMainPage ? null : <HeadNav />}
  
  return (
    <Router>
      <Route path="/" component={({ location }) => (
        location.pathname !== "/" ? <HeadNav /> : null
      )}/>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/users/:userId" component={UsersPage} />
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
};

export default App;
