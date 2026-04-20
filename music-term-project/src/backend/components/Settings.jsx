import { useState } from "react";

function Settings() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUpdate = async () => {
    const userId = localStorage.getItem("userId");

    await fetch(`http://localhost:3000/accounts/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    });

    alert("Account updated!");
  };

  return (
    <div>
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
