import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigator from './components/Navigator';
import Router from './routers/Router';
import './App.css';

const App = () => (
    <div className='app'>
        <BrowserRouter>
            <Navigator/>
            <Router/>
        </BrowserRouter>
    </div>
);

export default App;
