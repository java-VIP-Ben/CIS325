import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
import Home from "../components/Home.jsx";
import Navbar from "../components/Navbar";
import Settings from "../components/Settings";

function App() {
  const location = useLocation();
  return (
    <div>
    {location.pathname === "/home" && <Navbar />}
        <Routes>
        <Route path="/" element={<Navigate to="/login"/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
