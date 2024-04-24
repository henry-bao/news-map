import mapboxgl from 'mapbox-gl';
import React, { useEffect, useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { v4 as uuidv4 } from 'uuid';

import geoJson from '../data/chicago-parks.json';
import Marker from './Marker';
import CustomTooltip from './Tooltip';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JvdXBvbmUiLCJhIjoiY2x2Nzd2ZHJtMDc3YjJpcXY5a2V0d2c4MyJ9.87JbNopJfDz9J5qV2VjePQ';

function Map() {
    const mapContainerRef = useRef(null);
    const [tooltips, setTooltips] = useState([]);
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/dark-v11',
            center: [-87.65, 41.84],
            zoom: 10,
        });

        geoJson.features.forEach((feature) => {
            const ref = React.createRef();
            const uuid = uuidv4();
            ref.current = document.createElement('div');
            createRoot(ref.current).render(<Marker feature={feature} uuid={uuid} />);
            new mapboxgl.Marker(ref.current).setLngLat(feature.geometry.coordinates).addTo(map);
            setTooltips((prev) => [...prev, <CustomTooltip feature={feature} uuid={uuid} />]);
        });

        map.addControl(new mapboxgl.NavigationControl(), 'top-right');

        return () => map.remove();
    }, []);

    return (
        <>
            <div className="map-container" ref={mapContainerRef} />
            {tooltips}
        </>
    );
}

export default Map;
