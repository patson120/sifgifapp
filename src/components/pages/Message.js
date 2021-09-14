import React from 'react';
import '../css/message.css';

export const Message = () => {

    window.addEventListener('load', () => {
        setTimeout(() => {
            document.querySelector('.message').classList.add('messageL');
            document.querySelector('.message').style.opacity = '1';
        }, 2000);
        setTimeout(() => {
            document.querySelector('.message').classList.add('messageR');
            document.querySelector('.message').style.opacity = '0';
        }, 6000);
    })

    return (
        <>
            <div className="message">
                <p>Hello world !</p>
            </div>
        </>
    );
}