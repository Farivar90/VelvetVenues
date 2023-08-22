/* global google */


import React, { useRef, useEffect } from 'react';

function MapComponent({ listings }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new google.maps.Map(mapRef.current, {
      zoom: 10,
      center: {
        lat: listings[0]?.lat || 40.730610,
        lng: listings[0]?.lng || -73.935242,
      },
    });

    listings.forEach((listing) => {
      new google.maps.Marker({
        position: { lat: listing.lat, lng: listing.lng },
        map,
        title: listing.location,
      });
    });
  }, [listings]);

  return <div ref={mapRef} style={{ height: '400px', width: '100%' }}></div>;
}

export default MapComponent;
