import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Socials from "../sections/Socials";
import Techs from "../sections/Techs";
import Contact from "../sections/Contact";

export default function Home() {

    return (
        <>
        <Hero />
    <main id="main" className="main-sticky">
     <About />
     <Projects />
     <Socials 
     style="dark"/>
     <Techs />
     <Contact />
     </main>
        </>
    )


}