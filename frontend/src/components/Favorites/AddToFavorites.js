async function addToFavorites(listingId) {
    try {
      const response = await csrfFetch('/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ listing_id: listingId }),
      });
  
      const data = await response.json();
      if (data.status === 'success') {
        // Handle success, e.g., show a success message
        getUserFavorites(); // Update user's favorites after adding
      } else {
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      // Handle fetch error
    }
  }
  
  export default addToFavorites;