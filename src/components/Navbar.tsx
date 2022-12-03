import { Link, useNavigate } from "react-router-dom"

const Navbar = ({children} : any) => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('userLogged')
    navigate('/')
  }
  return (
    <>
      <div className='bg-green-600 p-4 flex justify-between shadow-2xl'>
        <div>
          <h2 className='text-white text-3xl'>Home</h2>
        </div>
        <div>
          <nav>
            <ul className="flex">
              <li className="px-2">
                <Link to='/users'>
                  <span className='text-xl text-white'>Create user</span>
                </Link>
              </li>
              <li className='px-2 text-xl text-white cursor-pointer' onClick={handleLogout}>Log out</li>
            </ul>
          </nav>
        </div>
      </div>
      {children}
    </>
  )
}

export default Navbar