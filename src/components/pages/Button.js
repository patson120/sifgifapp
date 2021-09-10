import React from 'react';
import '../css/button.css';

export const Button = (props) => {
    return (
        <div className="Button">
            <button onClick={props.handleClick}>
                {props.title}
                <i className="fas fa-arrow-right"></i>
            </button>
        </div>
    );
}