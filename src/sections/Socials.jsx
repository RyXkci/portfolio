import '../stylesheets/socials.css'
import { logos } from "../utils/imports"

export default function Socials() {
console.log(logos)
    return ( 
        <section className="section socials-section">
             <h1 className="title title-black">connetti()</h1>
        <div className="social__logos logos">
        {logos.map((logo) => (
        <img className="logo" key={logo.id} src={logo.src} alt={logo.alt} />
      ))}
        </div>
        </section>
       
    )
}