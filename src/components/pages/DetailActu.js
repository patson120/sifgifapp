import React, { useEffect, useState } from "react";
import { Menu } from "./Menu";
import { Footer } from './Footer';
// import { Banniere } from "./Banniere";
import { ScrollTop } from "./Page4";
import { ACTUALITES } from './Constants';
import { SingleActu } from "./Actualite";


export const DetailActu = (props) => {
    const [actualite, setActualite] = useState({})
    const [actualites, setActualites] = useState([])
    const id = parseInt(props.match.params.id);

    useEffect(() => {
        setActualites(ACTUALITES.filter(actu => actu.id !== id).slice(0, 3));
        setActualite(ACTUALITES.filter(act => act.id === id)[0]);
        console.log(ACTUALITES.filter(act => act.id === id)[0]);
    }, [id]);

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
        <>
            <div className="position-absolute" style={{ zIndex: '2' }}><Menu ListMenu={ListMenu} /></div>
            <ScrollTop />
            <div className="container-fluid mx-auto" style={{ paddingTop: '150px', width: '80%' }}>
                <div className="card">
                    <p className="detail-description text-justify text-dark p-4">
                        <img src={actualite.src} alt="" className="float-left rounded mr-4" style={{ maxHeight: "50vh" }} />
                        <span className="font-weight-bold text-dark">
                            {actualite.titre}
                        </span><br /><br />
                        {actualite.description}
                    </p>
                </div>

            </div>
            <div className="container-fluid mt-5 py-5" style={{ backgroundColor: 'gray' }}>
                <div className="container">
                    <h2 id="liste_actu" className="h3 mb-4">Autres actualités</h2>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
                        {actualites.map(actualite => (
                            <SingleActu key={actualite.id} actualite={actualite} />
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export const ListMenu = [
    { id: 1, libelle: 'Accueil', link: '/', },
    { id: 2, libelle: 'Modules', link: '/modules', },
];