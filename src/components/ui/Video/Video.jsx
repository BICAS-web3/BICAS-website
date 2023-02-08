import React from 'react';
import { Player } from 'video-react';

export default function Video({ video }) {
    return (
        <video src={video} width="600" height="300" controls="controls" autoplay="true" />
    );
};