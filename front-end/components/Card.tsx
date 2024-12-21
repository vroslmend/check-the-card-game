interface CardProps {
  suit: "hearts" | "diamonds" | "clubs" | "spades";
  value: number;
}

export default function Card({ suit, value }: CardProps) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "5px" }}>
      <p>{value}</p>
      <p>{suit}</p>
    </div>
  );
}
