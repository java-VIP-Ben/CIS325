import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
import Home from "../components/Home.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login"/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
