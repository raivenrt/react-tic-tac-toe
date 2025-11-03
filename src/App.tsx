function App() {
  return (
    <main>
      <section id="game-container">
        <ol id="players">
          <li>
            <span className="player-name">John</span>
            <span className="player-symbol">X</span>
          </li>
          <li>
            <span className="player-name">Doe</span>
            <span className="player-symbol">O</span>
          </li>
        </ol>
        <section>GAME BOARD</section>
      </section>
      <section>LOG</section>
    </main>
  );
}

export default App;
