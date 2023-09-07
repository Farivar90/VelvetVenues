import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import './Search.css';

function SearchUser() {
  const currentUser = useSelector(state => state.session.user);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const fetchResults = async (queryParam, queryValue) => {
    try {
      const response = await fetch(`/api/users?${queryParam}=${queryValue}`);
      const responseData = await response.json();
      return Object.values(responseData);
    } catch (error) {
      console.error('Error fetching search results:', error);
      return [];
    }
  };

  useEffect(() => {
    setSearchResults([]);
  
    if (searchTerm) {
      Promise.all([
        fetchResults('search', searchTerm),
        fetchResults('full_name', searchTerm)
      ])
      .then(([usernameResults, fullNameResults]) => {
        const combinedResults = [...usernameResults, ...fullNameResults];
  
        // Removing duplicates based on 'id'
        const uniqueResults = Array.from(new Set(combinedResults.map(user => user.id)))
          .map(id => combinedResults.find(user => user.id === id));
  
        setSearchResults(uniqueResults);
      });
    }
  }, [searchTerm]);
  

  if (!currentUser) {
    return <Redirect to={`/`} />;
  }

  return (
    <div className="search">
      <h1 className="search-h1">Search by username or full name</h1>
      <input
        className='search-input'
        type="text"
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
        placeholder="Search by username or full name"
      />
      <div className="user-profile-boxes">
        {searchResults.map(user => (
          <div className="user-profile-box" key={user.id}>
            <Link to={`/users/${user.id}`} className="profile-box">
              <div className="user-image">
                <img src={user?.imageUrl || '/resfiles/default-profile-image.png'} alt={`Profile of ${user.username}`} />
              </div>
              <div>
                <p className='search-res'><strong>Username: </strong>{user.username}</p>
                <p className='search-res'><strong>Full Name: </strong>{user.fullName}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchUser;
