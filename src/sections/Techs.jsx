import { useState, useRef, useEffect } from "react";
import {v4 as uuid} from "uuid"

import { techs } from "../utils/imports";
import '../stylesheets/techs.css'

export default function Techs() {

    return (
        <>
        <div className="scroll-watcher-top"></div>
        <div id="techs" className="section techs-section stuck">
            <div className="techs">
                <div className="techs__list">
                    <ul>
                       {techs.map((tech) => {
                       return <li key={uuid()} className="techs-list__item">{tech}</li>
                       })}
                    </ul>
                </div>
                <div className="techs__heading">
                    <h2 className="title title-black">Techs</h2>
                </div>
            </div>
        </div>
        
        {/* BOTTOM MARGIN TO SCROLL BEFORE LOWER STICKY SECTION SHOWS UP */}
        <div className="scroll-margin"></div>

        <div className="portfolio-info">
            <div className="portfolio-info__inner contained">
                <p className="text-black portfolio-info__text">Questo portfolio è stato creato con React con l'utilizzo di "react-router-dom" e file JSON</p>
                <a href="https://github.com/RyXkci/portfolio" className="portfolio-info__link has-link-hover">Clicca qua per vedere la repo su GitHub</a>
                
            </div>
            </div> 
        </>
        )
}