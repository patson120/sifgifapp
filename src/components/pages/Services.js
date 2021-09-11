import React, { useState } from 'react';
import { useEffect } from 'react';
import '../css/service.css';
import { Actualite } from './Actualite';
import { Button } from './Button';
import { SERVICES } from './Constants';
import { ACTUALITES } from './Constants';

export const Services = () => {
    const [actualites, setActualites] = useState(ACTUALITES.slice(0, 3));
    const [allActu, setAllActu] = useState(false);
    var slideIndex = 1;

    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    }

    const currentSlide = (n) => {
        showSlides(slideIndex = n);
    }

    const showSlides = (n) => {
        var i;
        var slides = document.querySelectorAll(".service");
        var dots = document.querySelectorAll(".dot");

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }
        if (slides[slideIndex - 1]) {
            slides[slideIndex - 1].style.display = "flex";
            dots[slideIndex - 1].classList.add("active");
        }
    }

    window.addEventListener('load', () => {
        setInterval(() => {
            slideIndex += 1;
            showSlides(slideIndex);
        }, 5000);
    });

    const handleClick = (e) => {
        setAllActu(true)
        setActualites(ACTUALITES); 
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
                    entry.target.firstChild.classList.add("animRight");
                    entry.target.lastChild.classList.add("animLeft");
                }
            })
        }

        var observer = new IntersectionObserver(handleObserver, options)

        var element = document.querySelectorAll('.service');
        element.forEach(el => {
            observer.observe(el);
        })
    })
    return (
        <>
            <div className="services">
                <h1 className="grand-titre">&bull;&ensp;SERVICES&ensp;&bull;</h1>
                <div className="separation"></div>
                {SERVICES.map((item, index) => (
                    index % 2 ? <Service key={index} item={item} premier={2} second={1} /> : <Service key={index} item={item} premier={1} second={2} />))}
                <span className="prev" onClick={(e) => plusSlides(-1)}>&#10094;</span>
                <span className="next" onClick={(e) => plusSlides(1)}>&#10095;</span>
                <div style={{ textAlign: 'center' }}>
                    {SERVICES.map((item, index) => (
                        <span key={index} className="dot" onClick={(e) => currentSlide(index)}></span>
                    ))}
                </div>
            </div>
            <div className="liste_actu">
                <Actualite actualites={actualites} />
                { !allActu ? <Button title="Toutes les actualités" handleClick={handleClick} /> : null}
                
            </div>
        </>
    );
};

export const Service = (props) => {
    return (
        <div key={props.item.id} className="service">
            <div className="block-1" style={{ order: props.premier }}>
                <div className="image">
                    <img src={props.item.icon} alt="arbre_abattage" />
                </div>
            </div>
            <div className="block-2" style={{ order: props.second }}>
                <div className="sous-block">
                    <h1 className="titre">{props.item.titre}</h1>
                    <ol className="ordered_list">
                        {props.item.options.map((option, index) => (
                            <li key={index}>{option}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};