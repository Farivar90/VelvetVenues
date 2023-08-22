import React from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import Map from './Map';

const MapWrapper = (props) => {
    return (
        <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY}>
            <Map {...props} />
        </Wrapper>
    );
}

export default MapWrapper;
