import React from 'react';
import { Card, CardHeader, CardMedia } from '@mui/material';

function PanelCard(props) {
    return (
        <>
            <Card className="panel-card">
                <CardHeader title={props.feature.properties.title} subheader={props.feature.properties.date} />
                <CardMedia component="iframe" height="200px" src={props.feature.properties.source} />
            </Card>
        </>
    );
}

export default PanelCard;
