
import Giga from "../assets/images/giga.png";

export const Navbar: React.FC = () => {

    return (
        <nav className=" bg-dark-green p-3">
            <span className="text-2xl cursor-pointer">
                <img className="h-10 inline" alt="Giga" />
                <a href="/">ARK API</a>
            </span>
            <a href="/docs">Docs</a>
            <a href="/about">About</a>
        </nav>
    )
}