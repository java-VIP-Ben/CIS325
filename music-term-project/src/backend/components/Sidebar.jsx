import { useEffect, useState } from "react";
import "../../frontend/styles/global.css";

function Sidebar({ onSelectPlaylist, onPlaylistDeleted }) {
  const [playlists, setPlaylists] = useState([]);

  const fetchPlaylists = async () => {
    const userId = localStorage.getItem("userId");

    const res = await fetch(`http://localhost:3000/playlists/${userId}`);
    const data = await res.json();
    setPlaylists(data);
  };

  useEffect(() => {
    fetchPlaylists();
  }, []);

  const handleCreate = async () => {
    const name = prompt("Playlist name:");
    const userId = localStorage.getItem("userId");

    await fetch("http://localhost:3000/playlists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, userId }),
    });

    fetchPlaylists();
  };

  // editing playlists
  const handleEdit = async (id) => {
    const newName = prompt("New playlist name:");

    if (!newName) return;

    await fetch(`http://localhost:3000/playlists/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newName }),
    });

    fetchPlaylists();
  };

  // removing playlists
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this playlist and all songs?"
    );

    if (!confirmDelete) return;

    await fetch(`http://localhost:3000/playlists/${id}`, {
      method: "DELETE",
    });
    if (onPlaylistDeleted) onPlaylistDeleted();
    fetchPlaylists();
  };

  return (
    <div className="sidebar">
    <h3>Playlists:</h3>

    {playlists.map((pl) => (
      <div key={pl.id} style={{ margin: "12px" }}>
      <span
      onClick={() => onSelectPlaylist(pl.id)}
      style={{ cursor: "pointer" }}
      >
      {pl.name}
      </span>

      {/* Edit */}
      <button style={{ margin: "8px" }} onClick={() => handleEdit(pl.id)}>
      Edit
      </button>

      {/* Delete */}
      <button onClick={() => handleDelete(pl.id)}>
      Delete
      </button>
      </div>
    ))}
    <button onClick={handleCreate}>+ New Playlist</button>
    </div>
  );
}

export default Sidebar;
