import { useState } from "react";
import axios from "axios";

export default function FormAddUser({onUserCreated}) {
    const databaseURL = "https://67eca027aa794fb3222e43e2.mockapi.io/members";
    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        position: "",
    });

    const [loading, setLoading] = useState(null);

    // ทุกครั้งที่มีการ onChange มีการเปลี่ยนแปลงค่าใน form มันจะอัพเดทค่าของ formData จากการแปลงค่าใน setFormData function
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value,})) // [d]
        console.log(formData)
    }

    const handleSubmit = async (e) => {
        e.preventDefault() // ถูกใช้เพื่อไม่ให้ browser reload หรือ refresh
        setLoading(true);

        try {
            // ส่ง formData ที่เราอัพเดทเรียบร้อยแล้ว จาก function handleChange
            await axios.post(databaseURL, formData);

            // after "POST" you need to make setFormData to empty
            setFormData({
                name: "",
                lastname: "",
                position: "",
            });

            // เมื่อเกิดการ create user ใหม่ จะสั่งให้ onUserCreated() ทำงาน จาก parent component
            if (onUserCreated) {
                onUserCreated();
            }

        } catch (error) {
            console.log("Error creating user:", error);
        } finally {
            setLoading(false);
        }
    }

    return(
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
            className="bg-white border rounded-sm"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            disabled={loading} />

            <input
            className="bg-white border rounded-sm"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Last Name"
            disabled={loading} />

            <input
            className="bg-white border rounded-sm"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="Position"
            disabled={loading} />

            <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 hover:bg-white hover:text-black text-white rounded-lg shadow-lg text-lg font-semibold transition duration-300 ease-in-out cursor-pointer"
            disabled={loading}>
                Save
            </button>
        </form>
    )
}