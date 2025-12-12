## Home component view
- ผมต้องการสร้างหน้า Home เอาไว้เก็บปุ่มที่กดสลับหน้า 
- component ปุ่ม ก็สร้างแยกแล้วมา resuse เอา
- ตอนกดสลับหน้า จะเก็บค่าๆนึง เอาไว้เช็คว่าควรจะเปลี่ยนหน้าไหน
## User component view + Admin component view
- หน้า User and Admin จะมีฟังชั่นในการ fetch data from api แล้วส่งให้ component table, compenent สร้าง and delete user เพื่อแสดงข้อมูลในตาราง
## Owner component view
- เป็นหน้าที่เรียกผ่าน Navbar.jsx แสดงชื่อและประวัติ 
## Navbar component
- นำ component นี้ ไปแปะไว้ทุกหน้าผ่าน component Layout ซึ่งถูก setup ผ่าน component App อีกที
## Router & Navigation
- ทำการ setup routing and navigate ในหน้า App component ด้วย component createBrowserRouter, RouterProvider
- ส่วนการสลับหน้า User and Admin ทำผ่านหน้า Home ซึ่งมี Toggle View Button ผ่านการใช้ useState 
## API Connection for CRUD Operations
- `AdminSection & UserSection`; จะใช้ axios ในการ fetch data from api มาเก็บไว้รอใช้งาน และส่งไปให้ compoenet table ใช้งานต่อไปในการแสดงลงตาราง
- FormAddUser; มี function ในการ create user จึงนำ axiox.post มากใช้ในการส่ง data ไปยัง api ที่ต้องการ
- Table; มี function ในการ delete user จึงนำ axiox.delete มาใช้ในการ ลบ ข้อมูลจาก database ของ api นั้นๆ