
import React from 'react';
import '../css/criteres.css';

const tableau = [
    { id: 1, titre: 'Légalité de l\'entité forestière', styles: { width: '88%', backgroundColor: 'rgb(42, 151, 42)' } },
    { id: 2, titre: 'Suivi national de l\'activité forestière', styles: { width: '85%', backgroundColor: 'rgb(219, 157, 41)' } },
    { id: 3, titre: 'Contrôle national de l\'activité forestière', styles: { width: '82%', backgroundColor: 'rgba(238, 89, 35, 0.918)' } },
    { id: 4, titre: 'Conformité de chaîne d\'approvisionnement', styles: { width: '85%', backgroundColor: 'rgba(218, 35, 35, 0.808)' } },
    { id: 5, titre: 'Emission des autorisations FLEGT', styles: { width: '88%', backgroundColor: 'rgba(66, 44, 44, 0.518)' } },
]

export const Criteres = () => {
    return (
        <div className="blocks">
            {tableau.map(item => (
                <div key={item.id} className="block" style={item.styles}>
                    <p>{item.titre}</p>
                    <div className="icon"><img src="./dossiericon/ressources/icons/iconINVENTAIRE_128x128.png" alt="" /></div>
                </div>)
            )}
        </div>
    );
}