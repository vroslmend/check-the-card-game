export interface Card {
  suit: "hearts" | "diamonds" | "clubs" | "spades";
  value: number; // 1-13 (Ace = 1, King = 13, etc.)
}

export interface Player {
  id: string;
  username: string;
  hand: Card[]; // Player's cards
  score: number;
}

export interface GameState {
  players: Player[];
  drawPile: Card[];
  discardPile: Card[];
  currentPlayer: string; // ID of the current player's turn
}
