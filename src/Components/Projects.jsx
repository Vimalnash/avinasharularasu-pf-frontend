import { ProjectCard } from "../Layouts/ProjectCard";
import imgLandingPage from "../assets/img/projImages/WeddingWise-EM/LandingPage.jpg"
import imgTravelApp from "../assets/img/projImages/TravelApp/TravelAppLandingPage.jpg"
import imgPortfolio from "../assets/img/projImages/Portfolio-AvinashArularasu/PortfolioLandingPage.jpg"
import imgMovieBrowser from "../assets/img/projImages/MovieBrowser/SearchPage.jpg"

export function Projects() {
    return (
        <div id="projects" className="min-h-screen pt-16 bg-gradient-to-l from-base-100 to-base-200 tracking-wide">
            <h3 className="mb-10 text-4xl font-semibold text-center">MyProjects</h3>
            <div className="pb-10 flex flex-col justify-center items-center gap-[20px] px-5 md:px-32 lg:flex-row lg:flex-wrap lg:gap-10">
                <ProjectCard 
                    projImg={imgLandingPage}
                    projTitle="Event Management"
                    projShortDesc="Excellent Concept Focussed On Wedding Event Arrangement with Userwise, VendorWise DataManagement"
                    page="weddingwise-eventmanagement"
                />
                <ProjectCard 
                    projImg={imgTravelApp}
                    projTitle="Travel App"
                    projShortDesc="Beautiful LandingPage with Responsiveness Full Login Functionality and UserRating-MobileApp Model(CRUD)"
                    page="travelapp-management"
                />
                <ProjectCard 
                    projImg={imgPortfolio}
                    projTitle="Portfolio"
                    projShortDesc="Simple and Elegant with Different Theme, ContactForm with saving in backend"
                    page="avinashportfolio"
                />
                <ProjectCard 
                    projImg={imgMovieBrowser}
                    projTitle="Movie Browser"
                    projShortDesc="Browse from Millions of Movies to get Details"
                    page="MovieBrowser"
                />
            </div>
        </div>
    )
}