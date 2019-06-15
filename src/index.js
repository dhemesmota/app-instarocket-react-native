import React from 'react';
import { YellowBox, StatusBar } from 'react-native';

YellowBox.ignoreWarnings([
    'Unrecognized WebSocket'
])

import Routes from './routes';

export default function App() {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#fafaff"/>
            <Routes />
        </>
    )
}