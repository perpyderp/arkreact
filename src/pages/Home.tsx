
import { ARKniversary } from "../assets/images"

export const Home: React.FC = () => {
    return (
        <>
            <h1 className="bg-text-4xl">Home</h1>
            <img src={ARKniversary} className="top-16 opacity-70 left-0 w-screen" alt="ark-dinos" loading="lazy" />
        </>
    )
}