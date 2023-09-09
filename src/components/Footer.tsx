
import { Giga } from "../assets/images";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <footer className="w-full pt-12">
                <nav>
                    <ul className="flex flex-row justify-center space-x-12">
                        <span className="text-2xl cursor-pointer">
                            <img className="h-10 inline md:cursor-pointer" src={Giga} alt="Giga" />
                            <Link to="/" className="ml-2">Ark API</Link>
                        </span>
                        <li>2023 © RAWG, Behind The Games </li>
                        <li><a href="https://github.com/perpyderp">My Github</a></li>
                        <li></li>
                    </ul>
                </nav>
            </footer>
        </>
    )
}