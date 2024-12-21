import { Card } from "../types";

export function generateDeck(): Card[] {
  const suits: Card["suit"][] = ["hearts", "diamonds", "clubs", "spades"];
  const deck: Card[] = [];

  for (const suit of suits) {
    for (let value = 1; value <= 13; value++) {
      deck.push({ suit, value });
    }
  }

  return deck;
}

export function shuffleDeck(deck: Card[]): Card[] {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

export function dealCards(
  deck: Card[],
  numPlayers: number,
  cardsPerPlayer: number
): { players: Card[][]; drawPile: Card[] } {
  const players: Card[][] = [];
  for (let i = 0; i < numPlayers; i++) {
    players.push(deck.splice(0, cardsPerPlayer));
  }

  return { players, drawPile: deck };
}
