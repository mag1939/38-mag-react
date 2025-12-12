
export default function Table({view, data, loading}) {

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