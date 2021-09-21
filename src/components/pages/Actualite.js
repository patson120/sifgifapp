import React from 'react';
import '../css/actualite.css';
import { Link } from 'react-router-dom';




export const Actualite = (props) => {

    return (
        <div className='actualite w-75 mx-auto'>
            <div className="actualite-body container-fluid">
                <h2 id="liste_actu" className="h1">Actualités</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-between">
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
        <div className="col mb-4">
            <div key={props.actualite.id} className="actu rounded border-0 overflow-hidden card bg-dark h-100">
                <p className="position-absolute rounded text-dark font-weight-bold bg-white px-3">{props.actualite.ressource}</p>
                <Link className="link border-0" to={props.actualite.link}>
                    <div className="w-100">
                        <img src={props.actualite.src} alt="" className="img-fluid w-100" />
                    </div>
                    <p className="px-3">{props.actualite.description}</p>
                </Link>
            </div>
        </div>
    )
}
