import React, { useState } from 'react';
import { Slider, Switch } from '@mui/material';
import PanelCard from './PanelCard';

function Panel(props) {
    const [monthSelectorDisabled, setMonthSelectorDisabled] = useState(true);
    const [year, setYear] = useState([2019, 2025]);
    const [month, setMonth] = useState([1, 2]);

    function onActionChange(value, func) {
        func(value);

        const newYear = func === setYear ? value : year;
        const newMonth = func === setMonth ? value : month;
        const isMonthSelectorEnabled = func === setMonthSelectorDisabled ? !value : !monthSelectorDisabled;

        props.setGeoJson(
            props.sources
                .map((feature) => {
                    const date = new Date(feature.properties.date);
                    const featureYear = date.getFullYear();
                    const featureMonth = date.getMonth() + 1;

                    if (featureYear >= newYear[0] && featureYear <= newYear[1]) {
                        if (isMonthSelectorEnabled) {
                            if (featureMonth >= newMonth[0] && featureMonth <= newMonth[1]) {
                                return feature;
                            }
                        } else {
                            return feature;
                        }
                    }
                    return null;
                })
                .filter((feature) => feature !== null)
        );
    }

    return (
        <>
            <div className={`panel ${props.expended ? 'expended' : ''}`}>
                <button className={'panel-btn'} onClick={() => props.setExpended(!props.expended)}>
                    {props.expended ? '◀️' : '▶️'}
                </button>
                <div className={`panel-content ${props.expended ? '' : 'hide'}`}>
                    <div className="panel-sliders">
                        <h1>
                            <strong>Year: </strong>
                            {year.join(' - ')}
                        </h1>
                        <Slider
                            marks
                            value={year}
                            step={1}
                            min={2019}
                            max={2025}
                            onChange={(_, value) => onActionChange(value, setYear)}
                            valueLabelDisplay="auto"
                        />
                        <div className="panel-month-slider">
                            <h1>
                                <strong>Month: </strong>
                                {numberToMonth(month[0])} - {numberToMonth(month[1])}
                            </h1>
                            <Switch
                                checked={!monthSelectorDisabled}
                                onChange={() => onActionChange(!monthSelectorDisabled, setMonthSelectorDisabled)}
                                color="primary"
                            />
                        </div>
                        <Slider
                            marks
                            value={month}
                            step={1}
                            min={1}
                            max={12}
                            onChange={(_, value) => onActionChange(value, setMonth)}
                            valueLabelDisplay="auto"
                            valueLabelFormat={numberToMonth}
                            disabled={monthSelectorDisabled}
                        />
                    </div>

                    <div className="panel-cards">
                        <h1>
                            <strong>Number of Events: </strong>
                            {props.features.length}
                        </h1>
                        {props.features.map((feature) => {
                            return <PanelCard key={feature.properties.source} feature={feature} />;
                        })}
                    </div>
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
