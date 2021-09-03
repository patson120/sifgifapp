import React from 'react';
import '../css/page3.css'

const objet = [
    { id: 1, icon: "./dossiericon/ressources/icons/iconPERMIS_128x128.png", titre: 'PERMIS', options: ['Demande en ligne', 'Traitement', 'Emission', 'Mise à disposition du permis'], backgroundColor: 'rgba(216, 82, 33, 0.849)' },
    { id: 2, icon: "./dossiericon/ressources/icons/iconDONNEES_128x128.png", titre: 'LETTRES DE VOITUTRE', options: ['Enregistrement', 'Soumission', 'Impression'], backgroundColor: 'rgba(128, 128, 128, 0.828)' },
    { id: 3, icon: "./dossiericon/ressources/icons/iconCERTIFLEGALITE_128x128.png", titre: 'CERTIFICAT DE LEGALITE', options: ['Demande en ligne', 'Traitement', 'Emission', 'Mise à disposition du certificat'], backgroundColor: 'rgb(245, 210, 10)' },
    { id: 4, icon: "./dossiericon/ressources/icons/iconEXPORTATION_128x128.png", titre: 'BULLETIN DE SPECIFICATION DES BOIS A L\'EXPORT', options: ['Demande en ligne', 'Traitement', 'Emission', 'Mise à disposition du bulletin'], backgroundColor: 'rgba(74, 74, 238, 0.931)' },
    { id: 5, icon: "./dossiericon/ressources/icons/iconDONNEES_128x128.png", titre: 'ATTESTATION DE CONFORMITE DES PRODUITS', options: ['Demande en ligne', 'Traitement', 'Emission', 'Mise à disposition de l\'attestation'], backgroundColor: 'rgba(32, 92, 32, 0.924)' },
    { id: 5, icon: "./dossiericon/ressources/icons/iconCONTROLE_128x128.png", titre: 'AUTORISATION FLEGT', options: ['Demande en ligne', 'Traitement', 'Emission', 'Mise à disposition de l\'autorisation'], backgroundColor: 'rgb(219, 87, 34)' },
]

export const Categories = () => {
    return (
        <div className="categories">

            {objet.map(item => (
                <div style={{ backgroundColor: item.backgroundColor }} className="categorie">
                    <h5 className="titre">{item.titre}</h5>
                    <ol className="liste">
                        {item.options.map(option => (
                            <li>{option}</li>
                        ))}
                    </ol>
                    <div className="icon"><img src={item.icon} alt=""/></div>
                </div>
            ))}
        </div>
    );
}
