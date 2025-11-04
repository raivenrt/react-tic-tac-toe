import type { GameTurn } from "../hooks/useGameTurns";

const INITIAL_GAMEBOARD: [string | null, string | null, string | null][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

interface GameBoardProps {
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
  turns: GameTurn[];
}

const GameBoard: React.FC<GameBoardProps> = ({ onSelectSquare, turns }) => {
  let gameBoard = INITIAL_GAMEBOARD.map((row) => [...row]);

  for (const turn of turns) {
    gameBoard[turn.row][turn.col] = turn.playerSymbol;
  }

  console.log(gameBoard, turns);

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={`row#${rowIndex}`}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={`${playerSymbol ?? "col"}#${colIndex}`}>
                <button
                  disabled={!!playerSymbol}
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                >
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
