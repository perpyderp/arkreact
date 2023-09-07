
import { ARKniversary } from "../assets/images"

export const Home: React.FC = () => {
    return (
        <main className="">
            <header className="max-w-full inline-block">
                <h1 className="absolute in-line-block text-6xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">Welcome to the ARK API!</h1>
                <img src={ARKniversary} className="max-w-full h-auto block opacity-20 top-16 left-0 absolute" alt="ark-dinos" loading="lazy" />
            </header>
            
        </main>
    )
}