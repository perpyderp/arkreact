import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { Home, Examples, About, Docs, Error } from "./pages";
import { MainLayout } from "./components/MainLayout";

const App: React.FC = () => {

    const router = createBrowserRouter([
        {
            element: <MainLayout />,
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
        <div className="bg-dark text-vanilla min-h-screen pb-7">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
