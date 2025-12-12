import { Link } from "react-router-dom";

export default function Navbar() {

    return(
        <nav className="bg-slate-200 border-b-2 border-slate-200 font-bold p-4 shadow-md">
            <ul className="flex gap-4 justify-end ">
                <li className="hover:underline">
                    <Link to={"/"}>Home</Link>
                </li>
                <li className="hover:underline">
                    <Link to={"/owner"}>Owner</Link>
                </li>
            </ul>
        </nav>
    )

}