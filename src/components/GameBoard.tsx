const INITIAL_GAMEBOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = () => {
  return (
    <ol id="game-board">
      {INITIAL_GAMEBOARD.map((row, rowIndex) => (
        <li key={`row#${rowIndex}`}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={`row#${colIndex}`}>
                <button>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
