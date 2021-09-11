import React from 'react';
import { Modules } from './Modules';
import { Menu } from './Menu';
import { Banniere } from './Banniere';
import { Services } from './Services';
import { Message } from './Message';

export const Page4 = () => {
    return (
        <div className="page4">
            <div>
                <Message />
            </div>
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
