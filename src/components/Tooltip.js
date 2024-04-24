import { Tooltip } from 'react-tooltip';
import React from 'react';

function CustomTooltip({ feature, uuid }) {
    // TODO: check if the feature has a video property
    feature.properties.video = true;

    return (
        <Tooltip
            key={uuid}
            className="marker-tooltip"
            id={`tooltip-${uuid}`}
            style={{
                backgroundColor: 'black',
                borderRadius: '5px',
            }}
            openOnClick
            clickable
        >
            <div className="tooltip">
                <p className="tooltip-title">{feature.properties.title}</p>
                <p className="tooltip-description">{feature.properties.description}</p>
                {feature.properties.video && (
                    <iframe
                        className="tooltip-video"
                        src="https://www.youtube.com/embed/sm757r-pI-4?si=x48uTLNfSXONEYEM"
                        title="YouTube video player"
                    ></iframe>
                )}
            </div>
        </Tooltip>
    );
}

export default CustomTooltip;
