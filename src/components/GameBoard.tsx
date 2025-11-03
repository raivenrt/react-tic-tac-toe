import { useState } from "react";

const INITIAL_GAMEBOARD: [string | null, string | null, string | null][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({
  onSelectSquare,
  activePlayerSymbol,
}: {
  onSelectSquare: () => void;
  activePlayerSymbol: string;
}) => {
  const [gameBoard, setGameBoard] = useState(INITIAL_GAMEBOARD);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function handleSelectSquare(rowIndex: number, colIndex: number, playerSymbol: string) {
    setGameBoard((prevGameBoard) => {
      const updatedGameBoard = [...prevGameBoard];
      updatedGameBoard[rowIndex][colIndex] = playerSymbol;
      return updatedGameBoard;
    });
    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={`row#${rowIndex}`}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={`row#${colIndex}`}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex, activePlayerSymbol)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
