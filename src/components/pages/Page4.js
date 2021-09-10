import React from 'react';
import { Modules } from './Modules';
import { Menu } from './Menu';
import { Banniere } from './Banniere';
import { Services } from './Services';

export const Page4 = () => {
    return (
        <div className="page4">
            <div>
                <Menu />
            </div>
            <div className="banniere">
                <Banniere />
            </div>
            <div>
                <Modules />
            </div>
            <div id="services">
                <Services />
            </div>
        </div>
    )
}
