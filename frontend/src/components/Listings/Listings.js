import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import listingsReducer, { setListings } from '../../store/listingsReducer';
import './Listings.css';

function ListingsPage() {
  const [state, dispatch] = useReducer(listingsReducer, []);
  
  const currentUser = useSelector(state => state.session.user);
  
  useEffect(() => {
    async function fetchListings() {
      try {
        const response = await axios.get('/api/listings');
        const listingsArray = Object.values(response.data);
        dispatch(setListings(listingsArray));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchListings();
  }, []);
  
  // Redirect if user is not logged in
  if (!currentUser) {
    return <Redirect to={`/`} />;
  }
  
  return (
    <div className="listings-container" id="listings-page">
      {state.map((listing) => (
        <Link to={`/listings/${listing.id}`} key={listing.id} className="listing-card" id={`listing-${listing.id}`}>
          {listing.photo_url && <img src={listing.photo_url} alt="Listing" className="listing-image"/>}
          <h2 className="location-title">{listing.location}</h2>
          <p className="price">${listing.price}</p>
        </Link>
      ))}
    </div>
  );
}

export default ListingsPage;
