import { useState, useEffect } from 'react';

const useUserSearch = (initialSearchTerm = '') => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [searchResults, setSearchResults] = useState([]);

  const fetchResults = async (queryParam, queryValue) => {
    try {
      const response = await fetch(`/api/users?${queryParam}=${queryValue}`);
      const responseData = await response.json();
      return Object.values(responseData);
    } catch (error) {
      console.error('Error fetching search results:', error);
      return [];
    }
  };

  useEffect(() => {
    setSearchResults([]);

    if (searchTerm) {
      Promise.all([
        fetchResults('search', searchTerm),
        fetchResults('full_name', searchTerm)
      ])
      .then(([usernameResults, fullNameResults]) => {
        const combinedResults = [...usernameResults, ...fullNameResults];

        // Removing duplicates based on 'id'
        const uniqueResults = Array.from(new Set(combinedResults.map(user => user.id)))
          .map(id => combinedResults.find(user => user.id === id));

        setSearchResults(uniqueResults);
      });
    }
  }, [searchTerm]);

  return [searchResults, searchTerm, setSearchTerm, setSearchResults];

};

export default useUserSearch;
