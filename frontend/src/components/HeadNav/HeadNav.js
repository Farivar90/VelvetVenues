import React from 'react';
import { Link } from 'react-router-dom';
import './HeadNav.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

const HeadNav = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.user);

  const handleLogout = () => {
    dispatch(sessionActions.logout());
  };

  return (
    <div className="headnav">
      <nav className="menu-container">
        <input type="checkbox" id="toggle-menu" />
        <label htmlFor="toggle-menu" className="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <Link to="/listings" className="menu-logo">
          <img src="/resfiles/navlogo.png" alt="navlogo" />
        </Link>

        <div className="menu">
          <ul>
            <li>
              <Link to="/listings">Properties</Link>
              <div className="submenu">
                <ul>
                  <li>
                    <Link to="/listings">Buy</Link>
                  </li>
                  <li>
                    <Link to="/create-listing">Sell</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/forum">Forum</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to={`/users/${currentUser}`}>Profile</Link>
            </li>
            <li>
            <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HeadNav;
