import Table from "../components/Table"
import { useEffect, useState } from "react";
import axios from "axios";

export default function UserSection() {

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

    return(
        <div className="flex flex-col gap-4 justify-center items-center">
            <Table data={data} loading={loading}/>
        </div>
    )
}