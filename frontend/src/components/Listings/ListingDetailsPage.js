import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ListingDetails.css';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function ListingDetailPage() {
  const { id, userId } = useParams();
  const [listingDetails, setListingDetails] = useState(null);
  const currentUser = useSelector(state => state.session.user);

  useEffect(() => {
    if (userId !== undefined) {
      axios.get(`/api/users/${userId}`)
        .then(response => {
          setListingDetails(response.data);
        })
        .catch(error => {
          console.error('Error fetching user:', error);
        });
    }
  }, [userId]);
  

  useEffect(() => {
    async function fetchListingDetails() {
      try {
        const response = await axios.get(`/api/listings/${id}`);
        setListingDetails(response.data);
      } catch (error) {
        console.error('Error fetching listing details:', error);
      }
    }

    fetchListingDetails();
  }, [id]);

  if (!currentUser) {
    return <Redirect to={`/`} />;
  }

  if (!listingDetails) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="listing-detail-container" id="listing-detail-page">
      <h2 className="location-title">{listingDetails.location}</h2>
      <p className="price">${listingDetails.price}</p>
      <p className="description">{listingDetails.description}</p>
      <p className="contact-info">Contact: {listingDetails.contactInfo}</p>
      <p className="posted-by">Posted by: {listingDetails.userId}</p>

      <h3 className="amenities-title">Amenities</h3>
      <ul className="amenities-list">
        {listingDetails.amenities.map((amenity) => (
          <li className="amenity-item" key={amenity.id}>{amenity.amenity}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListingDetailPage;
