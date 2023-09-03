import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { setListings } from '../../store/listingsReducer';
import '../Listings/Listings.css';
import './Search.css';
import AdvancedSearchForm from './AdvancedSearchForm';

function SearchListings() {
  const currentUser = useSelector(state => state.session.user);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  // const userFavorites = useSelector(state => state.favorites);

  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

    const [advancedSearchFields, setAdvancedSearchFields] = useState({
    search: '',
    min_price: '',
    max_price: '',
    min_bedrooms: '',
    max_bedrooms: '',
    min_baths: '',
    max_baths: '',
    min_garage: '',
    max_garage: '',
    min_lot_size: '',
    max_lot_size: '',
    min_living_area: '',
    max_living_area: '',
    min_built: '',
    max_built: '',
    // amenities: []
  });


  const dispatch = useDispatch();

  const handleSearch = async () => {
    try {

      const params = { ...advancedSearchFields, search: searchTerm };
      const response = await axios.get(`/api/listings?${ params }`);
        dispatch(setListings(response.data));
      setSearchResults(Object.values(response.data));
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleOverlayClick = () => {
    setShowAdvancedSearch(false);
  };
  

  useEffect(() => {
    setSearchResults([]);
    if (searchTerm) {
      handleSearch();
    }
  }, [searchTerm, dispatch]);

  if (!currentUser) {
    return <Redirect to={`/`} />;
  }

  return (
    <div className='search'>
      <h1 className='search-h1'>Search Listings</h1>
      <input
        className='search-input'
        type="text"
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
        placeholder="Search by location"
      />
      <div className='advance-button'>
        <button
          className='advance-button'
          onClick={() => setShowAdvancedSearch(true)}
        >
          Advance Search
        </button> 
      </div>
      <div className="listings-container">
        {searchResults.map((listing) => {
          const imageUrl = (listing.photos && listing.photos.length > 0)
            ? listing.photos[0].imageUrl
            : '/resfiles/default-profile-image.png';

          return (
            <div className="listing-wrapper" key={listing.id}>
              <Link
                to={`/listings/${listing.id}`}
                className="listing-card"
              >
                <img
                  src={imageUrl}
                  alt={`${listing.id}'s img`}
                  className="listing-image"
                />
                <h2>{listing.location}</h2>
                <p className="price">${listing.price.toLocaleString("en-US")}</p>
              </Link>
            </div>
          );
        })}
      </div>
      {showAdvancedSearch && (
                    <div className="modal-overlay" onClick={handleOverlayClick}>
                      <AdvancedSearchForm
                        advancedSearchFields={advancedSearchFields}
                        setAdvancedSearchFields={setAdvancedSearchFields}
                        handleSearch={handleSearch}
                        setShowAdvancedSearch={setShowAdvancedSearch}
                      />
                    </div>
                  )}
    </div>
  );
}

export default SearchListings;
