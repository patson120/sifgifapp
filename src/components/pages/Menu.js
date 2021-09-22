import React from 'react';
import '../css/menu.css';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll'


export const Menu = (props) => {

    return (
        <div id="navBar" className="navBar">
            <div className="menu">
                <div className="blocks-logo">
                    <div className="image-logo">
                        <a href="http://sigif2.cm/sigif/" target="_blank" rel="noopener noreferrer">
                            <img src="./dossiericon/ressources/images/LogoSIGIF_540x540.png" alt='logo' />
                        </a>
                        <p className="tooltipText">Acceder à l'application</p>
                    </div>
                </div>
                <div className="links">
                    {props.ListMenu.map(item => (
                        item.libelle === "Accueil" || item.libelle === "Modules" ?
                            <Link key={item.id} to={item.link} className='link' >{item.libelle}</Link>
                            :
                            <Scroll
                                activeClass="active"
                                to={item.link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={2000}
                                key={item.id} className='link' >{item.libelle}</Scroll>
                    ))}
                    <a href="http://sigif2.cm/sigif/" target="_blank" rel="noreferrer" className="link Portail" >Portail</a>
                </div>
                <div className="sub-links">
                    <div className="hamburger">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <div className="menu">
                        {props.ListMenu.map(item => (
                            item.libelle === "Accueil" || item.libelle === "Modules" ?
                                <Link key={item.id} to={item.link} className='link' >{item.libelle}</Link>
                                :
                                <Scroll
                                    activeClass="active"
                                    to={item.link}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={2000}
                                    key={item.id} className='link' >{item.libelle}</Scroll>
                        ))}
                        <a href="http://sigif2.cm/sigif/" target="_blank" rel="noreferrer" className="link" >Portail</a>
                    </div>
                </div>

            </div>
        </div>
    );
}