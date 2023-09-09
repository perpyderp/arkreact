import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

export const MainLayout: React.FC = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}