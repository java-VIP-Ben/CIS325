import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
import Home from "../components/Home.jsx";
import Navbar from "../components/Navbar";
import Settings from "../components/Settings";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const location = useLocation();
  return (
    <div>
    {location.pathname === "/home" && <Navbar theme={theme} setTheme={setTheme} />}
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
