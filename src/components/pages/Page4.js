import React from 'react';
import '../css/page4.css';
import { Modules } from './Modules';
import { Menu } from './Menu';

export const Page4 = () => {
    return (
        <div className="page4">
            <div>
                <Menu />
            </div>
            <div className="block-titre">
                <h3 className="grand-titre">SIGIF 2 : MODULES</h3>
            </div>
            <div>
                <Modules />
            </div>
        </div>
    )
}
