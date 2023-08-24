import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams, Redirect } from 'react-router-dom';
import csrfFetch from '../../store/csrf';


function EditListingPage() {
  const { id } = useParams();
  const currentUser = useSelector(state => state.session.user);
  const listingDetails = useSelector(state => state.entities.listings[id]);
  const dispatch = useDispatch();
  const history = useHistory();
  const amenities = useSelector(state => state.entities.amenities);

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

  useEffect(() => {
    if (listingDetails) {
        setFormData({
            userId: listingDetails.userId,
            price: listingDetails.price.toString(),
            lotSize: listingDetails.lotSize.toString(),
            livingArea: listingDetails.livingArea.toString(),
            location: listingDetails.location,
            bedrooms: listingDetails.bedrooms.toString(),
            fullBaths: listingDetails.fullBaths.toString(),
            halfBaths: listingDetails.halfBaths.toString(),
            garage: listingDetails.garage.toString(),
            built: listingDetails.built,
            description: listingDetails.description,
            contactInfo: listingDetails.contactInfo,
            photos: [],
          });
    }
  }, [listingDetails]);

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

  const [amenitiesChecked, setAmenities] =
   useState(listingDetails.amenities? Object.values(listingDetails.amenities).map(amenity => amenity.id) : []);
  
  const handleAmenityChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setAmenities((prevData) => [...prevData, parseInt(value)]);
    } else {
      setAmenities((prevData) => prevData.filter((amenity) => amenity !== parseInt(value)));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    setFormData(prevData => ({
      ...prevData,
      photos: [...prevData.photos, ...files],
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    formDataObject.append(`amenities`, amenitiesChecked);

    try {
      const response = await csrfFetch(`/api/listings/${id}`, {
        method: 'PUT',
        body: formDataObject,
      });

      if (response.ok) {
        const updatedListing = await response.json();
        dispatch({ type: 'UPDATE_LISTING', payload: updatedListing });
        history.push(`/listings/${id}`);
      }
    } catch (error) {
      console.error('Error updating listing:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await csrfFetch(`/api/listings/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        dispatch({ type: 'DELETE_LISTING', payload: id });
        history.push('/listings'); 
      }
    } catch (error) {
      console.error('Error deleting listing:', error);
    }
  };

  if (!currentUser) {
    return <Redirect to="/" />;
  }

  if (!listingDetails || !amenities) {
    return (
      <div className="loading">
        <img src="/resfiles/R.gif" alt="loading" />
      </div>
    );
  }

  return (
        <div className="create-listing-container">
          <h2>Edit your property</h2>
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
            {console.log(Object.values(amenities), 'am')}
            {console.log(Object.values(amenitiesChecked), 'ac')}
            {Object.values(amenities).map((amenity) => (
              <label key={amenity.id} className="amenity-label">
                <input
                  type="checkbox"
                  name="amenities"
                  value={amenity.id}
                  checked={amenitiesChecked.includes(amenity.id)}
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
            <button type="submit">Update Listing</button>
            <button type="button" onClick={handleDelete}>Delete Listing</button>
          </form>
        </div>
      );
}

export default EditListingPage;
