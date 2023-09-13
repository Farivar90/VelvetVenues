import React from 'react';
import './Search.css'

function AdvancedSearchForm(props) {
  const {
    advancedSearchFields,
    setAdvancedSearchFields,
    handleSearch,
    setShowAdvancedSearch,
  } = props;

  const handleFieldChange = (field, value) => {
    setAdvancedSearchFields(prevFields => ({
      ...prevFields,
      [field]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleSearch();
    setShowAdvancedSearch(false);
  };

  const handleModalClick = event => {
    event.stopPropagation();
  };

  return (
      <div className="advanced-search-modal" onClick={handleModalClick}>
          <form onSubmit={handleSubmit} className="advanced-search-form">
              <div className="form-group">
                  {/* Price Section */}
                  <div className="form-section">
                      <h4>Price</h4>
                      <div className="as-form">
                          <label htmlFor="min_price">Min Price</label>
                          <input 
                              id="min_price" 
                              type="number" 
                              value={advancedSearchFields.min_price} 
                              onChange={event => handleFieldChange('min_price', event.target.value)}
                          />
                      </div>
                      <div className="as-form">
                          <label htmlFor="max_price">Max Price</label>
                          <input 
                              id="max_price" 
                              type="number" 
                              value={advancedSearchFields.max_price} 
                              onChange={event => handleFieldChange('max_price', event.target.value)}
                          />
                      </div>
                  </div>
                  
                  {/* Bedrooms Section */}
                  <div className="form-section">
                      <h4>Bedrooms</h4>
                      <div className="as-form">
                          <label htmlFor="min_bedrooms">Min Bedrooms</label>
                          <input 
                              id="min_bedrooms" 
                              type="number" 
                              value={advancedSearchFields.min_bedrooms} 
                              onChange={event => handleFieldChange('min_bedrooms', event.target.value)}
                          />
                      </div>
                      <div className="as-form">
                          <label htmlFor="max_bedrooms">Max Bedrooms</label>
                          <input 
                              id="max_bedrooms" 
                              type="number" 
                              value={advancedSearchFields.max_bedrooms} 
                              onChange={event => handleFieldChange('max_bedrooms', event.target.value)}
                          />
                      </div>
                  </div>
  
                  {/* Bathrooms Section */}
                  <div className="form-section">
                      <h4>Bathrooms</h4>
                      <div className="as-form">
                          <label htmlFor="min_baths">Min Bathrooms</label>
                          <input 
                              id="min_baths" 
                              type="number" 
                              value={advancedSearchFields.min_baths} 
                              onChange={event => handleFieldChange('min_baths', event.target.value)}
                          />
                      </div>
                      <div className="as-form">
                          <label htmlFor="max_baths">Max Bathrooms</label>
                          <input 
                              id="max_baths" 
                              type="number" 
                              value={advancedSearchFields.max_baths} 
                              onChange={event => handleFieldChange('max_baths', event.target.value)}
                          />
                      </div>
                  </div>
  
                  {/* Garage Section */}
                  <div className="form-section">
                      <h4>Garage</h4>
                      <div className="as-form">
                          <label htmlFor="min_garage">Min Garage</label>
                          <input 
                              id="min_garage" 
                              type="number" 
                              value={advancedSearchFields.min_garage} 
                              onChange={event => handleFieldChange('min_garage', event.target.value)}
                          />
                      </div>
                      <div className="as-form">
                          <label htmlFor="max_garage">Max Garage</label>
                          <input 
                              id="max_garage" 
                              type="number" 
                              value={advancedSearchFields.max_garage} 
                              onChange={event => handleFieldChange('max_garage', event.target.value)}
                          />
                      </div>
                  </div>
  
                  {/* Lot Size Section */}
                  <div className="form-section">
                      <h4>Lot Size</h4>
                      <div className="as-form">
                          <label htmlFor="min_lot_size">Min Lot Size</label>
                          <input 
                              id="min_lot_size" 
                              type="number" 
                              value={advancedSearchFields.min_lot_size} 
                              onChange={event => handleFieldChange('min_lot_size', event.target.value)}
                          />
                      </div>
                      <div className="as-form">
                          <label htmlFor="max_lot_size">Max Lot Size</label>
                          <input 
                              id="max_lot_size" 
                              type="number" 
                              value={advancedSearchFields.max_lot_size} 
                              onChange={event => handleFieldChange('max_lot_size', event.target.value)}
                          />
                      </div>
                  </div>
  
                  {/* Living Area Section */}
                  <div className="form-section">
                      <h4>Living Area</h4>
                      <div className="as-form">
                          <label htmlFor="min_living_area">Min Living Area</label>
                          <input 
                              id="min_living_area" 
                              type="number" 
                              value={advancedSearchFields.min_living_area} 
                              onChange={event => handleFieldChange('min_living_area', event.target.value)}
                          />
                      </div>
                      <div className="as-form">
                          <label htmlFor="max_living_area">Max Living Area</label>
                          <input 
                              id="max_living_area" 
                              type="number" 
                              value={advancedSearchFields.max_living_area} 
                              onChange={event => handleFieldChange('max_living_area', event.target.value)}
                          />
                      </div>
                  </div>
  
                  {/* Year Built Section */}
                  <div className="form-section">
                      <h4>Year Built</h4>
                      <div className="as-form">
                          <label htmlFor="min_built">Min Year Built</label>
                          <input 
                              id="min_built" 
                              type="number" 
                              value={advancedSearchFields.min_built} 
                              onChange={event => handleFieldChange('min_built', event.target.value)}
                          />
                      </div>
                      <div className="as-form">
                          <label htmlFor="max_built">Max Year Built</label>
                          <input 
                              id="max_built" 
                              type="number" 
                              value={advancedSearchFields.max_built} 
                              onChange={event => handleFieldChange('max_built', event.target.value)}
                          />
                      </div>
                  </div>
              </div>
  
              <div className="submit-btn-container">
                  <button type="submit" className="search-btn">Search</button>
              </div>
          </form>
      </div>
  );
  
}

export default AdvancedSearchForm;
