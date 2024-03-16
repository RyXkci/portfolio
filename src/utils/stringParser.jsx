const formatText = (str) => {
    return String(str).split(/\n/).map((paragraph, i) => {
      return <p key={i} className='project__info-text text-white'>{paragraph}</p>
    })
  }

  export {formatText}