import React from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import Map from './Map';

const MapWrapper = ({ items }) => {
  return (
    <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY}>
      {items.length > 0 ? (
        <Map items={items} />
      ) : (
        <div>No properties to display on the map.</div>
      )}
    </Wrapper>
  );
}

export default MapWrapper;
