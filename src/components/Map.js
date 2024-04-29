import mapboxgl from 'mapbox-gl';
import React, { useEffect, useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';

import Marker from './Marker';
import Tooltip from './Tooltip';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JvdXBvbmUiLCJhIjoiY2x2Nzd2ZHJtMDc3YjJpcXY5a2V0d2c4MyJ9.87JbNopJfDz9J5qV2VjePQ';

function Map(props) {
    const mapContainerRef = useRef(null);
    const [tooltips, setTooltips] = useState([]);
    const mapRef = useRef(null);
    const markersRef = useRef([]);

    useEffect(() => {
        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/dark-v11',
            center: [-99, 40],
            zoom: 3,
        });

        const map = mapRef.current;

        map.on('load', () => {
            map.addControl(new mapboxgl.NavigationControl(), 'top-right');

            map.addSource('democracy-index', {
                type: 'geojson',
                data: props.democracyIndex,
            });

            map.addLayer({
                id: 'countries-fill',
                type: 'fill',
                source: 'democracy-index',
                layout: {},
                paint: {
                    'fill-color': ['interpolate', ['linear'], ['get', 'DemocracyIndex2023'], ...props.mapColor],
                    'fill-opacity': 0.5,
                },
            });
        });

        return () => mapRef.current.remove();
    }, [props.democracyIndex, props.mapColor]);

    useEffect(() => {
        const map = mapRef.current;
        const tooltips = [];
        markersRef.current.forEach((marker) => marker.remove());
        markersRef.current = [];

        props.features.forEach((feature) => {
            const ref = React.createRef();
            const uuid = feature.properties.uuid;
            ref.current = document.createElement('div');
            createRoot(ref.current).render(<Marker feature={feature} uuid={uuid} />);
            markersRef.current.push(
                new mapboxgl.Marker(ref.current).setLngLat(feature.geometry.coordinates).addTo(map)
            );
            tooltips.push(<Tooltip key={uuid} feature={feature} uuid={uuid} />);
        });

        setTooltips(tooltips);

        return () => {
            markersRef.current.forEach((marker) => marker.remove());
            markersRef.current = [];
        };
    }, [props.features]);

    return (
        <>
            <div className="map-container" ref={mapContainerRef} />
            {tooltips}
        </>
    );
}

export default Map;
