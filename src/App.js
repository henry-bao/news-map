import React, { useState, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './styles/App.css';

import rawSources from './data/sources.json';
import democracyIndex from './data/democracy_index.geojson';

import MapLegend from './components/MapLegend';
import Map from './components/Map';
import Panel from './components/Panel';

function App() {
    const sources = rawSources.features.map((feature) => {
        return {
            ...feature,
            properties: {
                ...feature.properties,
                uuid: uuidv4(),
            },
        };
    });

    const MAP_COLOR = useMemo(
        () => [
            0,
            '#ffffd9',
            1,
            '#edf8c0',
            2,
            '#d2edb6',
            3,
            '#a7ddb8',
            4,
            '#75c9bd',
            5,
            '#48b2c1',
            6,
            '#2c95bd',
            7,
            '#2272b1',
            8,
            '#214f9e',
            9,
            '#1a3381',
            10,
            '#081d58',
        ],
        []
    );

    const [expended, setExpended] = useState(false);
    const [geoJson, setGeoJson] = useState(sources);

    return (
        <div className="app">
            <Panel
                features={geoJson}
                expended={expended}
                setExpended={setExpended}
                setGeoJson={setGeoJson}
                sources={sources}
            />
            <Map features={geoJson} democracyIndex={democracyIndex} mapColor={MAP_COLOR} />
            <MapLegend mapColor={MAP_COLOR} />
        </div>
    );
}

export default App;
