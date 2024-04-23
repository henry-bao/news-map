import React from 'react';
function Panel(props) {
    return (
        <div className={`panel ${props.expended ? 'expended' : ''}`}>
            <button onClick={() => props.setExpended(!props.expended)}>{props.expended ? 'Close' : 'Open'}</button>
        </div>
    );
}

export default Panel;
