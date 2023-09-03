import React, { useEffect } from 'react';
import { useParams, Link, Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';
import './ListingDetails.css';
import { useSelector, useDispatch } from 'react-redux';
import MapWrapper from '../MapComp/MapWrapper';

function ListingDetailPage() {
  const { id } = useParams();
  const currentUser = useSelector(state => state.session.user);
  const history = useHistory();
  const listingDetails = useSelector(state => state.entities.listings[id]);
  const dispatch = useDispatch();  

  useEffect(() => {
    async function fetchListingDetails() {
      try {
        const response = await axios.get(`/api/listings/${id}`);
        if(response.status === 200) {
          dispatch({ type: 'SET_LISTING', payload: response.data });
        }
      } catch (error) {
        console.error('Error fetching listing details:', error);
      }
    }

    fetchListingDetails();
  }, [id, dispatch]);

  if (!currentUser) {
    return <Redirect to={`/`} />;
  }

  if (!listingDetails) {
    return (
      <div className="loading">
        <img src="/resfiles/R.gif" alt="loading" />
      </div>
    );
  }
  return (
    <div className="listing-detail-container" id="listing-detail-page">
      <h2 className="location-title">{listingDetails.location}</h2>

      {listingDetails.photos && listingDetails.photos.length > 0 ? (
        <div className="listing-images-carousel">
          {listingDetails.photos.map((photo, index) => (
            <img
              key={index}
              src={photo.imageUrl || '/resfiles/default-profile-image.png'}
              alt={`Listing ${listingDetails.id} -${index + 1}`}
              className="listing-image"
            />
          ))}
        </div>
      ) : (
        <img src='/resfiles/default-profile-image.png' alt="Default listing" className="listing-image" />
      )}
      {currentUser === listingDetails.userId && (
      <button onClick={() => history.push(`/listings/${id}/edit`)}>Edit</button>
      )}
      <p className="price">${listingDetails.price.toLocaleString()}</p> 
      <p className="location">Location: {listingDetails.location}</p>
      <p className="lot_size">Lot Size: {listingDetails.lotSize} acres</p>
      <p className="living_area">Living Area: {listingDetails.livingArea} sqft</p>
      <p className="bedrooms">Bedrooms: {listingDetails.bedrooms}</p>
      <p className="bathrooms">Full Bathrooms: {listingDetails.fullBaths}</p>
      <p className="bathrooms">Half Bathrooms: {listingDetails.halfBaths}</p>
      <p className="garage">Garage: {listingDetails.garage}</p>
      <p className="year_built">Year Built: {listingDetails.built}</p>
      <p className="description">{listingDetails.description}</p>
      <p className="contact-info">{listingDetails.contactInfo}</p>
      <p className="posted-by">Posted by: <Link to={`/users/${listingDetails.userId}`} className="user-link">User {listingDetails.userId}</Link></p>
      
      <h3 className="amenities-title">Amenities</h3>
      <ul className="amenities-list">
        {listingDetails.amenities?.map((amenity) => (
          <li className="amenity-item" key={amenity.id}>{amenity.amenity}</li>
        ))}
      </ul>
      <div className="location-map">
        {listingDetails.latitude && listingDetails.longitude && (
          <MapWrapper
            items={[{ id: listingDetails.id, latitude: listingDetails.latitude, longitude: listingDetails.longitude }]}
          />
        )}
      </div>
      <div>
      <button onClick={() => history.push(`/listings`)}>Go back home</button>
      </div>
    </div>
  );
}

export default ListingDetailPage;
