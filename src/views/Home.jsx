import { useEffect, useState } from "react"
import ViewToggleButton from "../components/ViewToggleButton"
import UserSection from "./UserSection";
import AdminSection from "./AdminSection";
import { useLocation } from "react-router-dom"; // Import useLocation

export default function Home() {
    const [view, setView] = useState("");
    const location = useLocation();

    // วิธีการ reset หน้า Home เมื่อกดปุ่ม Nav Home
    // เพิ่ม location.key เข้าไปใน Dependency Array เพื่อให้เมื่อไหร่ที่ key เปลี่ยน useEffect จะทำงาน
    // location.key คือ unique key string ที่ได้มาทุกครั้งที่มีการคลิกปุ่ม navigate path (ในทีนี้ผมใช้ <Link to="/new-path">)
    useEffect(() => {
        console.log("useEffect is running. Path:", location.pathname, "Key:", location.key);

        // ถ้า Path คือ "/" ให้รีเซ็ต view state เป็น ""
        // การรีเซ็ต view นี้จะเกิดขึ้นได้ 2 กรณี:
        // 1. กด Home จากหน้า Owner (Path เปลี่ยน)
        // 2. กด Home ซ้ำในหน้า Home (Key เปลี่ยน)
        if (location.pathname === "/") {
            setView("");
        }
    }, [location.key]);

    return(
        <div className="bg-slate-500 min-h-dvh">

            <h1 className="text-center pt-8 text-4xl font-bold">
                {(view === "user-home-view") && "Generation Thailand Home - User View"}
                {(view === "admin-home-view") && "Generation Thailand Home - Admin View"}
                {(view === "") && "Generation Thailand React - Assessment"}
            </h1>

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
            
            <div className="flex overflow-hidden">
                <img className="rounded-2xl items-center" src="https://media.tenor.com/uKgFxE-hwf0AAAAj/spider-doro.gif" alt="Gachimuchi" />
                <img className="rounded-2xl items-center" src="https://media.tenor.com/uKgFxE-hwf0AAAAj/spider-doro.gif"
                alt="Gachimuchi" />
                <img className="rounded-2xl items-center" src="https://media.tenor.com/uKgFxE-hwf0AAAAj/spider-doro.gif"
                alt="Gachimuchi" />
                <img className="rounded-2xl items-center" src="https://media.tenor.com/uKgFxE-hwf0AAAAj/spider-doro.gif"
                alt="Gachimuchi" />
                <img className="rounded-2xl items-center" src="https://media.tenor.com/uKgFxE-hwf0AAAAj/spider-doro.gif"
                alt="Gachimuchi" />

            </div>
            {view === "user-home-view" && <UserSection />}
            {view === "admin-home-view" && <AdminSection view={view}/>}
        </div>
    )
}