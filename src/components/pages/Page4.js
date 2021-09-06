import React from 'react';
import { Modules } from './Modules';
import { Menu } from './Menu';
import { Title } from './Title';

export const Page4 = () => {
    return (
        <div className="page4">
            <div>
                <Menu />
            </div>
            <Title title="SIGIF 2 : MODULES" />
            <div>
                <Modules />
            </div>
        </div>
    )
}
