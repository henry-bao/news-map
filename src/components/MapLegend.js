import React from 'react';

function MapLegend(props) {
    const legendItems = [];
    for (let i = 0; i < props.mapColor.length; i += 2) {
        const backgroundColor = props.mapColor[i + 1];
        const label = props.mapColor[i];
        const legendItem = (
            <li key={i}>
                <span style={{ backgroundColor }}></span>
                {label}
            </li>
        );
        legendItems.push(legendItem);
    }

    return (
        <>
            <div className="legend">
                <p className="legend-title">Democracy Index, 2023</p>
                <div className="legend-scale">
                    <ul className="legend-labels">{legendItems}</ul>
                </div>
                <div class="legend-source">
                    Source: <a href="#link to source">Name of source</a>
                </div>
            </div>
        </>
    );
}

export default MapLegend;
