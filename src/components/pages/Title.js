import React from 'react';



export const Title = (props) => {
    return (
        <div className="block-titre">
            <div className="div">
                <img src="./images/gry.jpg" alt="Couleur du drapeau Camerounais" />
            </div >
            <h3 className="grand-titre">{props.title}</h3>
            <div className="div">
                <img src="./images/gry.jpg" alt="Couleur du drapeau Camerounais" />
            </div>
        </div>
    );
}