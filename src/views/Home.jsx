import { useState } from "react"
import ViewToggleButton from "../components/ViewToggleButton"
import UserSection from "./UserSection";
import AdminSection from "./AdminSection";

export default function Home() {
    const [view, setView] = useState("");

    return(
        <div className="bg-[#fbf0d9] min-h-dvh">
            <h1 className="text-center pt-8 text-4xl font-bold">Generation Thailand React - Assessment</h1>
            <div className="flex justify-center items-center gap-x-4 pb-8 pt-8">
                <ViewToggleButton
                onClick={() => {
                    setView("user-home-view");
                }}>
                    User Home View
                </ViewToggleButton>

                <ViewToggleButton onClick={() => {
                    setView("admin-home-view");
                }}>
                    Admin Home View
                </ViewToggleButton>
            </div>

            {view === "user-home-view" && <UserSection />}
            {view === "admin-home-view" && <AdminSection />}
        </div>
    )
}