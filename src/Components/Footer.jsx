import React from "react";
import { RiLinkedinBoxFill} from "react-icons/ri";

export function Footer() {
    return (
        <div className="w-full min-h-40 p-5 bg-gradient-to-r from-teal-900 to-teal-600 text-slate-100">
            <div className="flex flex-col justify-center gap-5 lg:flex-row">
                <div className="flex justify-center">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-lg font-semibold text-center">Navigate to</h2>
                        <ul className="list-disc list-inside p-2">
                            <li><a href="#welcome">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-lg font-semibold text-center">Follow</h2>
                        <ul className="list-disc list-inside p-2">
                            <li className="flex flex-row justify-start items-center gap-2 hover:text-orange-300 hover:scale-110 ease-in-out duration-300 transition-all cursor-pointer">
                                <RiLinkedinBoxFill size={24} className="" />
                                <a 
                                    class="badge-base__link LI-simple-link" 
                                    href="https://in.linkedin.com/in/avinash-arularasu-b6572754?trk=profile-badge" 
                                    target="_blank">
                                    Linkedin
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className="pt-5 font-none text-center">
                <sup>&copy;</sup>2024 Developed and Maintained by Avinash Arularasu
            </div>
        </div>
    )
};
