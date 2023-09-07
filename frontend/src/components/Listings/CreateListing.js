import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './CreateListing.css';
import csrfFetch from '../../store/csrf';
import { useHistory } from 'react-router-dom';

function CreateListingPage() {
  const currentUser = useSelector(state => state.session.user);
  const amenities = useSelector(state => {
    return state.entities.amenities;
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const [amenitiesChecked, setAmenities] = useState([]); // Add this line

  
  useEffect(() => {
    async function fetchAmenities() {
      try {
        const response = await csrfFetch('/api/amenities');
        if (response.ok) {
          const amenities = await response.json();
          dispatch({ type: 'SET_AMENITIES', payload: amenities });
        }
      } catch (error) {
        console.error('Failed to fetch amenities:', error);
      }
    }
  
    fetchAmenities();
  
  }, [dispatch]);
  
  const [formData, setFormData] = useState({
    userId: currentUser,
    price: '',
    lotSize: '',
    livingArea: '',
    location: '',
    bedrooms: 0,
    fullBaths: 0,
    halfBaths: 0,
    garage: 0,
    built: '',
    description: '',
    contactInfo: '',
    photos: [],
  });



  const handleAmenityChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setAmenities((prevData) => [...prevData, value]);
    } else {
      setAmenities((prevData) => prevData.filter((amenity) => amenity !== value));
    }
  };
    
    const handleImageChange = (e) => {
      setFormData(prevData => ({
        ...prevData,
        photos: [...prevData.photos, e.target.files[0]],
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
      
      if (!formData.price || parseFloat(formData.price) < 20000000 || !formData.lotSize || !formData.livingArea || !formData.location ||  !formData.built || !formData.contactInfo) {
        alert("All required fields must be filled out correctly. Remember that the price should be at least $20,000,000.");
        return;
    }

    const formDataObject = new FormData();

    for (const key in formData) {
      if (key === "photos") {
        formData[key].forEach((file) => {
          formDataObject.append(`listing[photos][]`, file);
        });
      } else {
        formDataObject.append(`listing[${key}]`, formData[key]);
      }
  }
    formDataObject.append('amenities', amenitiesChecked);
    
    try {
      const response = await csrfFetch('/api/listings',{
        method: 'POST',
        body: formDataObject
      });
      // console.log('Listing created:', response.data);
      if(response.ok){
      const res = await response.json()
      dispatch({type: 'CEATE_LISTING', payload: res})
      history.push(`/listings/${res.id}`);
      }
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
      <h3>Property Details</h3>   
      <form onSubmit={handleSubmit} encType="multipart/form-data">
      <label htmlFor="image">Upload Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleImageChange}
          multiple
        />
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
            <label htmlFor="livingArea">Living Area:</label>
        <input
          type="text"
          id="livingArea"
          name="livingArea"
          value={formData.livingArea}
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
        <select
          type="text"
          id="bedrooms"
          name="bedrooms"
          value={formData.bedrooms}
          onChange={handleChange}
          required
        >
          {[...Array(35)].map((_, i) => 
            <option key={i} value={i }>{i }</option>
          )}
        </select>
            <label htmlFor="full_baths">Full Baths:</label>
        <select
          type="text"
          id="full_baths"
          name="full_baths"
          value={formData.full_baths}
          onChange={handleChange}
          required
        >
          {[...Array(35)].map((_, i) => 
            <option key={i} value={i }>{i }</option>
          )}
        </select>
            <label htmlFor="half_baths">Half Baths:</label>
        <select
            type="text"
            id="half_baths"
            name="half_baths"
            value={formData.half_baths}
            onChange={handleChange}
        >
          {[...Array(35)].map((_, i) => 
            <option key={i} value={i }>{i }</option>
          )}
        </select>
            <label htmlFor="garage">Garage:</label>
        <select
          type="text"
          id="garage"
          name="garage"
          value={formData.garage}
          onChange={handleChange}
        >
          {[...Array(40)].map((_, i) => 
            <option key={i} value={i}>{i}</option>
          )}
        </select>
            <label htmlFor="built">Built:</label>
        <input
          type="text"
          id="built"
          name="built"
          value={formData.built}
          onChange={handleChange}
          required
        />
            <label htmlFor="contactInfo">Contact Info:</label>
        <input
          type="text"
          id="contactInfo"
          name="contactInfo"
          value={formData.contactInfo}
          onChange={handleChange}
          required
        />
        <label htmlFor="amenities">Select Amenities:</label>
        <div className="amenities-container">
                <div className="amenities-list">
                    {Object.values(amenities).map((amenity) => (
                    <label key={amenity.id} className="amenity-label">
                        <input
                        type="checkbox"
                        name="amenities"
                        value={amenity.id}
                        onChange={handleAmenityChange}
                        />
                        {amenity.amenity}
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
