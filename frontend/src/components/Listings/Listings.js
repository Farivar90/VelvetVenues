import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import listingsReducer, { setListings } from '../../store/listingsReducer';
import './Listings.css';

function ListingsPage() {
  const [state, dispatch] = useReducer(listingsReducer, []);

  useEffect(() => {
    async function fetchListings() {
      try {
        const response = await axios.get('/api/listings');
        const listingsArray = Object.values(response.data);
        dispatch(setListings(listingsArray));
      } catch (error) {

      }
    }

    fetchListings();
  }, []);
  
  if (state.length === 0) { 
    return <div className="loading">Loading...</div>;
  }
  return (
    <div className="listings-container">
      {state.map((listing) => (
        <Link to={`/listings/${listing.id}`} key={listing.id} className="listing-card">
          {listing.photos.length > 0 && (
            <img src={listing.photos[0].imageUrl} alt={`${listing.id}'s img`} className="listing-image" />
          )}
          <h2>{listing.location}</h2>
          <p className="price">${listing.price.toLocaleString("en-US")}</p>
        </Link>
      ))}
    </div>
  );
}

export default ListingsPage;
