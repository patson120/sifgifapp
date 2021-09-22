import React, { useState, useEffect } from 'react';
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
            rootMargin: '0px',
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
    });
    return (
        <>
            <div className="services position-relative container-fuild">
                <h1 className="text-center font-weight-bold h3 text-dark mb-5">&bull;&ensp;SERVICES&ensp;&bull;</h1>
                <div className="separation mb-4"></div>
                {SERVICES.map((item, index) => (
                    index % 2 ? <Service key={index} item={item} premier={2} second={1} /> : <Service key={index} item={item} premier={1} second={2} />))}
                <span className="prev" onClick={(e) => plusSlides(-1)}>&#10094;</span>
                <span className="next" onClick={(e) => plusSlides(1)}>&#10095;</span>
                <div className="text-center">
                    {SERVICES.map((item, index) => (
                        <span key={index} className="dot" onClick={(e) => currentSlide(index)}></span>
                    ))}
                </div>
            </div>
            <div className="my-5">
                <Actualite actualites={actualites} />
                { !allActu ? <Button title="Toutes les actualités" handleClick={handleClick} /> : null}
            </div>
        </>
    );
};

export const Service = (props) => {
    return (
        <div key={props.item.id} className="service w-75 mx-auto row row-cols-xs-1 row-cols-md-2 justify-content-center">
            <div className="w-100 overflow-hidden h-100" style={{ order: props.premier }}>
                <div className="h-100 overflow-hidden">
                    <img src={props.item.icon} alt="arbre_abattage" className="img-fluid w-100 h-100 rounded" />
                </div>
            </div>
            <div className="justify-content-center" style={{ order: props.second }}>
                <div className="m-4 p-2">
                    <h1 className="font-weight-bold text-dark h5">{props.item.titre}</h1>
                    <ol className="ordered_list">
                        {props.item.options.map((option, index) => (
                            <li style={{ color: 'black', fontWeight: '400'}} key={index}>{option}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};