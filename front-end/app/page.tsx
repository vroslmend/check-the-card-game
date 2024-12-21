"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <h1>Welcome to Check</h1>
      <p>A 2D online multiplayer card game.</p>
      <Link href="/lobby">
        <button
          style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        >
          Join Lobby
        </button>
      </Link>
    </main>
  );
}
