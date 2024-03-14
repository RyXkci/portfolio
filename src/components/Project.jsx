export default function Project({direction, style, title, link}) {

    return (
      // DYNAMIC CLASSNAMES. DIRECTON DETERMINES HOW CSS WILL SET THE GRID ROWS OR COLUMNS
        <article className={`project ${direction} project-${style}`}>
        <h2 className="project__title">{title}</h2>
        <div className="project__link-container">
           <a href={`/projects/${link}`} className="project__btn">
          View
        </a>
        </div>
        
      </article>
    )

}