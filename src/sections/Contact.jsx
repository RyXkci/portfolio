import { useState } from 'react'
import '../stylesheets/contact.css'

import ContactLinks from '../components/ContactLinks'
import Socials from '../sections/Socials'
import MovingDotsUp from '../components/effects/MovingDotsUp'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {

    const phoneIcon = <FontAwesomeIcon icon={faPhone} />
    const mailIcon = <FontAwesomeIcon icon={faEnvelope} />
const [links, setLinks] = useState([
    {
        icon: phoneIcon,
        text: "+393488613717",
        link: "tel:+393488613717"
    },
    {
        icon: mailIcon,
        text: "ricardo@ricardobozzi.com",
        link: "mailto:ricardo@ricardobozzi.com"
    }

])

    return (
        <div id="contact" className="contact">
            <section className="contact__inner contained">
            <MovingDotsUp />
                <h1 className="contact__title title-acc--light">contattamiOra()</h1>
                <ContactLinks
                style="light"
                links={links} />
                <Socials 
                style="dark"/>

            </section>
        </div>
    )
}