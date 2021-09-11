import React from 'react';
import { Modules } from './Modules';
import { Menu } from './Menu';
import { Banniere } from './Banniere';
import { Services } from './Services';
// import { Message } from './Message';
import { ModuleSigif } from './ModuleSigif';
import { CRITERES } from './Constants';

export const Page4 = () => {
    return (
        <div className="page4">
            {/* <div><Message /></div> */}
            <div><Menu /></div>
            <div className="banniere"><Banniere /></div>
            <div><Modules /></div>
            <div id="services"><Services /></div>
            <div id="criteres"><div className="critere"><ModuleSigif object={CRITERES} /></div></div>
            <Footer />
        </div>
    )
}


export const Footer = () => {
    return (
        <div id="footer" className="footer">
            <p>(c)&ensp;&bull;&ensp;Copyright Flysoft-Engineering & Patrick Kenne</p>
        </div>
    );
}
