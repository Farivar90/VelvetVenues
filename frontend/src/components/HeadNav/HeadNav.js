import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from '../LogoutButton/LogoutButton';


const HeadNav = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <LogoutButton />
    </div>
  );
};

export default HeadNav;
