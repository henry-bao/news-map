import React from 'react';

const Tooltip = ({ feature }) => {
    return (
        <div className="tooltip">
            <p>{feature.properties.name}</p>
            <p>{feature.properties.description}</p>
        </div>
    );
};

export default Tooltip;
