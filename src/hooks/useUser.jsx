import { useEffect } from "react"
import { useState } from "react"

const useUser = () => {
    const [data, setData] = useState([])

    const fetchData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        setData(data)
    }

    const addUser = (newUser) => {
        setData([...data, newUser])
    }

    const deleteUser = (userId) => {
        const newData = data.filter((user) => user.id !== userId)
        setData(newData)
    }

    const updateUser = (userId, updatedUser) => {
        setData(users.map(user => user.id === userId ? updatedUser : user));
    };

    useEffect(() => {
        fetchData()
    }, [])

    return { data, addUser, deleteUser, updateUser }
}

export default useUser;