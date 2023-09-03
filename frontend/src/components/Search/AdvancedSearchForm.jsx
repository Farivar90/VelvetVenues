import React from 'react';
import { useState } from 'react';

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
        <label>Min Price</label>
        <input
          type="number"
          value={advancedSearchFields.min_price}
          onChange={event => handleFieldChange('min_price', event.target.value)}
        />
        <label>Max Price</label>
        <input
          type="number"
          value={advancedSearchFields.max_price}
          onChange={event => handleFieldChange('max_price', event.target.value)}
        />
        <label>Min Bedrooms</label>
        <input
          type="number"
          value={advancedSearchFields.min_bedrooms}
          onChange={event => handleFieldChange('min_bedrooms', event.target.value)}
        />
        <label>Max Bedrooms</label>
        <input
          type="number"
          value={advancedSearchFields.max_bedrooms}
          onChange={event => handleFieldChange('max_bedrooms', event.target.value)}
        />
        <label>Min Bathrooms</label>
        <input
          type="number"
          value={advancedSearchFields.min_baths}
          onChange={event => handleFieldChange('min_baths', event.target.value)}
        />
        <label>Max Bathrooms</label>
        <input
          type="number"
          value={advancedSearchFields.max_baths}
          onChange={event => handleFieldChange('max_baths', event.target.value)}
        />
            <label>Min Garage</label>
        <input
          type="number"
          value={advancedSearchFields.min_garage}
          onChange={event => handleFieldChange('min_garage', event.target.value)}
        />
        <label>Max Garage</label>
        <input
          type="number"
          value={advancedSearchFields.max_garage}
          onChange={event => handleFieldChange('max_garage', event.target.value)}
        />
        <label>Min Lot size</label>
        <input
          type="number"
          value={advancedSearchFields.min_lot_size}
          onChange={event => handleFieldChange('min_lot_size', event.target.value)}
        />
        <label>Max Lot size</label>
        <input
          type="number"
          value={advancedSearchFields.max_lot_size}
          onChange={event => handleFieldChange('max_lot_size', event.target.value)}
        />
        <label>Min Living area</label>
        <input
          type="number"
          value={advancedSearchFields.min_living_area}
          onChange={event => handleFieldChange('min_living_area', event.target.value)}
        />
        <label>Max Living area</label>
        <input
          type="number"
          value={advancedSearchFields.max_living_area}
          onChange={event => handleFieldChange('max_living_area', event.target.value)}
        />
        <label>Min Year built</label>
        <input
          type="number"
          value={advancedSearchFields.min_built}
          onChange={event => handleFieldChange('min_built', event.target.value)}
        />
        <label>Max Year built</label>
        <input
          type="number"
          value={advancedSearchFields.max_built}
          onChange={event => handleFieldChange('max_built', event.target.value)}
        />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default AdvancedSearchForm;

