import React from 'react';
import '../css/page1.css';
import { Animate } from './Animate';
import { Menu } from './Menu';


export const Accueil = () => {
    return (

        <div>
            <div className="App">
                    <div>
                        <Menu />
                    </div>
                <header className="App-header">
                    {/* <Logo />
                    <h3 className="App-link">
                        <a  href="http://sigif2.cm/sigif/" target="_blank" rel="noreferrer">SIGIF 2</a>
                    </h3> */}
                </header>
                <div className="page1">
                    <div>
                        <Animate />
                    </div>
                    <h1 className="title">SYSTEME INFORMATIQUE DE GESTION DES INFORMATIONS FORESTIERES</h1>
                    <p className="poll-technique">POLL TECHNIQUE SIGIF * 2019 </p>
                </div>
            </div>
        </div>
    );
}

