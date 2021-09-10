import React from 'react';
import '../css/page1.css';
import { Home } from './Home';
import { Menu } from './Menu';


export const Accueil = () => {
    return (
        <div>
            <div style={{position: 'absolute', top: '0', left: '0', width: '100%', zIndex: '2'}}>
                <Menu />
            </div>
            <Home />
        </div>
    );
}

