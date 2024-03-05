export default function Project({direction, style, title, link}) {

    return (
        <article className={`project ${direction} project-${style}`}>
        <h3 className="project__title">{title}</h3>
        <div className="project__link-container">
           <a href="#" className="project__btn">
          View
        </a>
        </div>
        
      </article>
    )

}