import { useState } from "react";
import Sidebar from "./Sidebar";

function Home() {
  const [query, setQuery] = useState("");
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [playlistSongs, setPlaylistSongs] = useState([]);

  const [playlists, setPlaylists] = useState([]);

  const fetchPlaylists = async () => {
    const userId = localStorage.getItem("userId");

    const res = await fetch(`http://localhost:3000/playlists/${userId}`);
    const data = await res.json();
    setPlaylists(data);
  };

  // Search YouTube
  const searchVideos = async () => {
    if (!query) return;

    const res = await fetch(
      `http://localhost:3000/youtube?q=${query}`
    );

    const data = await res.json();
    setVideos(data.items || []);
  };

  // saving songs to a playlist
  const saveToPlaylist = async (videoId, title, playlistId) => {
    if (!playlistId) return;

    await fetch("http://localhost:3000/playlist-songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        playlistId,
        videoId,
        title,
      }),
    });

    if (selectedPlaylist === Number(playlistId)) {
      loadPlaylistSongs(selectedPlaylist);
    }
    fetchPlaylists();
  };

  // Load songs from playlist
  const loadPlaylistSongs = async (playlistId) => {
    const res = await fetch(
      `http://localhost:3000/playlist-songs/${playlistId}`
    );

    const data = await res.json();
    setPlaylistSongs(data);
    fetchPlaylists();
  };

  // removing songs from selected playlist
  const removeSong = async (songId) => {
    await fetch(`http://localhost:3000/playlist-songs/${songId}`, {
      method: "DELETE",
    });

    // refresh playlist after deletion
    if (selectedPlaylist) {
      loadPlaylistSongs(selectedPlaylist);
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
    <Sidebar
    onSelectPlaylist={(id) => {
      setSelectedPlaylist(id);
      loadPlaylistSongs(id);
    }}
    onPlaylistDeleted={() => {
      setSelectedPlaylist(null);
      setPlaylistSongs([]);
      fetchPlaylists();
    }}
    />

    <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
    <h2>Music Player</h2>

    <input
    type="text"
    placeholder="Search YouTube..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    />
    <button onClick={searchVideos}>Search</button>

    {selectedVideo && (
      <div style={{ marginTop: "20px" }}>
      <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${selectedVideo}`}
      allow="autoplay"
      title="player"
      />
      </div>
    )}

    <h3>Search Results</h3>

    {videos.map((video) => (
      <div
      key={video.id.videoId}
      style={{
        marginBottom: "10px",
          paddingBottom: "10px",
          borderBottom: "1px solid #000",
      }}
      >
      <img src={video.snippet.thumbnails.default.url} />

      <p>{video.snippet.title}</p>

      <button
      onClick={() =>
        setSelectedVideo(video.id.videoId)
      }
      >
      Play
      </button>

      <select
      defaultValue=""
      onChange={(e) => {
        saveToPlaylist(
          video.id.videoId,
          video.snippet.title,
          e.target.value
        );

        e.target.value = "";
      }}
      >
      <option value="">Save to playlist</option>

      {playlists.map((pl) => (
        <option key={pl.id} value={pl.id}>
        {pl.name}
        </option>
      ))}
      </select>
      </div>
    ))}

    {selectedPlaylist && (
      <>
      <h3>Playlist Songs</h3>

      {playlistSongs.map((song) => (
        <div key={song.id} style={{ marginBottom: "10px" }}>
        <p>{song.title}</p>

        <button
        onClick={() => removeSong(song.id)}
        style={{
          background: "red",
            color: "white",
            border: "none",
            padding: "5px",
            cursor: "pointer",
        }}
        >
        Remove
        </button>

        <iframe
        width="300"
        height="200"
        src={`https://www.youtube.com/embed/${song.videoId}`}
        allow="autoplay"
        title="playlist-video"
        />
        </div>
      ))}
      </>
    )}
    </div>
    </div>
  );
}

export default Home;
