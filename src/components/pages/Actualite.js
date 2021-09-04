import React from 'react';
import { Menu } from './Menu';
import '../css/actualite.css';
import { Link } from 'react-router-dom';
import { Button } from './Button';

const actualites = [
    { id: 1, ressource: "Actualité", link: "#", src: "./images/pexels-photo-1112186.jpeg", description: "A l'ombre de Quercus, rencontre avec le forestier et auteur Laurent Tillon" },
    { id: 2, ressource: "Vidéo", link: "#", src: "./images/images.jpg", description: "Agir pour la biodiversité : un engagement au quotidien à l'ONF, 7 actions concrètes" },
    { id: 3, ressource: "Vidéo", link: "#", src: "./images/images_1.jpg", description: "Rapport d'activité 2020 de l'ONF" },
    { id: 4, ressource: "Rapport", link: "#", src: "./images/bg.jpg", description: "“Nos équipes DFCI sont très mobilisées dans le sud de la France, et restent vigilantes dans les…" },
    { id: 5, ressource: "Interview", link: "#", src: "./images/images_2.jpg", description: "“Raconte-moi la forêt” : la page qui vous conte la forêt et ses secrets" },
    { id: 6, ressource: "Actualité", link: "#", src: "./images/images_4.jpg", description: "Concours photo : #DestinationForêt, à vos clichés !" },
]

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
                    {actualites.map(actualite => (
                        <div key={actualite.id} className="actu">
                            <p className="ressource">{actualite.ressource}</p>
                            <Link className="link" to={actualite.link}>
                                <div className="image">
                                    <img src={actualite.src} alt="" />
                                </div>
                                <div className="text-content">
                                    <p>{actualite.description}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                
                <Link to="">
                    <Button title="Toutes les actualités"/>
                </Link>
            </div>
        </div>
    );
}
