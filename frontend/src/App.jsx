import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import useAuthStore from './zustand/useAuthStore';
import Landing from './components/Landing';
import ProtectedRoute from './ProtectedRoute';
import "./App.css"
function App() {
  const { isAuthenticated } = useAuthStore();

  return (
    <>
      <Navbar />
      <Toaster richColors position="top-right" />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
