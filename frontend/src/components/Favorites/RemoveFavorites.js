async function removeFromFavorites(listingId) {
    try {
      const response = await csrfFetch(`/favorites/${listingId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
      if (data.status === 'success') {
        // Handle success, e.g., show a success message
        getUserFavorites(); // Update user's favorites after removing
      } else {
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      // Handle fetch error
    }
  }
  

export default removeFromFavorites;