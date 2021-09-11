import React from 'react';
import '../css/actualite.css';
import { Link } from 'react-router-dom';




export const Actualite = (props) => {

    return (
        <div className='actualite'>
            <div className="actualite-body">
                <h2  id="liste_actu" className="grand-titre">Actualités</h2>
                <div className="type-actu">
                    {props.actualites.map(actualite => (
                        <SingleActu key={actualite.id} actualite={actualite} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export const BanniereActu = () => {
    return (
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
    )
}

export const SingleActu = (props) => {
    return (
        <div key={props.actualite.id} className="actu">
            <p className="ressource">{props.actualite.ressource}</p>
            <Link className="link" to={props.actualite.link}>
                <div className="image">
                    <img src={props.actualite.src} alt="" />
                </div>
                <div className="text-content">
                    <p>{props.actualite.description}</p>
                </div>
            </Link>
        </div>
    )
}
