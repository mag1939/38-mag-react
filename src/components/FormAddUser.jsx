import { useState } from "react";
import axios from "axios";

export default function FormAddUser() {
    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        position: "",
    });

    const [loading, setLoading] = useState(null);

    // ทุกครั้งที่มีการ onChange มีการเปลี่ยนแปลงค่าใน form มันจะอัพเดทค่าของ formData จากการแปลงค่าใน setFormData function
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value,}))
        console.log(formData)
    }

    const handleSubmit = async (e) => {
        e.preventDefault() // ถูกใช้เพื่อไม่ให้ browser reload หรือ refresh
        setLoading(true);

        try {
            // ส่ง formData ที่เราอัพเดทเรียบร้อยแล้ว จาก function handleChange
            await axios.post("https://memory-backend-forjsd11.onrender.com/api/users", formData);
        } catch (error) {
            console.log("Error creating user:", error);
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <form className="flex gap-2">
                <input type="text" id="name" placeholder=" Name" className="bg-white border rounded-sm" />
                <input type="text" id="lastname" placeholder=" Last Name" className="bg-white border rounded-sm" />
                <input type="text" id="position"  placeholder=" Position" className="bg-white border rounded-sm" />
                <button type="submit" className="px-6 py-3 bg-indigo-600 hover:bg-white hover:text-black text-white rounded-lg shadow-lg text-lg font-semibold transition duration-300 ease-in-out cursor-pointer">Save</button>
            </form>
        </form>
    )
}