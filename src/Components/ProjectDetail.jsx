import { Link, useNavigate, useParams } from "react-router-dom";
import { ProjectDetailCard } from "../Layouts/ProjectDetailCard";

// Project Details Page display based on Project clicked
export function ProjectDetail() {
    const projectName = useParams();
    const projTitle = projectName.projDetail;
    const navigate = useNavigate();
    // console.log(projectName)

    return (
        <div>
        <div className="flex flex-row justify-center items-center w-full z-40 h-12 text-white text-xl font-semibold bg-gradient-to-b from-teal-100 to-teal-800 sticky top-0 left-0 right-0">
            {/* <button 
                className="hover:text-orange-300 hover:scale-110 ease-in-out duration-300 cursor-pointer" 
                onClick={() => {navigate("/"); window.scrollTo(0,750)} }
            >
                &larr;GoBack
            </button> */}
            <a 
                className="hover:text-orange-300 hover:scale-110 ease-in-out duration-300 cursor-pointer" 
                onClick={() => {navigate("/")}}
                href="#projects"
            >
                &larr;GoBack
            </a>
        </div>

        {
            projTitle == "weddingwise-eventmanagement" ?
            (
                <ProjectDetailCard
                    title="Event Management"
                    sub="Focussed on Wedding Related Event Management Concept Complex CRUD Operations"
                    url="https://weddingwise-em-frontend.netlify.app/"
                    implementlist={
                            <ul className="flex flex-col flex-wrap gap-4 list-disc list-inside md:flex-row md:gap-8">
                                <li>MongoDB</li>
                                <li>Expressjs</li>
                                <li>Reactjs</li>
                                <li>Nodejs</li>
                                <li>CSS-BootStrap and Custom</li>
                        </ul>
                    }
                >
                    <>
                            <li><span className="font-semibold">Admin Login - </span>Website Handler,</li>
                            <li><span className="font-semibold">Users Login - </span>Who search for event organisers to plan their events,
                                <ul className="list-disc list-inside">
                                    <li>New User Signup & Existing User Login</li>
                                    <li>Search from list of vendors</li>
                                    <li>Add to Favourites/Shortlist vendors who they like</li>
                                    <li>Remove from Favourites</li>
                                </ul>
                            </li>
                            <li><span className="font-semibold">Vendors/EventOrganizers Login - </span>Who Arrange Events or part of event like Photographers, Decorators, Travels, Food, etc...
                                <ul className="list-disc list-inside">
                                    <li>New Vendor Register Their Business & Existing Vendor Login</li>
                                    <li>Input details like their location, business nature, budget wise details, previous executions, rating,..</li>
                                </ul>
                            </li>
                    </>
                </ProjectDetailCard>
            ):("")
        }

        {
            projTitle == "travelapp-management" ?
            (       
                <ProjectDetailCard
                    title="Travel/Tour Arrangement App"
                    sub="Focussed on LandingPage with Register,Login, Contact and UserRatingForm CRUD Operation and Responsiveness"
                    url="https://tripworld.netlify.app/"
                    implementlist={
                            <ul className="flex flex-col flex-wrap gap-4 list-disc list-inside md:flex-row md:gap-8">
                                <li>MongoDB</li>
                                <li>Expressjs</li>
                                <li>Reactjs</li>
                                <li>Nodejs</li>
                                <li>CSS-Tailwind and Custom</li>
                        </ul>
                }
            >
                <>
                    <li><span className="font-semibold">Admin Login - </span>Website Handler,</li>
                    <li><span className="font-semibold">Users Login - </span>Who search for to go for a Trip
                        <ul className="list-disc list-inside">
                            <li>New User Register with Activation from Mail & Existing User Login</li>
                            <li>Forgot Password Functionality</li>
                            <li>Contact Form</li>
                            <li>User Rating Form - Mobile App Model</li>
                        </ul>
                    </li>
                </>
            </ProjectDetailCard>
            ):("")
        }
        {
            projTitle == "avinashportfolio" ?
            (       
                <ProjectDetailCard
                    title="Portfolio-Avinash Arularasu"
                    sub="Focussed on the Contents of Myself and ThemeSetting and Responsive and Interactive design"
                    url="https://avinasharularasu.netlify.app/"
                    implementlist={
                            <ul className="flex flex-col flex-wrap gap-4 list-disc list-inside md:flex-row md:gap-8">
                                <li>MongoDB</li>
                                <li>Expressjs</li>
                                <li>Reactjs</li>
                                <li>Nodejs</li>
                                <li>CSS-Tailwind and Custom</li>
                        </ul>
                }
            >
                <>
                    <li><span className="font-semibold">Contact Detail Submit - </span>Message Stored and Sent mail Option</li>
                </>
            </ProjectDetailCard>
            ):("")
        }
        {
            projTitle == "MovieBrowser" ?
            (       
                <ProjectDetailCard
                    title="Movie Browser"
                    sub="Search Functionality and Movie Details Page"
                    url="https://moviesglobal.netlify.app/"
                    implementlist={
                            <ul className="flex flex-col flex-wrap gap-4 list-disc list-inside md:flex-row md:gap-8">
                                {/* <li>MongoDB</li>
                                <li>Expressjs</li>
                                <li>Nodejs</li> */}
                                <li>Reactjs</li>
                                <li>CSS-Bootstrap and Custom</li>
                        </ul>
                }
            >
                <>
                    <li><span className="font-semibold text-rose-800">Basic very simple Login page</span>
                    </li>
                </>
            </ProjectDetailCard>
            ):("")
        }
        </div>
    )
}