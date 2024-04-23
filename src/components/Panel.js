import React from 'react';
function Panel(props) {
    return (
        <div className={`panel ${props.expended ? 'expended' : ''}`}>
            <button className={'panel-btn'} onClick={() => props.setExpended(!props.expended)}>
                {props.expended ? '👈' : '👉'}
            </button>
        </div>
    );
}

export default Panel;
