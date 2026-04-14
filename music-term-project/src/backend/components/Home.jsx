import { useEffect, useState } from "react";

function Home() {
  const [accounts, setAccounts] = useState([]);

  // fetching accounts
  const fetchAccounts = () => {
    fetch("http://localhost:3000/accounts")
      .then((res) => res.json())
      .then((data) => setAccounts(data));
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  // deleting account
  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/accounts/${id}`, {
      method: "DELETE",
    });

    fetchAccounts();
  };

  // updating accounts
  const handleUpdate = async (id) => {
    const newUserName = prompt("New username:");
    const newPassword = prompt("New password:");

    await fetch(`http://localhost:3000/accounts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: newUserName,
        password: newPassword,
      }),
    });

    fetchAccounts();
  };

  return (
    <div>
      <h2>All Accounts</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {accounts.map((acc) => (
            <tr key={acc.id}>
              <td>{acc.id}</td>
              <td>{acc.userName}</td>
              <td>{acc.password}</td>
              <td>
                <button onClick={() => handleUpdate(acc.id)}>
                  Edit
                </button>

                <button onClick={() => handleDelete(acc.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
