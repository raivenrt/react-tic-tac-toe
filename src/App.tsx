import Player from "./components/Player";

function App() {
  return (
    <main>
      <section id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        <section>GAME BOARD</section>
      </section>
      <section>LOG</section>
    </main>
  );
}

export default App;
