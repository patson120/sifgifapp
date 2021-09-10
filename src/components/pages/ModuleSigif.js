import React, { useEffect, useState } from 'react';
import '../css/ModuleSigif.css';
import { Button } from './Button';



export const ModuleSigif = (props) => {
    const [object, setObject] = useState(props.object.slice(0, 3));
    const [all, setAll] = useState(false);
    const handleClick = (event) => {
        setObject(props.object)
        setAll(true);
    }
    const handleMoveUp = (event) => {
        setAll(false);
        setObject(props.object.slice(0, 3))
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        const ratio = 0.5;
        const options = {
            root: null,
            rootMargin: '',
            threshold: ratio,
        }
        const handleObserver = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > ratio) {
                    entry.target.classList.add('animation')
                }
            })
        }

        var observer = new IntersectionObserver(handleObserver, options)

        var element = document.querySelectorAll('.ModuleSigif');
        element.forEach(el => {
            observer.observe(el);
        })
    })

    return (
        <>
            <div className="ModuleSigifs">
                {object.map(module => (
                    <div key={module.id} className="ModuleSigif">
                        <div className="icon">
                            <img src={module.icon} alt="" />
                        </div>
                        <h1 className="titre">{module.titre}</h1>
                        <p className="description">{module.texte}</p>
                    </div>
                ))}
            </div>
             <div style={{textAlign: 'center'}}>{  !all ? <Button title="Voir plus" handleClick={handleClick} /> : <button onClick={handleMoveUp} className="fas-fa-arrow-top"><i className="fas fa-arrow-up"></i></button> }</div> 
            
        </>
    );
}