import Table from "../components/Table"
import FormAddUser from "../components/FormAddUser"

export default function AdminSection({view}) {
    return(
        <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="font-semibold">Create User Here</h1>
            <FormAddUser />
            <Table view={view}/>
        </div>
    )
}