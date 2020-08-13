import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigator.css';

const Navigator = () => (
    <div className='navigator'>
        <ul>
            <li><Link to='/'>Todo</Link></li>
            <li><Link to='/grid'>Grid</Link></li>
            <li><Link to='/modals'>Modals</Link></li>
            <li><Link to='/counter'>Counter</Link></li>
            <li><Link to='/async'>Async</Link></li>
        </ul>
    </div>
);

export default Navigator;