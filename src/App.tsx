import Player from "./components/Player";

function App() {
  return (
    <main>
      <section id="game-container">
        <ol id="players">
          <Player name="John" symbol="X" />
          <Player name="Doe" symbol="O" />
        </ol>
        <section>GAME BOARD</section>
      </section>
      <section>LOG</section>
    </main>
  );
}

export default App;
