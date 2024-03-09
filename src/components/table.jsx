import useUser from "../hooks/useUser";

const Table = () => {
    const users = useUser()
    const { data, deleteUser } = users

    return (
            <table className="text-right w-full">
                <thead>
                    <tr className="w-full">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="w-full">
                {
                    data.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className="flex gap-x-2 justify-end">
                                    <button className="border rounded-md bg-blue-600 px-4 font-semibold border-slate-300 text-white hover:bg-blue-500">
                                        Edit
                                    </button>
                                    <button onClick={() => deleteUser(user.id)} className="border rounded-md bg-red-600 px-4 font-semibold border-slate-300 text-white hover:bg-red-500">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
    )
}

export default Table;