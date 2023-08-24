import React, { useState, useRef, useEffect } from 'react';

const Map = ({ items, markerEventHandlers, mapEventHandlers }) => {
    const [map, setMap] = useState(null);
    const mapRef = useRef(null);
    const markersRef = useRef({});

    useEffect(() => {
        if (!map) {
            const newMap = new window.google.maps.Map(mapRef.current, {
                zoom: 8,
                center: { lat: 40.730610, lng: -73.935242 }, // Default to New York City
            });
            setMap(newMap);
        }
    }, [map]);

    useEffect(() => {
        if (map) {
            items.forEach(item => {
                if (!markersRef.current[item.id]) {
                    const marker = new window.google.maps.Marker({
                        position: { lat: item.lat, lng: item.lng },
                        map,
                    });

                    Object.entries(markerEventHandlers).forEach(([event, handler]) => {
                        marker.addListener(event, () => handler(item));
                    });

                    markersRef.current[item.id] = marker;
                }
            });

            Object.keys(markersRef.current).forEach(id => {
                if (!items.some(item => item.id === id)) {
                    markersRef.current[id].setMap(null);
                    delete markersRef.current[id];
                }
            });

            Object.entries(mapEventHandlers).forEach(([event, handler]) => {
                map.addListener(event, handler);
            });
        }
    }, [map, items, markerEventHandlers, mapEventHandlers]);

    return <div ref={mapRef} style={{ width: '100%', height: '400px' }}>Map</div>;
}

export default Map;
