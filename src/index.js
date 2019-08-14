import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import {RoomProvider} from './context'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
    <RoomProvider>
        <Router>
            <App />
        </Router>
    </RoomProvider>,
    document.getElementById('root')
);
