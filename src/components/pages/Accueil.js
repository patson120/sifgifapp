import React from 'react';
import '../css/page1.css';
import { Home } from './Home';
import { Menu } from './Menu';


export const Accueil = () => {

    const ListMenu = [
        {id: 1, libelle: 'Modules', link: '/modules',},
    ]
    
    return (
        <div>
            <div style={{position: 'absolute', top: '0', left: '0', width: '100%', zIndex: '2'}}>
                <Menu ListMenu = { ListMenu } />
            </div>
            <Home />
        </div>
    );
}

