import React, { useState } from 'react';
import Map from './components/Map';
import './styles/App.css';
import Panel from './components/Panel';
import rawSources from './data/sources.json';
import democracyIndex from './data/democracy_index.geojson';
import { v4 as uuidv4 } from 'uuid';

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
            <Map features={geoJson} democracyIndex={democracyIndex} />
        </div>
    );
}

export default App;
