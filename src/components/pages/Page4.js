import React from 'react';
import { Modules } from './Modules';
import { Menu } from './Menu';
import { Banniere } from './Banniere';
import { Services } from './Services';
// import { Message } from './Message';
import { ModuleSigif } from './ModuleSigif';
import { CRITERES } from './Constants';
import '../css/ScrollTop.css';
import { Link as Scroll } from 'react-scroll';

export const Page4 = () => {
    
    window.addEventListener('scroll', () => {
        if (document.querySelector('.ScrollTop')){
            if (window.scrollY > 900){
                document.querySelector('.ScrollTop').style.display = 'block';
            }
            else{
                document.querySelector('.ScrollTop').style.display = 'none';
            }
        }
    });

    return (
        <div className="page4">
            {/* <div><Message /></div> */}
            <ScrollTop />
            <div><Menu ListMenu={ListMenu} /></div>
            <div className="banniere"><Banniere /></div>
            <div><Modules /></div>
            <div id="services"><Services /></div>
            <div id="criteres"><div className="critere"><ModuleSigif object={CRITERES} /></div></div>
            <Footer />
        </div>
    )
}

export const ListMenu = [
    { id: 1, libelle: 'Accueil', link: '/', },
    { id: 2, libelle: 'Services', link: 'services', },
    { id: 3, libelle: 'Critères', link: 'criteres', },
    { id: 4, libelle: 'Actualité', link: 'liste_actu', },
];


export const Footer = () => {
    return (
        <div id="footer" className="footer">
            <p>(c)&ensp;&bull;&ensp;Copyright Flysoft-Engineering & Patrick Kenne</p>
        </div>
    );
};

export const ScrollTop = () => {
    return (
        <Scroll
            activeClass="active"
            to="banniere"
            spy={true}
            smooth={true}
            offset={-70}
            duration={3000}
            className="ScrollTop"><i className="fa fa-chevron-up"></i></Scroll>
    );
};
