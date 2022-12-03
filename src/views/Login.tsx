import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const styleInput = 'p-4 border-2 outline-none m-2 rounded-lg';

const Login = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        console.log(localStorage.getItem("userLogged"));
        if (localStorage.getItem("userLogged")) {
            navigate('/home')
        }
    }, [])
    const handleLogin = () =>{
        // @ts-ignore
        const Users : any= JSON.parse(localStorage.getItem('CurrentUsers'))
        let userLogged;
        Users.forEach((e : any) => {
            if (e.user == user && e.password == password) {
                userLogged = {
                    firstName: e.firstName,
                    lastName: e.lastName,
                    role: e.role,
                    logged: true
                }
                localStorage.setItem("userLogged", JSON.stringify(userLogged))
                navigate('/home')
            } else {
                
            }
        })
    }
    return (
        <div className='flex items-center justify-center flex-col pt-20'>
            <div className='flex flex-col text-center bg-slate-200 rounded-lg p-4 shadow-2xl'>
                <h2 className='text-3xl'>Login</h2>
                <form className='flex flex-col'>
                    <input 
                        type="text" 
                        placeholder='Username' 
                        className={styleInput} 
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                    <input 
                        type="password"
                        placeholder='Password'
                        className={styleInput} 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button 
                        className='bg-green-600 text-2xl font-light p-2 mx-2 rounded-lg'
                        type='button'
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login