import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditListingForm({ match, history }) {
  const [listing, setListing] = useState(null);

  const fetchListing = async () => {
    try {
      const response = await axios.get(`/api/listings/${match.params.id}`);
      setListing(response.data);
    } catch (error) {
      console.error("Error fetching listing:", error);
    }
  };

  useEffect(() => {
    fetchListing();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setListing(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`/api/listings/${match.params.id}`, listing);
      history.push(`/listings/${match.params.id}`);
    } catch (error) {
      console.error("Error updating listing:", error);
    }
  };

  if (!listing) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-listing-form">
      <h2>Edit Listing</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Location:</label>
          <input 
            type="text" 
            name="location" 
            value={listing.location} 
            onChange={handleInputChange} 
          />
        </div>
        <div>
          <label>Price:</label>
          <input 
            type="text" 
            name="price" 
            value={listing.price} 
            onChange={handleInputChange} 
          />
        </div>
        {/* You can add other fields similarly */}
        <button type="submit">Update Listing</button>
      </form>
    </div>
  );
}

export default EditListingForm;
