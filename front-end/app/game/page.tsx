"use client";

import { useState, useEffect } from "react";
import socket from "@/utils/socket";

export default function GamePage() {
  const [gameState, setGameState] = useState<any>(null);

  useEffect(() => {
    socket.on("game-update", (state) => {
      setGameState(state);
    });

    return () => {
      socket.off("game-update");
    };
  }, []);

  return (
    <main>
      <h1>Game Board</h1>
      {gameState ? (
        <div>
          <h2>Current Turn: {gameState.currentPlayer}</h2>
          {/* Add more UI elements for cards, players, etc. */}
        </div>
      ) : (
        <p>Waiting for game to start...</p>
      )}
    </main>
  );
}
