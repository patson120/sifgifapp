import React from 'react';
import { Menu } from './Menu';
import '../css/actualite.css';
import { Link } from 'react-router-dom';




export const Actualite = () => {
    return (
        <div className='actualite'>
            <div>
                <Menu />
            </div>
            <div className="actualite-body">
                <h2 className="grand-titre">Actualités</h2>
                <div className="banniere">
                    <Link to="#" className="block-1">
                        <p className="date">31/08/2021</p>
                        <div>
                            <span className='titre'>Avec l'ONF, rendez-vous au congrès mondial de la nature de l'UICN</span>
                        </div>
                        <p className="actualite">Actualité</p>
                    </Link>
                    <Link to="#" className="block-2"></Link>
                </div>
                <div className="type-actu">
                    <div className="actu">
                        <p className="ressource">Vidéo</p>
                        <Link className="link" to="#">
                            <div className="image">
                                <img src='./images/pexels-photo-1112186.jpeg' alt="" />
                            </div>
                            <div className="text-content">
                                <p>A l'ombre de Quercus, rencontre avec le forestier et auteur Laurent Tillon</p>
                            </div>
                        </Link>
                    </div>
                    <div className="actu">
                        <p className="ressource">Vidéo</p>
                        <Link className="link" to="#">
                            <div className="image">
                                <img src='./images/pexels-photo-1112186.jpeg' alt="" />
                            </div>
                            <div className="text-content">
                                <p>A l'ombre de Quercus, rencontre avec le forestier et auteur Laurent Tillon</p>
                            </div>
                        </Link>
                    </div>
                    <div className="actu">
                        <p className="ressource">Vidéo</p>
                        <Link className="link" to="#">
                            <div className="image">
                                <img src='./images/pexels-photo-1112186.jpeg' alt="" />
                            </div>
                            <div className="text-content">
                                <p>A l'ombre de Quercus, rencontre avec le forestier et auteur Laurent Tillon</p>
                            </div>
                        </Link>
                    </div>
                    <div className="actu">
                        <p className="ressource">Vidéo</p>
                        <Link className="link" to="#">
                            <div className="image">
                                <img src='./images/pexels-photo-1112186.jpeg' alt="" />
                            </div>
                            <div className="text-content">
                                <p>A l'ombre de Quercus, rencontre avec le forestier et auteur Laurent Tillon</p>
                            </div>
                        </Link>
                    </div>
                    <div className="actu">
                        <p className="ressource">Vidéo</p>
                        <Link className="link" to="#">
                            <div className="image">
                                <img src='./images/pexels-photo-1112186.jpeg' alt="" />
                            </div>
                            <div className="text-content">
                                <p>A l'ombre de Quercus, rencontre avec le forestier et auteur Laurent Tillon</p>
                            </div>
                        </Link>
                    </div>
                    <div className="actu">
                        <p className="ressource">Vidéo</p>
                        <Link className="link" to="#">
                            <div className="image">
                                <img src='./images/pexels-photo-1112186.jpeg' alt="" />
                            </div>
                            <div className="text-content">
                                <p>A l'ombre de Quercus, rencontre avec le forestier et auteur Laurent Tillon</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}