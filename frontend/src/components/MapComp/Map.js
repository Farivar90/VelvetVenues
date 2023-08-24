import React, { useState, useRef, useEffect } from 'react';

const Map = ({ items, markerEventHandlers, mapEventHandlers }) => {
    const [map, setMap] = useState(null);
    const mapRef = useRef(null);
    const markersRef = useRef({});
    const averageLat = items.reduce((sum, item) => sum + item.latitude, 0) / items.length;
    const averageLng = items.reduce((sum, item) => sum + item.longitude, 0) / items.length;
    const defaultCenter = { lat: averageLat, lng: averageLng };

    useEffect(() => {
        if (!map) {
            const newMap = new window.google.maps.Map(mapRef.current, {
                zoom: 4,
                center: defaultCenter
            });
            setMap(newMap);
        }
    }, [map]);

    useEffect(() => {
        console.log(items);
        if (!items) {
            return;
        }
        if (map) {
            items.forEach(item => {
                if (!markersRef.current[item.id]) {
                    const marker = new window.google.maps.Marker({
                        position: { lat: item.latitude, lng: item.longitude },
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
            console.log("markerEventHandlers:", markerEventHandlers);
            console.log("mapEventHandlers:", mapEventHandlers);
            Object.entries(mapEventHandlers).forEach(([event, handler]) => {
                map.addListener(event, handler);
            });
        }
    }, [map, items, markerEventHandlers, mapEventHandlers]);

    return <div ref={mapRef} style={{ width: '100%', height: '400px' }}>Map</div>;
}

export default Map;
