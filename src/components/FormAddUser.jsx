import { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner";


export default function FormAddUser({onUserCreated}) {
    const databaseURL = "https://67eca027aa794fb3222e43e2.mockapi.io/members";
    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        position: "",
    });

    const [loading, setLoading] = useState(null);

    // ฟังก์ชันจัดการการเปลี่ยนแปลง: รับชื่อช่อง (name) และค่า (value) มาอัปเดต
    const handleInputChange = (event) => {
        const {name, value} = event.target;

        // ใช้ Spread Operator (...) เพื่อคัดลอก State เดิม
        // แล้วอัปเดตเฉพาะ Key ที่มีชื่อตรงกับ name ของ Input นั้น
        setFormData((prevState) => ({
            ...prevState,
            [name]: value})) // [name] คือการใช้ Key จากตัวแปร (Computed Property Name)

        console.log(formData)
    }

    const handleSubmit = async (e) => {
        e.preventDefault() // ถูกใช้เพื่อไม่ให้ browser reload หรือ refresh
        setLoading(true);

        try {

            // ตรวจสอบว่ามีช่องใดช่องหนึ่งเป็นช่องว่างเปล่าเพื่อไม่ให้ส่งข้อมูล with no-space or only space
            // by using .trim() to delete any "space" around the string
            if (formData.name.trim() === "" || formData.lastname.trim() === "" || formData.position.trim() === "") {
                toast.warning("Please fill out all the fields, also don't put any white-space!", {
                    className: "!bg-yellow-300 !transition !duration-300",
                });
                return; // หยุดการทำงานของ handleSubmit ไม่ให้ส่งข้อมูล (POST)
            }

            // ส่ง POST with formData ที่เราอัพเดทเรียบร้อยแล้ว จาก function handleInputChange
            await axios.post(databaseURL, formData);

            // after "POST" you need to ล้างฟอร์ม
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
            <Input
            className={"bg-slate-200"}
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            disabled={loading}
            required />

            <Input
            className={"bg-slate-200"}
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            placeholder="Last Name"
            disabled={loading}
            required />

            <Input
            className={"bg-slate-200"}
            name="position"
            value={formData.position}
            onChange={handleInputChange}
            placeholder="Position"
            disabled={loading}
            required />

            <Button
            className={"bg-black hover:bg-white hover:text-black text-white rounded-lg shadow-lg text-lg transition duration-300 ease-in-out cursor-pointer"}
            type="submit"
            variant="outline"
            disabled={loading}>
                Save
            </Button>
        </form>
    )
}