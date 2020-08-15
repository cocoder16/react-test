import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigator from './components/Navigator';
import Router from './routers/Router';
import Footer from './components/Footer';
import './App.css';

const App = () => (
    <div className='app'>
        <BrowserRouter>
            <Navigator/>
            <Router/>
            <Footer/>
        </BrowserRouter>
    </div>
);

export default App;
