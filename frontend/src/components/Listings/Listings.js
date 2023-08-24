import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setListings } from '../../store/listingsReducer';
import MapWrapper from '../MapComp/MapWrapper';
import './Listings.css';

function ListingsPage() {
  const [showMap, setShowMap] = useState(false);
  const [highlightedListing, setHighlightedListing] = useState(null);
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.user);
  const state = useSelector(state => state.entities.listings);

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
  }, [dispatch]);

  if (!currentUser) {
    return <Redirect to="/" />;
  }

  if (!state) {
    return <div className="loading"><img src="/resfiles/R.gif" alt="loading" /></div>;
  }

  return (
    <div className="listings-page">
      <div className="toggle-button">
        <button onClick={() => setShowMap(!showMap)}>
          {showMap ? "Show List" : "Show Map"}
        </button>
      </div>
      <div className={`content ${showMap ? 'map-visible' : 'list-visible'}`}>
        {showMap ? (
          <MapWrapper items={Object.values(state).map(listing => ({
            id: listing.id,
            latitude: listing.latitude,
            longitude: listing.longitude
          }))} />
        ) : (
          <div className="listings-container">
            {Object.values(state).map((listing) => {
              const imageUrl = (listing.photos && listing.photos.length > 0)
                ? listing.photos[0].imageUrl
                : '/resfiles/default-profile-image.png';

              return (
                <Link
                  to={`/listings/${listing.id}`}
                  key={listing.id}
                  className={`listing-card ${highlightedListing === listing.id ? 'highlighted' : ''}`}
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
        )}
      </div>
    </div>
  );
}

export default ListingsPage;
