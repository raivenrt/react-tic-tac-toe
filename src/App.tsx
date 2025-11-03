import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelect() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
  }

  return (
    <main>
      <section id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" activePlayer={activePlayer} />
          <Player name="Player 2" symbol="O" activePlayer={activePlayer} />
        </ol>
        <GameBoard onSelectSquare={handleSelect} activePlayerSymbol={activePlayer} />
      </section>
      <section>LOG</section>
    </main>
  );
}

export default App;
