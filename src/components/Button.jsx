import { useState } from "react"
import { Link } from "react-router-dom"

export default function Button ({type, style, link, content}) {

return (
        <Link to={link} className={`btn ${type} ${style}`}>
        {content}
      </Link>
      
    )
}

{/* <a href="#" className="btn btn-fill-light">
Su di me
</a> */}

{/* <a href="#" className="about__cta-btn cta-btn btn-ghost-dark">
              Vedi i miei lavori
            </a> */}