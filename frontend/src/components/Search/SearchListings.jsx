import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { setListings } from  '../../store/listingsReducer';

function SearchListings() {
  const currentUser = useSelector(state => state.session.user);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const dispatch = useDispatch();

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/listings?search=${searchTerm}`);
      dispatch(setListings(response.data));
      setSearchResults(Object.values(response.data));
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  useEffect(() => {
    setSearchResults([]);
    if (searchTerm) {
      handleSearch();
    }
  }, [searchTerm, dispatch]);

  if (!currentUser) {
    return <Redirect to={`/`} />;
  }

  return (
    <div className='search'>
      <h1 className='search-h1'>Search Listings</h1>
      <input
        className='search-input'
        type="text"
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
        placeholder="Search by location"
      />
      <div className="search-results">
        {searchResults.map(listing => (
          <Link to={`/listings/${listing.id}`} key={listing.id} className="listing-box">
            <img src={listing.imageUrl} alt={`Listing ${listing.id}`} />
            <div>
              <p>{listing.location}</p>
              <p>${listing.price.toLocaleString("en-US")}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SearchListings;
