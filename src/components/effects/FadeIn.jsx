import { useState, useEffect, useRef } from "react";


export default function FadeIn({tag, className, content}) {
const Tag = tag;

const [isAnimated, setIsAnimated] = useState(false)
const textEffectRef = useRef()

// CSS CLASSES TO APPLY WHEN INTERSECTING
const animation = !isAnimated ? "has-fade-animation" : "faded transition-1"

   useEffect(()=> {
     const textObserver = new IntersectionObserver(entries => {
         entries.forEach((entry) => {
          setIsAnimated(entry.isIntersecting)

         })
     })
    textObserver.observe(textEffectRef.current)
    return () => {
        textObserver.disconnect();
    }
   }, [])


return (
   <Tag ref={textEffectRef} className={`${className} ${animation}`}>{content}</Tag>
)
}