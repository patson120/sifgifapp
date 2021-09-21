import React, { useEffect, useState } from 'react';
import '../css/Modules.css';
import { Button } from './Button';



export const Modules = (props) => {
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
            rootMargin: '0px',
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

        var element = document.querySelectorAll('.Module');
        element.forEach(el => {
            observer.observe(el);
        })
    })

    return (
        <div className="w-75 mx-auto">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
                {object.map(module => (
                    <div key={module.id} className="Module col mb-4">
                        <div className="card bg-dark text-white text-center h-100 p-4">
                            <div className="icon">
                                <img src={module.icon} alt="" className="img-fuild" />
                            </div>
                            <h1 className="font-weight-bold">{module.titre}</h1>
                            <p>{module.texte}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-5">{!all ? <Button title="Voir plus" handleClick={handleClick} /> : <button onClick={handleMoveUp} className="fas-fa-arrow-top"><i className="fas fa-arrow-up"></i></button>}</div>
        </div>
    );
};
