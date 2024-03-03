import { useState } from "react"

export default function Button ({type, style, link, content}) {

return (
        <a href={link} className={`btn ${type} ${style}`}>
        {content}
      </a>
      
    )
}

{/* <a href="#" className="btn btn-fill-light">
Su di me
</a> */}

{/* <a href="#" className="about__cta-btn cta-btn btn-ghost-dark">
              Vedi i miei lavori
            </a> */}