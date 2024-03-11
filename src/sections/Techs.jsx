import { useState, useRef, useEffect } from "react";

import { techs } from "../utils/imports";
import '../stylesheets/techs.css'

export default function Techs() {
const topScrollWatcherRef = useRef();
const bottomScrollWatcherRef = useRef();

const [isScrolled, setIsScrolled] = useState(false);


    return (
        <>
        <div ref={topScrollWatcherRef} className="scroll-watcher-top"></div>
        <div id="techs" className="section techs-section stuck">
            <div className="techs">
                <div className="techs__list">
                    <ul>
                       {techs.map((tech) => {
                       return <li className="techs-list__item">{tech}</li>
                       })}
                    </ul>
                </div>
                <div className="techs__heading">
                    <h2 className="title title-black">Techs</h2>
                </div>
            </div>
        </div>
        
        <div className="scroll-margin"></div>

        <div className="portfolio-info">
            <div className="portfolio-info__inner contained">
                <p className="text-black portfolio-info__text">Questo portfolio è stato creato con React con l'utilizzo di "react-router-dom" e file JSON</p>
                <p className="text-black portfolio-info__text has-lines"><a href="#" className="portfolio-info__link">Clicca qua per vedere la repo su GitHub</a></p>
                
            </div>
            </div> 
            <div ref={bottomScrollWatcherRef} className="scroll-watcher-bottom"></div>
        </>
        )
}