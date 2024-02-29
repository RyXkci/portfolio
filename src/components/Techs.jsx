import { useState, useRef, useEffect } from "react";

import { techs } from "../utils/imports";
import '../stylesheets/techs.css'

export default function Techs() {
const topScrollWatcherRef = useRef();
const bottomScrollWatcherRef = useRef();

const [isScrolled, setIsScrolled] = useState(false);

useEffect(()=> {
const bottomScrollObserver = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        console.log(entry.isIntersecting)
    })
})
bottomScrollObserver.observe(bottomScrollWatcherRef.current)

}, [])

    return (
        <>
        <div ref={topScrollWatcherRef} className="scroll-watcher-top"></div>
        <div className="section techs-section stuck">
            <div className="techs">
                <div className="techs__list">
                    <p className="techs-list__item">HTML5</p>
                    <p className="techs-list__item">CSS3</p>
                    <p className="techs-list__item">JS</p>
                    <p className="techs-list__item">ES6</p>
                    <p className="techs-list__item">React</p>
                    <p className="techs-list__item">Node</p>
                </div>
                <div className="techs__heading">
                    <h2 className="title title-black">Techs</h2>
                </div>
            </div>
        </div>
        
        <div className="scroll-margin"></div>

        <div className="techs-after">
            </div> 
            <div ref={bottomScrollWatcherRef} className="scroll-watcher-bottom"></div>
        </>
        )
}