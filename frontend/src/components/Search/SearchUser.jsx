import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import './Search.css';

function SearchUser() {
  const currentUser = useSelector(state => state.session.user);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchUsername = async () => {
    try {
      const response = await fetch(`/api/users?search=${searchTerm}`);
      const responseData = await response.json();
      const usersArray = Object.values(responseData);

      setSearchResults(usersArray);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleSearchFullname = async () => {
    try {
      const response = await fetch(`/api/users?full_name=${searchTerm}`);
      const responseData = await response.json();
      const usersArray = Object.values(responseData);

      setSearchResults(usersArray);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  useEffect(() => {
    setSearchResults([]);
    if (searchTerm) {
      handleSearchUsername();
      handleSearchFullname();
    }
  }, [searchTerm]);

  if (!currentUser) {
    return <Redirect to={`/`} />;
  }

  return (
    <div className="search">
      <h1 className="search-h1" >Search by username or full name</h1>
      <input className='search-input'
        type="text"
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
        placeholder="Search by username or full name"
      />
      <div className="user-profile-boxes">
        {/* <h2>Results:</h2> */}
        {searchResults.map(user => (
          <Link to={`/users/${user.id}`} key={user.id} className="profile-box">
            <img src={user.imageUrl} alt={`Profile of ${user.username}`} />
            <div>
              <p>{user.username}</p>
              <p>{user.fullName}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SearchUser;
