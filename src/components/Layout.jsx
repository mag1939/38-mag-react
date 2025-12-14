import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner"

export default function Layout() {

    return(
        <div>
            <Navbar />
            <div>
                <Outlet />
                <Toaster position="top-center" />
            </div>
        </div>
    )
}