import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const styleInput = 'p-2 border-neutral-300 border-2 rounded-lg my-1'

const Users = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [company, setCompany] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const handleSubmit = () => {
        if (!localStorage.getItem('userLogged')) {
            navigate('/')
        }
        // @ts-ignore
        const Users : any= JSON.parse(localStorage.getItem('CurrentUsers'))
        if (firstName != '' && lastName != '' && company != '' && email != '') {
            const newUser = {
                firstName,
                lastName,
                company,
                email
            }
            Users.push(newUser)
            localStorage.setItem('CurrentUsers', JSON.stringify(Users))
            navigate('/home')
        } else {
            alert('Please complete all fields')
        }
    }
    return (
        <div className='flex p-4'>
            <div>
                <h3 className='text-3xl'>Create User</h3>
                <form className='flex flex-col'>
                    <input 
                        type="text" 
                        placeholder='First Name' 
                        className={styleInput}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder='Last Name' 
                        className={styleInput}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder='Company' 
                        className={styleInput}
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder='Email' 
                        className={styleInput}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button 
                        type='button'
                        className='bg-green-600 my-1 py-2 rounded-lg'
                        onClick={handleSubmit}
                    >
                        Create User
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Users