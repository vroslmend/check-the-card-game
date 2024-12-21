interface Player {
  id: string;
  username: string;
}

export default function PlayerList({ players }: { players: Player[] }) {
  return (
    <ul>
      {players.map((player) => (
        <li key={player.id}>{player.username}</li>
      ))}
    </ul>
  );
}
