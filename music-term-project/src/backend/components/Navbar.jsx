import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    const userId = localStorage.getItem("userId");

    await fetch(`http://localhost:3000/accounts/${userId}`, {
      method: "DELETE",
    });

    localStorage.clear();
    navigate("/login");
  };

  return (
    <div style={{ padding: "10px", background: "#333", color: "white" }}>
      <span style={{ marginRight: "20px" }}>Music App</span>

      <button onClick={() => setOpen(!open)}>
        Account Settings
      </button>

      {open && (
        <div style={{ background: "white", color: "black", position: "absolute" }}>
          <p onClick={() => navigate("/settings")}>Edit Account</p>
          <p onClick={handleDelete}>Delete Account</p>
        </div>
      )}
    </div>
  );
}

export default Navbar;
