import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import listingsReducer, { setListings } from '../../store/listingsReducer';

function ListingsPage() {
  const [state, dispatch] = useReducer(listingsReducer, []);

  useEffect(() => {
    async function fetchListings() {
      try {
        const response = await axios.get('/api/listings');
        const listingsArray = Object.values(response.data);
        dispatch(setListings(listingsArray));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchListings();
  }, []);

  return (
    <div>
      {state.map(listing => (
        <div key={listing.id}>
          <h2>{listing.location}</h2>
          <p>Price: ${listing.price}</p>
          {/* Display other property details */}
        </div>
      ))}
    </div>
  );
}

export default ListingsPage;
