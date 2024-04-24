import React from 'react';

function Marker({ children, uuid }) {
    return (
        <>
            <button className="marker" data-tooltip-id={`tooltip-${uuid}`} data-tooltip-place="top">
                {children}
            </button>
        </>
    );
}

export default Marker;
