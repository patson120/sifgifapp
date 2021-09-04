import React from 'react';

export const Button = (props) => {
    return (
        <div className="Button">
            <button>
                {props.title}
                <i className="fas fa-arrow-right"></i>
            </button>
        </div>
    );
}