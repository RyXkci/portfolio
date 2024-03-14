import { Link } from "react-router-dom"

export default function ContactStripe(style) {

    return (
        <div className="contact-stripe contact-stripe-light">
            <Link to="/#contact" className="contact-stripe__link has-link-hover">Contattami()</Link>
        </div>
    )


}