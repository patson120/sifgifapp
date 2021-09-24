import React from 'react';
import { Menu } from './Menu';
import { Banniere } from './Banniere';
import { Services } from './Services';
import { Modules } from './Modules';
import { MODULES } from './Constants';
import { CRITERES } from './Constants';
import '../css/ScrollTop.css';
import { Link as Scroll } from 'react-scroll';
import { Footer } from './Footer';

export const Page4 = () => {

    window.addEventListener('scroll', () => {
        if (document.querySelector('.ScrollTop')) {
            if (window.scrollY > 900) {
                document.querySelector('.ScrollTop').style.display = 'block';
            }
            else {
                document.querySelector('.ScrollTop').style.display = 'none';
            }
        }
    });

    return (
        <div className="page4">
            <ScrollTop />
            <div className="position-absolute" style={{ zIndex: '2' }}><Menu ListMenu={ListMenu} /></div>
            <div><Banniere /></div>
            <div className="my-5 mx-auto">
                <Modules object={MODULES} />
            </div>
            <div id="services"><Services /></div>
            <div id="criteres"><div className="critere"><Modules object={CRITERES} /></div></div>
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


export const ScrollTop = () => {
    return (
        <Scroll
            activeClass="active"
            to="carousel1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={3000}
            className="ScrollTop">
            <i className="fa fa-chevron-up"></i>
        </Scroll>
    );
};
