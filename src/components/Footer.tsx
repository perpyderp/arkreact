
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { Giga } from "../assets/images";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <footer className="w-full pt-12 px-5">
                <nav>
                    <ul className="flex flex-row justify-center space-x-7">
                        <span className="text-2xl cursor-pointer hover:scale-105 ease-in-out transition-all hover:text-dark-green-2 duration-150">
                            <img className="h-10 inline md:cursor-pointer" src={Giga} alt="Giga" />
                            <Link to="/" className="ml-2">Ark API</Link>
                        </span>
                        <li>2023 © Jacob Cuison </li>
                        <li className="text-2xl cursor-pointer hover:scale-105 ease-in-out transition-all hover:text-dark-green-2 duration-150"><a href="https://github.com/perpyderp">My Github</a></li>
                        <li>
                            <a href="mailto:jacob.cuison7@gmail.com">
                                <FontAwesomeIcon className="hover:scale-110 ease-in-out transition-transform hover:text-dark-green-2 duration-150" icon={faEnvelope} />
                            </a>
                        </li>
                    </ul>
                </nav>
            </footer>
        </>
    )
} 