import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './CreateListing.css';

function CreateListingPage() {
  const currentUser = useSelector(state => state.session.user);

  const amenities = [
    "Swimming Pool",
    "Home Theater",
    "Spa and Wellness Area",
    "Wine Cellar",
    "Home Automation System",
    "Outdoor Entertainment Area",
    "Private Gym",
    "Private Spa",
    "Elevator",
    "Landscaped Gardens",
    "Guest House",
    "Home Office",
    "Chef's Kitchen",
    "Outdoor Pool House",
    "Tennis Court",
    "Art Gallery or Display Space",
    "Greenhouse",
    "Library",
    "Smart Security System",
    "Waterfront Access"
  ];

  const [formData, setFormData] = useState({
    userId: currentUser.id,
    price: '',
    lotSize: '',
    living_area: '',
    location: '',
    bedrooms: '',
    full_baths: '',
    half_baths: '',
    garage: '',
    built: '',
    description: '',
    contactInfo: '',
    amenities: [],
  });

  const handleAmenityChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      amenities: checked
        ? [...prevData.amenities, value]
        : prevData.amenities.filter((amenity) => amenity !== value),
    }));
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make an API request to create the listing with formData
      const response = await axios.post('/api/listings', {
        ...formData,
        user_id: currentUser.id,
      });
      // Handle success or redirect to the newly created listing
      console.log('Listing created:', response.data);
    } catch (error) {
      console.error('Error creating listing:', error);
    }
  };

  if (!currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="create-listing-container">
      <h2>List your property</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
            <label htmlFor="lotSize">Lot Size:</label>
        <input
          type="text"
          id="lotSize"
          name="lotSize"
          value={formData.lotSize}
          onChange={handleChange}
          required
        />
            <label htmlFor="living_area">Living Area:</label>
        <input
          type="text"
          id="living_area"
          name="living_area"
          value={formData.living_area}
          onChange={handleChange}
          required
        />
            <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
            <label htmlFor="bedrooms">Bedrooms:</label>
        <input
          type="text"
          id="bedrooms"
          name="bedrooms"
          value={formData.bedrooms}
          onChange={handleChange}
          required
        />
            <label htmlFor="full_baths">Full Baths:</label>
        <input
          type="text"
          id="full_baths"
          name="full_baths"
          value={formData.full_baths}
          onChange={handleChange}
          required
        />
            <label htmlFor="half_baths">Half Baths:</label>
        <input
            type="text"
            id="half_baths"
            name="half_baths"
            value={formData.half_baths}
            onChange={handleChange}
        />
            <label htmlFor="garage">Garage:</label>
        <input
          type="text"
          id="garage"
          name="garage"
          value={formData.garage}
          onChange={handleChange}
        />
            <label htmlFor="built">Built:</label>
        <input
          type="text"
          id="built"
          name="built"
          value={formData.built}
          onChange={handleChange}
          required
        />
        <label htmlFor="amenities">Select Amenities:</label>
        <div className="amenities-container">
            <label>Select Amenities:</label>
                <div className="amenities-list">
                    {amenities.map((amenity) => (
                    <label key={amenity} className="amenity-label">
                        <input
                        type="checkbox"
                        name="amenities"
                        value={amenity}
                        onChange={handleAmenityChange}
                        />
                        {amenity}
                    </label>
                    ))}
                </div>
        </div>
            <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <button type="submit">Create Listing</button>
      </form>
    </div>
  );
}

export default CreateListingPage;
