import '../stylesheets/contact-links.css'
import {v4 as uuid} from "uuid";


export default function ContactLinks({style, links}) {
    return (
    <div className="contact-links-container contact-links-light">
        {links.map(link => (
            <div key={uuid()}>
                <p className="contact-link has-link-hover">
                    <span className="contact-icon">{link.icon}</span>
                    <a href={link.link}>{link.text}</a>
                </p>
            </div>
        ))}

    </div>
    )
}