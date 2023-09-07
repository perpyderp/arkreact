
import { useState } from "react";
import { Link } from "react-router-dom";
import { Giga } from "../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export const Navbar: React.FC = () => {

    const [open, setOpen] = useState<Boolean>(false);

    return (
        <>
        <nav className="h-16 bg-dark-green text-vanilla p-3 shadow flex items-center md:justify-between">
            <div className="z-50 md:w-auto w-full flex justify-between">
                <span className="text-2xl cursor-pointer">
                    <img className="h-10 inline md:cursor-pointer" src={Giga} alt="Giga" />
                    <Link to="/" className="ml-2">Ark API</Link>
                </span>
                <div className="md:hidden text-2xl" onClick={()=>setOpen(!open)}>
                    { open ? <FontAwesomeIcon icon={faXmark} shake/> : <FontAwesomeIcon icon={faBars} /> }
                </div>
            </div>
            <ul className="hidden md:flex md:items-center">
                <li>
                    <Link to="/about" className="text-xl mx-4 md:my-0">About</Link>
                </li>
                <li>
                    <Link to="/examples" className="text-xl mx-4 md:my-0">Examples</Link>
                </li>
                <li>
                    <Link to="/docs" className="text-xl mx-4 md:my-0">Docs</Link>
                </li>
                <li>
                    <Link to="/" className="text-xl mx-4 md:my-0">Ark Tame Helper</Link>
                </li>
            </ul>
            {/* Mobile navbar*/}
            <ul 
                className={`md:hidden bg-dark-green absolute mt-3 w-full h-full bottom-0 py-20 pl-4
                duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
                <li>
                    <Link to="/about" className="text-xl mx-4 my-3 inline-block">About</Link>
                </li>
                <li>
                    <Link to="/examples" className="text-xl mx-4 my-3 inline-block">Examples</Link>
                </li>
                <li>
                    <Link to="/docs" className="text-xl mx-4 my-3 inline-block">Docs</Link>
                </li>
                <li>
                    <Link to="/" className="text-xl mx-4 my-3 inline-block">Ark Tame Helper</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}