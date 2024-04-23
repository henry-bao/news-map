import mapboxgl from 'mapbox-gl';
import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

import geoJson from '../data/chicago-parks.json';
import Marker from './Marker';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JvdXBvbmUiLCJhIjoiY2x2Nzd2ZHJtMDc3YjJpcXY5a2V0d2c4MyJ9.87JbNopJfDz9J5qV2VjePQ';

function Map() {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/dark-v11',
            center: [-87.65, 41.84],
            zoom: 10,
        });

        geoJson.features.forEach((feature) => {
            const ref = React.createRef();
            ref.current = document.createElement('div');
            createRoot(ref.current).render(<Marker feature={feature} />);

            new mapboxgl.Marker(ref.current).setLngLat(feature.geometry.coordinates).addTo(map);
        });

        map.addControl(new mapboxgl.NavigationControl(), 'top-right');

        return () => map.remove();
    }, []);

    return <div className="map-container" ref={mapContainerRef} />;
}

export default Map;
