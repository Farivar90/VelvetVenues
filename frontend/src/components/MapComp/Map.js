import React, { useState, useRef, useEffect } from 'react';

const Map = ({ items}) => {
    const [map, setMap] = useState(null);
    const mapRef = useRef(null);
    const markersRef = useRef({});
    const averageLat = items.reduce((sum, item) => sum + item.latitude, 0) / items.length;
    const averageLng = items.reduce((sum, item) => sum + item.longitude, 0) / items.length;
    const defaultCenter = { lat: averageLat, lng: averageLng };

    useEffect(() => {
        if (!map) {
            const newMap = new window.google.maps.Map(mapRef.current, {
                zoom: 2,
                center: defaultCenter
            });
            setMap(newMap);
        }
    }, [map]);

    const icon = {
        url: '/resfiles/pin.png',
        scaledSize: new window.google.maps.Size(35, 35),
        origin: new window.google.maps.Point(0, 0),
        anchor: new window.google.maps.Point(20, 40)
    }

    useEffect(() => {
        if (!items) {
            return;
        }
        if (map) {
            items.forEach(item => {
                if (!markersRef.current[item.id]) {
                    const marker = new window.google.maps.Marker({
                        position: { lat: item.latitude, lng: item.longitude },
                        map,
                        icon
                    });
                        marker.addListener('click', () => {
                        window.location.href = `/listings/${item.id}`;
                    });
                    markersRef.current[item.id] = marker;
                }
            });

        }
    }, [map, items]);

    return <div ref={mapRef} style={{ width: '100%', height: '400px' }}>Map</div>;
}

export default Map;
