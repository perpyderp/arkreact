
import { ARKniversary } from "../assets/images"

export const Home: React.FC = () => {
    return (
        <main className="">
            <header className="relative w-full h-full">
                <img className="w-full h-full object-cover object-center filter opacity-30 transition-opacity ease-in-out" src={ARKniversary} alt="dino-bg" loading="lazy" />
                <h1 className="text-center font-bold md:text-4xl lg:text-5xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
                    hover:scale-105 ease-in-out transition-transform">
                    Welcome to the ARK API!
                </h1>
            </header>
        </main>
    )
}