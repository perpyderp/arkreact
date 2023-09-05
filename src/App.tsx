import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { Home, Examples, About, Docs, Error } from "./pages";
import { Navbar } from "./components";

const App: React.FC = () => {

    const router = createBrowserRouter([
        {
            element: <Navbar />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                    errorElement: <Error />,
                },
                {
                    path: "/about",
                    element: <About />,
                },
                {
                    path: "/examples",
                    element: <Examples />,
                },
                {
                    path: "/docs",
                    element: <Docs />,
                },
            ]
        }
    ]);

    return (
        <div className="bg-dark text-vanilla min-h-screen">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
