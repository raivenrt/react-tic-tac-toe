import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import useGameTurns from "./hooks/useGameTurns";

function App() {
  const {
    activePlayerSymbol,
    gameTurns,
    handleTurn,
    winner,
    playAgain,
    winners,
  } = useGameTurns();

  return (
    <main>
      <section id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            activePlayer={activePlayerSymbol}
          />
          <h4>
            {winners.x} - {winners.o}
          </h4>
          <Player
            name="Player 2"
            symbol="O"
            activePlayer={activePlayerSymbol}
          />
        </ol>
        {winner && (
          <div id="game-over">
            <h2>Loser {winner === "O" ? "X" : "O"}</h2>
            <p>Good game! Winner: {winner}</p>
            <button onClick={() => playAgain()}>Play again</button>
          </div>
        )}
        <GameBoard onSelectSquare={handleTurn} turns={gameTurns} />
      </section>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
