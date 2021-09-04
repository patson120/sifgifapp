import '../../App.css'
import React from 'react';
import { Logo } from './Logo';
import '../css/page2.css';
import { Criteres } from './Criteres';
import { Menu } from './Menu';
import { Title } from './Title';

export const Page2 = () => {
    return (
        <div className="page2">
            <div>
                <Menu />
            </div>
            <div className="App-header block-logo">
                <Logo />
            </div>
            <Title title="SIGIF 2 : LES CRITTERES DU SVL" />
            <div className="criteres">
                <div>
                    <Criteres />
                </div>
                <div className="image">
                    <img className="" src="./images/pexels-photo-1112186.jpeg" alt="" />
                </div>
            </div>
            <Title title="SIGIF 2 : LES PLATEFORMES" />
        </div>
    )
}

