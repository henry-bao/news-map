import React, { useState } from 'react';
import { Slider, Switch } from '@mui/material';

function Panel(props) {
    const [monthSelectorEnabled, setMonthSelectorEnabled] = useState(false);

    return (
        <>
            <div className={`panel ${props.expended ? 'expended' : ''}`}>
                <button className={'panel-btn'} onClick={() => props.setExpended(!props.expended)}>
                    {props.expended ? '👈' : '👉'}
                </button>
                <div className={`panel-content ${props.expended ? '' : 'hide'}`}>
                    <h1>Year Slider</h1>
                    <Slider marks defaultValue={2024} step={1} min={2024} max={2030} valueLabelDisplay="auto" />

                    <div className="panel-month-slider">
                        <h1>Month Slider</h1>
                        <Switch
                            checked={monthSelectorEnabled}
                            onChange={() => setMonthSelectorEnabled(!monthSelectorEnabled)}
                            color="primary"
                        />
                    </div>
                    <Slider
                        marks
                        defaultValue={1}
                        step={1}
                        min={1}
                        max={12}
                        valueLabelDisplay="auto"
                        valueLabelFormat={numberToMonth}
                        disabled={!monthSelectorEnabled}
                    />
                </div>
            </div>
        </>
    );
}

export default Panel;

function numberToMonth(number) {
    switch (number) {
        case 1:
            return 'January';
        case 2:
            return 'February';
        case 3:
            return 'March';
        case 4:
            return 'April';
        case 5:
            return 'May';
        case 6:
            return 'June';
        case 7:
            return 'July';
        case 8:
            return 'August';
        case 9:
            return 'September';
        case 10:
            return 'October';
        case 11:
            return 'November';
        case 12:
            return 'December';
        default:
            return '';
    }
}
