import mapboxgl from 'mapbox-gl';
import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import geoJson from '../chicago-parks.json';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JvdXBvbmUiLCJhIjoiY2x2Nzd2ZHJtMDc3YjJpcXY5a2V0d2c4MyJ9.87JbNopJfDz9J5qV2VjePQ';

function Marker({ onClick, children, feature }) {
    const _onClick = () => {
        onClick(feature.properties.description);
    };

    return (
        <button onClick={_onClick} className="marker">
            {children}
        </button>
    );
}

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
            createRoot(ref.current).render(<Marker onClick={markerClicked} feature={feature} />);

            new mapboxgl.Marker(ref.current).setLngLat(feature.geometry.coordinates).addTo(map);
        });

        map.addControl(new mapboxgl.NavigationControl(), 'top-right');

        return () => map.remove();
    }, []);

    const markerClicked = (title) => {
        window.alert(title);
    };

    return <div className="map-container" ref={mapContainerRef} />;
}

export default Map;
