import { useEffect, useState } from "react";
import axios from "axios";

export default function Table({view}) {
    const databaseURL = "https://67eca027aa794fb3222e43e2.mockapi.io/members";

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(null);

    const fetchData = async () => {
        setLoading(true);

        try {
            let response = await axios.get(databaseURL)
            setData(response.data);
        } catch (error) {
            console.log("Error fetching data:", error)
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    console.log(data)

     return(
        <>
            {loading && <div className="text-4xl font-bold animate-bounce text-black">Loading...</div>}
            <table className="border-2">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border-2 p-3">Name</th>
                        <th className="border-2 p-3">Last Name</th>
                        <th className="border-2 p-3">Position</th>
                        {view === "admin-home-view" &&
                            <th className="border-2 p-3">Action</th>
                        }
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {data.map((e) => (
                        <tr>
                            <td key={e} className="border-2 p-3">{e.name}</td>
                            <td key={e} className="border-2 p-3">{e.lastname}</td>
                            <td key={e} className="border-2 p-3">{e.position}</td>

                            {view === "admin-home-view" &&
                                <td className="border-2 p-3">
                                    <a className="hover:underline" href="#">Delete</a>
                                </td>
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )

}