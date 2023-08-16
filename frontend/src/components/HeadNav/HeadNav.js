import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from '../LogoutButton/LogoutButton';


const HeadNav = () => {
  return (
    <div>
      <Link to="/">Logo</Link> {/* Replace with your logo */}
      <LogoutButton />
    </div>
  );
};

export default HeadNav;
