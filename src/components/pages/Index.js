import React from "react";
import '../css/index.css';
import { Link } from 'react-router-dom';

export const Index = () => {
    return (
        <div className="Index">
            <div className="block-accueil rounded-pill container-fluid position-relative d-md-flex justify-content-between">
                <h2 className="h4 text-white mx-5 align-text-center w-25 h-100">SYSTEME INFORMATIQUE DE GESTION DES INFORMATIONS FORESTIERES</h2>
                <h2 className="h4 text-white mx-5 align-text-center w-25 h-100">FOREST INFORMATION MANAGEMENT COMPUTER SYSTEM</h2>
                <div className="block-cercle rounded-circle position-absolute">
                    <Link to="/modules"className="btn btn-primary startnow border border-white rounded-pill px-5">Start now</Link>
                </div>
            </div>
            
        </div>
    );
}