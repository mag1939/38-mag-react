import Table from "../components/Table"
import FormAddUser from "../components/FormAddUser"
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminSection({view}) {

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
            <h1 className="font-semibold text-slate-200">Create User Here</h1>
            {/* onUserCreated สั่งให้เรียกใช้ fetchData ซึ่งอยู่ตรง parent component นี้ มันจะทำการเรียก api เพื่อดึงข้อมูลลงตารางใหม่ update ค่าที่เราใส่ไปให้เห็นบนจอ*/}
            <FormAddUser onUserCreated={fetchData}/>
            {/* onUserDeleted สั่งให้เรียกใช้ fetchData ซึ่งอยู่ตรง parent component นี้ มันจะทำการเรียก api เพื่อดึงข้อมูลลงตารางใหม่ update ค่าที่เราลบไปให้เห็นบนจอ*/}
            <Table onUserDeleted={fetchData} view={view} data={data} loading={loading}/>
        </div>
    )
}