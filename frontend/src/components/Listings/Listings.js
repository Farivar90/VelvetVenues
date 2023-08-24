import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import listingsReducer, { setListings } from '../../store/listingsReducer';
import './Listings.css';
import { useDispatch, useSelector } from 'react-redux';

function ListingsPage() {
  const dispatch = useDispatch();
  const [highlightedListing, setHighlightedListing] = useState(null);
  
  const state = useSelector(state => {
    return state.entities.listings ;
  });

  useEffect(() => {
    async function fetchListings() {
      try {
        const response = await axios.get('/api/listings');
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
       const cardStyle = highlightedListing === listing.id ? { boxShadow: '0px 0px 10px 2px #000' } : {};
  
       return (
         <Link 
           to={`/listings/${listing.id}`} 
           key={listing.id} 
           className="listing-card" 
           style={cardStyle}
           onMouseOver={() => setHighlightedListing(listing.id)}
           onMouseOut={() => setHighlightedListing(null)}
         >
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
