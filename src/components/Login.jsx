import React from 'react'

const Login = () => {
  return (
    <div>
      <h4>Log In</h4>
      <form>
        <input type='email' placeholder='Email'/>
        <input type='password' placeholder='Password'/>
      </form>
      <button>Log In</button>
    </div>
  )
}

export default Login