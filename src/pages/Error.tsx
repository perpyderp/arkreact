
import { useRouteError } from "react-router-dom";

export const Error: React.FC = () => {

    const error: any = useRouteError();

    return (
        <div>
            <h1 className="text-4xl">Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}