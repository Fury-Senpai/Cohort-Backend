import React from 'react'
import { NavLink, useNavigate } from 'react-router'

const Header = () => {
  const navigate = useNavigate()
  return (
    <header className='w-screen flex justify-center gap-30 mt-5'>
        <div>
            <h3 onClick={()=>navigate('/')} className='font-semibold text-2xl cursor-pointer text-teal-700'>
                Note App
            </h3>
        </div>
        <ul className='flex gap-10'>
            <NavLink to="/" className='bg-teal-700 px-3 py-2 rounded-md active:scale-97 cursor-pointer'>
                All Tasks
            </NavLink>
            <NavLink to="/note/create" className='bg-teal-700 px-3 py-2 rounded-md active:scale-97 cursor-pointer'>
                Create Tasks
            </NavLink>
        </ul>
    </header>
  )
}

export default Header