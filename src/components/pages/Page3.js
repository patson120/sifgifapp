
import React from 'react';
import { Categories } from './Categories';
import { Menu } from './Menu';
import { Title } from './Title';

const tab_minfof = {
    style: { backgroundColor: 'rgb(42, 151, 42)' },
    avantages: [
        { id: 1, avantage: 'Facilite la prise de décision' },
        { id: 2, avantage: 'Lutte contre l\'exploition illégale du bois' },
        { id: 3, avantage: 'Maîtrise de la chaîne d\'approvisionnement' },
        { id: 4, avantage: 'Suivi de la traçabilité des produits bois' },
        { id: 5, avantage: 'Maîtrise de la production nationale de bois et des exploitations' },
        { id: 6, avantage: 'Maîtrise et suivi des taxes forestières' },
    ]
};
const tab_operateurs = {
    style: { backgroundColor: 'blue' },
    avantages: [
        { id: 1, avantage: 'Dématérialisaion des procédures d\'obtention des documents' },
        { id: 2, avantage: 'Rapidité d\'obtention des documents' },
        { id: 3, avantage: 'Outils de gestion faible' },
        { id: 4, avantage: 'Maîtrise de la production de la société' },
        { id: 5, avantage: 'Maîtrise des statistiques internes de gestion forestière' },
        { id: 6, avantage: 'Facilité de suivi de la chaîne d\'approvisionnement' },
    ]
};

export const Page3 = () => {
    return (
        <div className="page3">
            <div>
                <Menu />
            </div>
            <Title title="SIGIF 2 ET LA DEMATERIALISATION" />
            <div>
                <Categories />
            </div>
            <Title title="SIGIF 2 : LES AVANTAGES" />
            <div className="avantages-block">
                <div className="avantages">
                    <h3 className="grand-titre minfof">MINFOF</h3>
                    <div className="bande"></div>
                    {tab_minfof.avantages.map(item => (
                        <div key={item.id} className="avantage">
                            <div style={tab_minfof.style} className="point"></div>
                            <div className="texte">{item.avantage}</div>
                        </div>
                    ))}
                </div>

                <div className="avantages">
                    <h3 className="grand-titre operateur">OPERATEUR</h3>
                    <div className="bande"></div>
                    {tab_operateurs.avantages.map(item => (
                        <div className="avantage">
                            <div style={tab_operateurs.style} className="point"></div>
                            <div className="texte">{item.avantage}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

