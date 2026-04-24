import { useEffect, useState } from "react";
import "../../frontend/styles/global.css";

function Sidebar({ onSelectPlaylist, onPlaylistDeleted, selectedPlaylist }) {
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

    if (!name || !userId) {
      alert("Missing playlist name or user login");
      return;
    }

    const res = await fetch("http://localhost:3000/playlists", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, userId }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Create playlist failed:", data);
      alert("Failed to create playlist");
      return;
    }

    fetchPlaylists();
  };

  const handleEdit = async (id) => {
    const newName = prompt("New playlist name:");
    if (!newName) return;

    await fetch(`http://localhost:3000/playlists/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName }),
    });

    fetchPlaylists();
  };

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

    {playlists.map((pl) => {
      const isActive = pl.id === selectedPlaylist;

      return (
        <div
        key={pl.id}
        style={{
          margin: "12px 0",
            padding: "8px",
            background: isActive ? "var(--hover)" : "transparent",
            color: "var(--text)",
        }}
        >
        <span
        onClick={() => onSelectPlaylist(pl.id)}
        style={{ cursor: "pointer" }}
        >
        {pl.name}
        </span>

        <button style={{ margin: "8px" }} onClick={() => handleEdit(pl.id)}>
        Edit
        </button>

        <button onClick={() => handleDelete(pl.id)}>
        Delete
        </button>
        </div>
      );
    })}

    <button onClick={handleCreate}>+ New Playlist</button>
    </div>
  );
}

export default Sidebar;
