import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../frontend/styles/global.css";

function Register() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName, password }),
    });

    const data = await response.json();

    if (!data.success) {
      alert(data.message);
      return;
    }

    // autologin
    const loginRes = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName, password }),
    });

    const loginData = await loginRes.json();

    if (loginData.success) {
      localStorage.setItem("userId", loginData.account.id);
      navigate("/home");
    } else {
      alert("Auto-login failed after register");
    }
  };

  return (
    <div className="container">
    <h2>Register</h2>

    <form onSubmit={handleRegister}>
    <input
    type="text"
    placeholder="Username"
    value={userName}
    onChange={(e) => setUsername(e.target.value)}
    />

    <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    />

    <button type="submit">Create Account</button>

    <p>
    Already have an account? <Link to="/login">Login</Link>
    </p>
    </form>
    </div>
  );
}

export default Register;
