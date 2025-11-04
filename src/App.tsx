import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import useGameTurns from "./hooks/useGameTurns";

function App() {
  const { activePlayerSymbol, gameTurns, handleTurn } = useGameTurns();
  return (
    <main>
      <section id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            activePlayer={activePlayerSymbol}
          />
          <Player
            name="Player 2"
            symbol="O"
            activePlayer={activePlayerSymbol}
          />
        </ol>
        <GameBoard onSelectSquare={handleTurn} turns={gameTurns} />
      </section>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
