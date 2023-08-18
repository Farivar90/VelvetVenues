import React from 'react';
import { Link } from 'react-router-dom';
import './HeadNav.css';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';


const HeadNav = () => {
  const dispatch = useDispatch();

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

        <Link to="/" className="menu-logo">
          <img src="/resfiles/navlogo.png" alt="navlogo" />
        </Link>

        <div className="menu">
          <ul>
            <li>
              <Link to="/listings">Properties</Link>
            </li>
            <li>
              <Link to="">Favorites</Link>
            </li>
            <li>
              <Link to="">Search</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="">Profile</Link>
            </li>
            <li className="menu li">
            <a className="menu-container a" onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HeadNav;
