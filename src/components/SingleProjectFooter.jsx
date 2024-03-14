
import { Link } from 'react-router-dom'
import '../stylesheets/single-project-footer.css'


export default function SingleProjectFooter() {

    return (
       
            <section className="single-project-footer__container">
                <Link to="/#projects" className="project-footer__link has-link-hover">vediTutti()</Link>
                <Link to="/#homeHero" className="project-footer__link has-link-hover">tornaAllaHome()</Link>
            </section>
    )
}