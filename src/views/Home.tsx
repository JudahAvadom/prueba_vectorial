import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

const Home = () => {
    const [firstname, setFirstname] = useState('')
    const [lastName, setLastname] = useState('')
    const [userList, setUserList] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('userLogged')) {
            // @ts-ignore
            const User = JSON.parse(localStorage.getItem('userLogged'));
            setFirstname(User.firstName)
            setLastname(User.lastName)
        } else {
            navigate('/')
        }
        UpdateList()
    }, [!userList])
    const UpdateList = async () => {
        // @ts-ignore
        let users = await JSON.parse(localStorage.getItem('CurrentUsers'))
        setUserList(users)
    }
    const DeleteUser = (id: number) => {
        // @ts-ignore
        const result = userList.filter((e: any, key: any) => id != key)
        localStorage.setItem('CurrentUsers', JSON.stringify(result))
        setUserList(result)
    }
    return (
        <div>
            <div className='flex justify-center flex-col'>
                <h2 className='text-3xl text-center'>Welcome {firstname} {lastName}</h2>
                <div className='p-2'>
                    <table>
                        <thead>
                            <tr>
                                <td className='text-2xl px-1'>#</td>
                                <td className='text-2xl px-1'>First Name</td>
                                <td className='text-2xl px-1'>Last Name</td>
                                <td className='text-2xl px-1'>Company</td>
                                <td className='text-2xl px-1'>Email</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {userList ? (
                                userList.map((e: any, key: any) => (
                                    <tr key={key}>
                                        <td className='text-xl px-1'>{key}</td>
                                        <td className='text-xl px-1'>{e.firstName}</td>
                                        <td className='text-xl px-1'>{e.lastName}</td>
                                        <td className='text-xl px-1'>{e.company}</td>
                                        <td className='text-xl px-1'>{e.email}</td>
                                        <td>
                                            {e.firstName == 'Gerset' ? <></> : <button onClick={() => DeleteUser(key)} className='button bg-red-600 p-2 rounded-lg text-white shadow-xl'>Delete</button>}
                                        </td>
                                    </tr>
                                ))) : <></>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home