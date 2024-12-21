"use client";

import { useState, useEffect } from "react";
import socket from "@/utils/socket";

interface Player {
  id: string;
  username: string;
}

export default function LobbyPage() {
  const [username, setUsername] = useState<string>("");
  const [joined, setJoined] = useState<boolean>(false);
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    socket.on("lobby-update", (updatedPlayers: Player[]) => {
      setPlayers(updatedPlayers);
    });

    return () => {
      socket.off("lobby-update");
    };
  }, []);

  const handleJoin = () => {
    if (username.trim()) {
      socket.emit("join-lobby", { username });
      setJoined(true);
    }
  };

  return (
    <main>
      {!joined ? (
        <div>
          <h1>Join the Lobby</h1>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleJoin}>Join</button>
        </div>
      ) : (
        <div>
          <h2>Welcome, {username}!</h2>
          <h3>Players in Lobby:</h3>
          <ul>
            {players.map((player) => (
              <li key={player.id}>{player.username}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
