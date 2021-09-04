import React from 'react';
import { Link } from 'react-router-dom';
import '../css/moduleIcon.css';

export const ModuleIcon = (props) => {
    return (
        <div className="ModuleIcon">
            {props.object.map(icon => (
                <Link to="#" key={icon.id} className="block">
                    <h4 className="titre">{icon.titre}</h4>
                    <div className="icon">
                        <img src={icon.icon} alt="" />
                    </div>
                </Link>
            ))}

        </div>
    );
}