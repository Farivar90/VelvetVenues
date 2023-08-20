import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import './ListingDetailPage.css';

function ListingDetailPage() {
  const { id } = useParams();
  const [listingDetails, setListingDetails] = useState(null);

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

  if (!listingDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="listing-detail-container">
      <h2>{listingDetails.location}</h2>
      <p className="price">${listingDetails.price}</p>
      <p>{listingDetails.description}</p>
      <p>Contact: {listingDetails.contactInfo}</p>

      <h3>Amenities</h3>
      <ul>
        {listingDetails.amenities.map((amenity) => (
          <li key={amenity.id}>{amenity.amenity}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListingDetailPage;
