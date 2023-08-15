import React from 'react';
import { useParams } from 'react-router-dom';

const UsersPage = () => {
  // Get the userId parameter from the route
  const { userId } = useParams();

  return (
    <div>
      <h1>User Profile</h1>
      <p>Viewing profile for user with ID: {userId}</p>
    </div>
  );
};

export default UsersPage;
