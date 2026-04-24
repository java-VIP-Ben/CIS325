import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Settings() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // to route to login 
  const navigate = useNavigate();

  const handleUpdate = async () => {
    const userId = localStorage.getItem("userId");

    await fetch(`http://localhost:3000/accounts/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    });

    alert("Account Updated!");
    navigate("/login");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Settings</h2>

      <h2>Edit Account</h2>

      <input
        type="text"
        placeholder="New Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="New Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default Settings;
