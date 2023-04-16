import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  const {user, logOut} = UserAuth()
  const navigate = useNavigate()

  const handleLogout = async()=>{
    try{
      await logOut();
      navigate('/')
    }catch(error){
      console.log(error)
    }
  }
  console.log(user)
  return (
    <div className='flex justify-between mt-[2%]'>
        <Link to ='/'><h3 className='text-purple-500 font-rowdies text-4xl'>Bit-Vishwa</h3></Link>
    {user?.email?(
    <div  className='flex justify-around w-[20%]'>
    <Link to='/account'>
    <button className='text-white hover:border-white px-4 py-2 hover:rounded-md hover:bg-purple-500'>Account</button>
    </Link>
    <Link>
      <button onClick={handleLogout} className='text-white hover:border-white px-4 py-2 hover:rounded-md hover:bg-purple-500'>Log Out</button>
    </Link>
    </div>
    ):(
      <div  className='flex justify-around w-[20%]'>
    <Link to ='/login'><button className='text-white hover:border-white px-4 py-2 hover:rounded-md hover:bg-purple-500'>Sign In</button></Link>

    <Link to ='/signup'><button className='text-white  hover:border-white px-4 py-2 hover:rounded-md hover:bg-purple-500'>Sign Up</button></Link>

    </div>
   
    )}
    </div>
  )
}
 
export default Navbar