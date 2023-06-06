import './App.css';
import { Home, About, Documentation } from './pages/index';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/docs",
    element: <Documentation />
  }
]);

function App() {
  return (
    <div className="App">
      <main className="site-content">
        <RouterProvider router={router} />
      </main>
      <footer className="site-footer">
        
      </footer>
    </div>
  );
}

export default App;
