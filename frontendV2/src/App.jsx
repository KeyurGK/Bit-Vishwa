import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {   BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Navbar /> */}
             <Routes>
               {/* <Route path="/" element={<Landing />} /> */}
               <Route path="/home" element={<Home />} />
               <Route path="/login" element={<Login />} />
               <Route path="/signup" element={<Signup />} />
               {/* <Route path="/account" element={<Account />} /> */}
             </Routes>
    </>
  )
}

export default App
