import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import listingsReducer, { setListings } from '../../store/listingsReducer';
import './Listings.css';
import { useDispatch, useSelector } from 'react-redux';


function ListingsPage() {
  const dispatch = useDispatch();
  const state = useSelector(state => {
    return state.entities.listings ;
  });

  useEffect(() => {
    async function fetchListings() {
      try {
        const response = await axios.get('/api/listings');
        console.log(response);
        dispatch(setListings(response.data));
      } catch (error) {
        console.error("Failed to fetch listings:", error);
      }
    }

    fetchListings();
  }, []);
  
  if (!state) { 
    return <div className="loading"><img src="/resfiles/R.gif" alt="loading" /></div>;
  }
  return (
    <div className="listings-container">
     {Object.values(state).map((listing) => {
  const imageUrl = (listing.photos && listing.photos.length > 0) ? 
                   listing.photos[0].imageUrl : 
                   '/resfiles/default-profile-image.png';
  
  return (
    <Link to={`/listings/${listing.id}`} key={listing.id} className="listing-card">
      <img 
        src={imageUrl} 
        alt={`${listing.id}'s img`} 
        className="listing-image" 
      />
      <h2>{listing.location}</h2>
      <p className="price">${listing.price.toLocaleString("en-US")}</p>
    </Link>
  );
})}

    </div>
  );
}

export default ListingsPage;
