import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import { AuthContextProvider } from "./context/AuthContext";


function App() {
  return (
    <div className="App">
    <AuthContextProvider>
    <Navbar/>      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </AuthContextProvider>
      
      
    </div>
  );
}

export default App;
