import React from 'react';
import '../css/page3.css'

import { SERVICES} from './Constants';

export const Categories = () => {
    return (
        <div className="categories">

            {SERVICES.map(item => (
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
