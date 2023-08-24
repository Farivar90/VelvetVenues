import React from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import Map from './Map';

const MapWrapper = ({ items }) => {
  return (
    <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY}>
      <Map items={items} />
    </Wrapper>
  );
}

export default MapWrapper;
