import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between mt-[2%]'>
        <Link to ='/'><img src='../images/bitVishwaLogo.png'/><h3 className='text-purple-500 font-rowdies text-4xl'>Bit-Vishwa</h3></Link>
        <div  className='flex justify-around w-[20%]'>
        <Link to ='/login'><button className='text-white hover:border-white px-4 py-2 hover:rounded-md hover:bg-purple-500'>Sign In</button></Link>
        <Link to ='/signup'><button className='text-white  hover:border-white px-4 py-2 hover:rounded-md hover:bg-purple-500'>Sign Up</button></Link>
        </div>
    </div>
  )
}

export default Navbar