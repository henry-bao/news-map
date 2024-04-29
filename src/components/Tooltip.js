import { Tooltip } from 'react-tooltip';
import React from 'react';

function CustomTooltip(props) {
    return (
        <Tooltip
            key={props.uuid}
            className="marker-tooltip"
            id={`tooltip-${props.uuid}`}
            style={{
                backgroundColor: 'black',
                borderRadius: '5px',
            }}
            openOnClick
            clickable
        >
            <div className="tooltip">
                <p className="tooltip-title">{props.feature.properties.title}</p>
                <p className="tooltip-date">{props.feature.properties.date}</p>
                {props.feature.properties.source && (
                    <iframe
                        className="tooltip-source"
                        title={props.feature.properties.source}
                        src={props.feature.properties.source}
                        allow="autoplay"
                    ></iframe>
                )}
            </div>
        </Tooltip>
    );
}

export default CustomTooltip;
