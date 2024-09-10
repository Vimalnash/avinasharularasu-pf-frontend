import { About } from "../Components/About";
import { Contact } from "../Components/Contact";
import { Welcome } from "../Components/Welcome";
import { Menubar } from "../Components/Menubar";
import { Projects } from "../Components/Projects";
import { Footer } from "../Components/Footer";
import { Skills } from "../Components/Skills";

export function HomePage() {
    return (
        <>
        <div></div>
            <Menubar />
            <Welcome />
            <About>
                <Skills />
            </About>
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}