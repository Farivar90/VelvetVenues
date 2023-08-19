import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'; 

const UsersPage = () => {
  const currentUser = useSelector(state => state.session.user);
  const { userId } = useParams();

  if (!currentUser) {
    return <Redirect to={`/`} />;
  }

  return (
    <div>
      User: {currentUser}, logged in as user with id={userId}.
      <h1>User Profile</h1>
      <p>Viewing profile for user with ID: {userId}</p>
      <p>
        {/* <Link to={`/users/${userId}/edit`}>Edit Profile</Link> */}
      </p>
    </div>
  );
};

export default UsersPage;

