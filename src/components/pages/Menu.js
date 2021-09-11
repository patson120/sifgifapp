import React from 'react';
import '../css/menu.css';
import { Link } from 'react-router-dom';


export const Menu = () => {
    return (
        <div className="navBar">
            <div className="menu">
                <div className="blocks-logo">
                    {/* <div className="logo-cam">
                        <img src="./gerb.png" alt="" />
                    </div> */}
                    <div className="image-logo">
                        <a href="http://sigif2.cm/sigif/" >
                            <img src="./dossiericon/ressources/images/LogoSIGIF_540x540.png" alt='logo' />
                        </a>
                    </div>
                </div>
                <div className="links">
                    <Link to="/" className="link" >Accueil</Link>
                    <Link to="/modules" className="link" >Modules</Link>
                    <a href="#services" className="link" >Services</a>
                    <Link to="/criteres" className="link" >Critères</Link>
                    <a href="#liste_actu" className="link" >Actualité</a>
                    <a href="http://sigif2.cm/sigif/" target="_blank" rel="noreferrer" className="link" >Portail</a>
                </div>
                <div className="sub-links">
                    <div className="hamburger">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <div className="menu">
                        <Link to="/" className="link" >Accueil</Link>
                        <Link to="/modules" className="link" >Modules</Link>
                        <Link to="/services" className="link" >Services</Link>
                        <Link to="/criteres" className="link" >Critères</Link>
                        <Link to="/actualite" className="link" >Actualité</Link>
                        <a href="http://sigif2.cm/sigif/" target="_blank" rel="noreferrer" className="link" >Portail</a>
                    </div>
                </div>

            </div>
        </div>
    );
}