import { useNavigate } from "react-router-dom";
import { UseAppContext } from "../Context/AppContext";

// Project Card Layout Component for Main Page
export function ProjectCard(props) {
    const {theme} = UseAppContext();
    const navigate = useNavigate();
    return (
        <div className="w-full border-[3px] border-teal-200 flex flex-col rounded-xl transition-all ease-in-out duration-300 shadow-xl hover:shadow-[0px_0px_5px_5px_#2dd4bf] lg:w-64">
            <div className="">
                <h2 className="rounded-t-lg p-2 text-lg uppercase font-semibold text-center border-b-2 border-gray-200 shadow-[inset_0px_0px_5px_3px_#f2f2f2]">{props.projTitle}</h2>
            </div>
            <div className="w-full">
                <img className="shadow-[inset_0px_0px_5px_5px_rgb(0,0,0)]" src={props.projImg} alt="ProjectImage" />
            </div>
            <div className={`${theme=="dark" ? "bg-gray-800":"bg-gray-200"} h-full rounded-b-xl flex flex-col justify-between gap-4 p-5 `}>
                <p className="text-md h-32">{props.projShortDesc}</p>
                <div className="flex flex-row justify-center">
                    <button 
                        className="px-6 py-2 rounded-xl btn btn-accent hover:scale-110 ease-in-out transition-all duration-300"
                        onClick={() => navigate(`/project/${props.page}`)}
                        >View Details
                    </button>
                </div>
            </div>
        </div>
    )
};
