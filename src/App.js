import React, { useState } from 'react';
import Map from './components/Map';
import './App.css';
import Panel from './components/Panel';

function App() {
    const [expended, setExpended] = useState(false);

    return (
        <div className="app">
            <Panel expended={expended} setExpended={setExpended} />
            <Map />
        </div>
    );
}

export default App;
