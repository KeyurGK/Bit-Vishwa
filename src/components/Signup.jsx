import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Signup = () => {
  const [email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const {user,signUp} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      await signUp(email,password)
      navigate('/')
    }
    catch(error)
    {
      console.log(error)
    }
  } 
  return (
    <div className=' mx-[25%] mt-[5%] bg-gray-500 border-4 border-purple-900'>
 
      <div className='flex flex-col  justify-center pt-8'>

        <form className ='flex flex-col items-center justify-center mx-4' onSubmit = {handleSubmit}>
          <input className='w-[60%] mx-[25%] px-2 py-3 border-4 rounded border-purple-900' type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
          <input className='w-[60%] mx-[25%] mt-2 px-2 py-3 border-4 rounded border-purple-900' type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
        </form>

        <button className=' w-32 h-16 mx-[40%] mt-[5%] text-black font-rowdies text-lowercase border-4 border-purple-900 bg-purple-300 hover:bg-purple-500 ' onClick={handleSubmit}>Sign Up</button>
      </div>

      <div className='flex justify-around mt-4'>
        <div className='flex'>
          <input type='checkbox'/>
          <p className='text-white ml-2'>Remember Me</p>
        </div>
          <p className='text-white'>Need Help?</p>
      </div>      

      <p className='text-white flex justify-center mt-4'>Have an Account ?<Link to ='/login'><span className='text-black font-rowdies hover:text-purple-900 ml-2'>{' '}Sign In</span></Link></p>
    
    </div>
  )
}

export default Signup