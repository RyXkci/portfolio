import { useState, useEffect, useRef } from "react";

import Button from "../Button";

export default function SlideIn({tag, className, direction, content, link}) {
const Tag = tag;
const [isAnimated, setIsAnimated] = useState(false);
const slideRef = useRef();

useEffect(() => {
    const slideObserver = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
    setIsAnimated(entry.isIntersecting)
    
})

    })
    slideObserver.observe(slideRef.current)
    return () => {
        slideObserver.disconnect();
    }
}, [])

// STRING TEMPLATE LITERALS FOR SLIDE EFFECT CLASSES. CSS SLIDES FROM DIRECTION SPECIFIED
const animated = !isAnimated ? `has-slide-${direction}-animation` : "slide animated transition-2"
    
    
    return (
<Tag ref={slideRef} className={`${className} ${animated}`}>
<Button 
type="btn-bg"
style="btn-ghost-dark"
link={link}
content={content}
/>
    
</Tag>
    )
}