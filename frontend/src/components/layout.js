import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <div className="logo">
          <Link to="/">VV</Link>
        </div>
        <div className="buttons">
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
