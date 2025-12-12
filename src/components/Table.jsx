
import axios from "axios";

export default function Table({view, data, loading, onUserDeleted}) {

    const handleDelete = async (id) => {
        try {
            const isConfirm = confirm("Are you sure? 😢");
            if (!isConfirm) return;

            await axios.delete(`https://67eca027aa794fb3222e43e2.mockapi.io/members/${id}`);

            // เมื่อเกิดการ delete user จะสั่งให้ onUserDelted() ทำงาน จาก parent component
            if (onUserDeleted) {
                onUserDeleted();
            }
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    }

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
                        <tr key={e.id}>
                            <td className="border-2 p-3">{e.name}</td>
                            <td className="border-2 p-3">{e.lastname}</td>
                            <td className="border-2 p-3">{e.position}</td>

                            {view === "admin-home-view" &&
                                <td className="border-2 p-3">
                                    <a
                                    className="hover:underline text-red-600 font-bold cursor-pointer"
                                    // Wrap การเรียกใช้ handleDelete(e.id) ด้วย Arrow Function เพื่อให้ React เก็บฟังก์ชันนี้ไว้เป็น Callback และเรียกใช้เมื่อมี Event คลิกเกิดขึ้นจริง
                                    onClick={() => {handleDelete(e.id)}}>
                                        Delete
                                    </a>
                                </td>
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )

}