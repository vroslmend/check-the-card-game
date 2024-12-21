# Check - The Card Game of Deduction and Deception

Check is a simple 2D online multiplayer card game built with **Next.js** for the frontend and **Node.js** with **Socket.IO** for the backend. The objective of the game is to be the player with the lowest total card value at the end of the round. Players draw, discard, and swap cards using special abilities to strategically reduce their card values.

## Table of Contents
- [Game Overview](#game-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [How to Play](#how-to-play)
- [Contributing](#contributing)
- [License](#license)

## Game Overview

### Objective:
Be the player with the lowest total card value at the end of the round.

### Setup:
- One standard 52-card deck (no Jokers).
- Players start with 4 cards each, with 2 cards kept face down.
- Players use special cards like Kings, Queens, and Jacks to swap cards, view other players' cards, and manipulate the game.

### Gameplay:
- Players take turns drawing or discarding cards.
- Special abilities of face cards (King, Queen, Jack) allow card swapping, viewing, and more.
- The round ends when a player calls "Check" or discards all their cards.
- The player with the lowest card value wins the round.

## Features:
- **Real-Time Multiplayer**: Players can join the same lobby and play in real-time.
- **Special Card Abilities**: Special cards like King, Queen, and Jack allow for strategic gameplay.
- **Matching Card Discards**: Players can discard matching cards from their hand during the game.
- **Game State Synchronization**: The game state is updated in real-time for all players using **Socket.IO**.
- **Frontend**: Built with **Next.js** for the frontend with TypeScript for type safety.
- **Backend**: The backend is built with **Node.js** and **Socket.IO** for real-time communication.

## Technologies Used:
- **Frontend**: Next.js, React, TypeScript, Socket.IO (for real-time updates)
- **Backend**: Node.js, Express, Socket.IO
- **Deployment**: Vercel (for frontend), Node.js server (for backend)
- **State Management**: Socket.IO for real-time state synchronization

## Setup and Installation

### Prerequisites:
- Node.js (v14 or higher)
- npm (v6 or higher)

### Steps to Run the Project Locally:

1. **Clone the repository**:
   `
   git clone https://github.com/vroslmend/check-the-game-next.git
   cd check-the-game-next
   `

2. **Install dependencies for the backend**:
   `
   cd back-end
   npm install
   `

3. **Install dependencies for the frontend**:
   `
   cd ../frontend
   npm install
   `

4. **Run the backend**:
   In the **back-end** directory, run:
   `
   node index.js
   `
   This will start the backend server on `http://localhost:3001`.

5. **Run the frontend**:
   In the **frontend** directory, run:
   `
   npm run dev
   `
   This will start the Next.js frontend on `http://localhost:3000`.

6. **Open the game in your browser**:
   Open `http://localhost:3000` in your browser to play the game. You can open multiple tabs or devices to simulate multiple players.

## How to Play:
1. **Join a Lobby**: Enter a username and join the game lobby.
2. **Start the Game**: Once all players are in the lobby, the game can begin.
3. **Gameplay**:
   - Take turns drawing cards from the draw pile or discarding cards.
   - Use special cards (King, Queen, Jack) to swap or view cards.
   - Discard matching cards from your hand.
4. **End the Round**: Call "Check" or discard all your cards to end the round.
5. **Scoring**: After the round ends, the player with the lowest card value wins.

## Contributing:
Contributions are welcome! Feel free to fork this repository, submit issues, and create pull requests.

### Steps to contribute:
1. Fork the repository.
2. Clone your fork locally.
3. Create a new branch for your changes.
4. Make your changes and commit them.
5. Push your changes and create a pull request.

## License:
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
