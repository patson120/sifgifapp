import React from 'react';
import { Modules } from './Modules';
import { Menu } from './Menu';
import { Banniere } from './Banniere';
import { Services } from './Services';
// import { Message } from './Message';
import { ModuleSigif } from './ModuleSigif';
import { CRITERES } from './Constants';

export const Page4 = () => {
    const ListMenu = [
        {id: 1, libelle: 'Accueil', link: '/',},
        {id: 2, libelle: 'Services', link: 'services',},
        {id: 3, libelle: 'Critères', link: 'criteres',},
        {id: 4, libelle: 'Actualité', link: 'liste_actu',},
    ]

    return (
        <div className="page4">
            {/* <div><Message /></div> */}
            <div><Menu ListMenu = { ListMenu } /></div>
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
