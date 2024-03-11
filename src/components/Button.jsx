import { useState } from "react"
import { Link } from "react-router-dom"

export default function Button ({type, style, link, content}) {

return (

  // DYNAMIC CLASSES FOR STYLING
        <Link to={link} className={`btn ${type} ${style}`}>
        {content}
      </Link>
      
    )
}
