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
                    sub="Focussed on Wedding Related Event Management Concept - Complex CRUD Operations and Navigation - Logical Calculations(AmountRegarding) -  Admin, VendorWise, UserWise Login process and Data Management using Authenticaion and Authorization"
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
                    <li>
                        <span className="font-semibold text-blue-400">Authentication Layers Applied</span>
                        
                        <ul className="list-disc list-inside">
                            <table className="table-auto border-collapse border border-slate-400">
                                <thead>
                                    <tr>
                                        <th className="p-2 border border-slate-400 text-center text-slate-500">Login</th>
                                        <th className="p-2 border border-slate-400 text-center text-slate-500">Email</th>
                                        <th className="p-2 border border-slate-400 text-center text-slate-500">Password</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="p-2 border border-slate-400 text-slate-400">Admin</th>
                                        <td className="p-2 border border-slate-400">admin@gmail.com</td>
                                        <td className="p-2 border border-slate-400">admin@123</td>
                                    </tr>
                                    <tr>
                                        <th className="p-2 border border-slate-400 text-slate-400">User</th>
                                        <td className="p-2 border border-slate-400">user@gmail.com</td>
                                        <td className="p-2 border border-slate-400">user@123</td>
                                    </tr>
                                    <tr>
                                        <th className="p-2 border border-slate-400 text-slate-400">Vendor</th>
                                        <td className="p-2 border border-slate-400">vendor1@gmail.com</td>
                                        <td className="p-2 border border-slate-400">vendor@123</td>
                                    </tr>
                                </tbody>
                            </table>
                        </ul>
                    </li>
                    <br />
                    <li>
                        <span className="font-semibold text-blue-400">Admin WorkAround</span>
                        <ul className="list-disc list-inside">
                            <li>
                                <span className="font-semibold">User Menu - </span>
                                <ul className="list-disc list-inside pl-4">
                                    <li>Login Using admin Credentials.</li>
                                </ul>
                            </li>
                            <li>
                                <span className="font-semibold">Admin Menu - </span>
                                <ul className="list-disc list-inside pl-4">
                                    <li>Event Category    Like Wedding, Reception, PreWedding, etc..</li>
                                    <li>Event Services    Photography, Catering, Travel, OverallEventManageLtds, etc...</li>
                                </ul>                                
                            </li>
                        </ul>
                    </li>
                    <br />
                    <li>
                        <span className="font-semibold text-blue-400">Vendor WorkAround (To Update Their Basic Package details)</span>
                        <ul className="list-disc list-inside">
                            <li>
                                <span className="font-semibold">Vendors-BusinessSignup Menu</span>
                                <ul className="list-disc list-inside pl-4">
                                    <li>Signup Using New Credentials.</li>
                                    <li>Login using already Signedup credentials.</li>
                                </ul>
                            </li>
                            <li>
                                <span className="font-semibold">Vendor Menu</span>
                                <ul className="list-disc list-inside pl-4">
                                    <li>
                                        <span className="font-semibold">View Main Package DetailsVendor Menu</span>
                                        <ul className="list-disc list-inside pl-4">
                                            <li>Vendor Shall Add 1 Main/Base PackageDetails to display in users vendor dashboard.</li>
                                            <li>Edit any no of times.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className="font-semibold">View Payment Terms</span>
                                        <ul className="list-disc list-inside pl-4">
                                            <li>Vendor Shall Add 1 Payment Terms to show users.</li>
                                            <li>Edit any no of times..</li>
                                        </ul>
                                    </li>
                                </ul>                                
                            </li>
                        </ul>
                    </li>
                    <br />
                    <li>
                        <span className="font-semibold text-blue-400">User WorkAround (To Plan their events)</span>
                        <ul className="list-disc list-inside">
                            <li>
                                <span className="font-semibold">User Menu</span>
                                <ul className="list-disc list-inside pl-4">
                                    <li>Signup Using New Credentials.</li>
                                    <li>Login using already Signedup credentials.</li>
                                </ul>
                            </li>
                            <li>
                                <span className="font-semibold">VendorSearch</span>
                                <ul className="list-disc list-inside pl-4">
                                    <li>
                                        <span className="font-semibold">Displays Vendor Basic Detail Cards</span>
                                        <ul className="list-disc list-inside pl-4">
                                            <li>Click View Detail to show Detailed View of the Vendor services.</li>
                                            <li>Use "Add to Favourites" and "Remove from Favourites".</li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="list-disc list-inside">
                                    <li>
                                        <span className="font-semibold">Plan-Register-Pay</span>
                                        <ul className="list-disc list-inside pl-4">
                                            <li>
                                                <span className="font-semibold">My Favourite Vendors </span>
                                                <ul className="list-disc list-inside pl-4">
                                                    <li>Displays Vendor Cards Which added to your Favourites.</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <span className="font-semibold">Event Plan Main Details  </span>
                                                <ul className="list-disc list-inside pl-4">
                                                    <li>Form To Input Main Event Plan Details.</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <span className="font-semibold">Dashbord - Event Plan </span>
                                                <ul className="list-disc list-inside pl-4">
                                                    <li>Displays Main Events Only.</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <span className="font-semibold">Dashboard - Event Plan Detailed View</span>
                                                <ul className="list-disc list-inside pl-4">
                                                    <li>Detailed View of the Event.</li>
                                                    <li>Edit - Edit to edit the Main plandetails.</li>
                                                    <li>Del  - Delete is Disabled When Vendor is Planned.</li>
                                                    <li>
                                                        <span className="font-semibold">PlanVendor</span>
                                                        <ul className="list-disc list-inside pl-4">
                                                            <li>
                                                                Plan different Vendors for the event services like Photography, Catering, Travelarrangements, Hall,..
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <span className="font-semibold">PlanEventPreference</span>
                                                        <ul className="list-disc list-inside pl-4">
                                                            <li>
                                                                User Preference Description input for the event regarding.
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <span className="font-semibold">User Preference cards View</span>
                                                        <ul className="list-disc list-inside pl-4">
                                                            <li>
                                                                Shall Edit and Delete.
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <span className="font-semibold">Planned Vendor Details Cards ViewDashboard - Event Plan Detailed View</span>
                                                        <ul className="list-disc list-inside pl-4">
                                                            <li>Edit  Disabled when Registered Checked.</li>
                                                            <li>Del   Disabled when Registered Checked.</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <span className="font-semibold">RaisePayment - Event Payment</span>
                                                        <ul className="list-disc list-inside pl-4">
                                                            <li>Enabled When Registered.</li>
                                                            <li>Payment Made details input.</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <span className="font-semibold">ViewPayments</span>
                                                        <ul className="list-disc list-inside pl-4">
                                                            <li>Enabled When Registered.</li>
                                                            <li>Dashboard Cards View for the payments made for that particular vendor.</li>
                                                            <li>Edit  Payments made shall be edited.</li>
                                                            <li>Del   Payments made shall be deleted.</li>
                                                        
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <span className="font-semibold">Event Summary View</span>
                                                        <ul className="list-disc list-inside pl-4">
                                                            <li>Planned Basis.</li>
                                                            <li>Confirmed/Registerd Basis.</li>                                        
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            
                                        </ul>
                                    </li>
                                </ul>                                
                            </li>
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
                    sub="Focussed on Beautiful LandingPage with Register,Login, Contact and UserRatingForm(CRUD Operation) and Responsiveness"
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
                    <li><span className="font-semibold">Users Login - </span>Who search for to go for a Trip
                        <ul className="list-disc list-inside">
                            <li>Registration and Login with Authentication and Authorization Process(token generation), Password Hash</li>
                            <li>New User Register and Activate via Mail to access the portal</li>
                            <li>Existing User Login</li>
                            <li>Forgot Password Functionality, Reset via mail by accessing reset link sent to the respective person</li>
                            <li>Contact Form to approach the site provider - Sends the details to admin mail</li>
                            <li>User Rating Form - Mobile App Model (CRUD Operation)</li>
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
                    sub="Focussed on the Contents of Myself and ThemeSetting and Responsiveness and Interactive design"
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
                <li><span className="font-semibold">Theme Color - </span>Used Custome Theme and DarkMode Switch</li>
                <li><span className="font-semibold">Project Detail Page </span> Static Contents used Tables, Lists, Paragraph, span</li>
                <li><span className="font-semibold">Contact Detail Submit - </span>Message Stored and Sent to the me in mail</li>
                </>
            </ProjectDetailCard>
            ):("")
        }
        {
            projTitle == "MovieBrowser" ?
            (       
                <ProjectDetailCard
                    title="Movie Browser"
                    sub="Implemented Search Functionality for Movies Search and Movie Full Details Page and Basic Login and Logout Navigation"
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
                    <li>
                        <span className="font-semibold">Login User only shall able to search.</span>
                        <span className="font-semibold">Beautiful user friendly Search Page for large screen only </span>
                        <span className="font-semibold">Backtrack to Detail page.</span>
                    </li>
                </>
            </ProjectDetailCard>
            ):("")
        }
        </div>
    )
}