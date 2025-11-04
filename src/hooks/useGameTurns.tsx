import { useEffect, useState } from "react";

export type GameTurn = { row: number; col: number; playerSymbol: string };

const WINNING_COMBINATIONS = [
  [
    { row: 0, column: 0 },
    { row: 0, column: 1 },
    { row: 0, column: 2 },
  ],
  [
    { row: 1, column: 0 },
    { row: 1, column: 1 },
    { row: 1, column: 2 },
  ],
  [
    { row: 2, column: 0 },
    { row: 2, column: 1 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 0 },
    { row: 1, column: 0 },
    { row: 2, column: 0 },
  ],
  [
    { row: 0, column: 1 },
    { row: 1, column: 1 },
    { row: 2, column: 1 },
  ],
  [
    { row: 0, column: 2 },
    { row: 1, column: 2 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 0 },
    { row: 1, column: 1 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 2 },
    { row: 1, column: 1 },
    { row: 2, column: 0 },
  ],
];

/**
 * Checks if a player has won the game by checking if any of the winning combinations
 * are present in the game turns.
 *
 * @param {GameTurn[]} gameTurns - An array of game turns
 * @returns {string | false} - The winner's symbol if there is a winner, false otherwise
 */
function checkWinner(gameTurns: GameTurn[]) {
  const playerSymbol = gameTurns[0]?.playerSymbol;

  if (gameTurns.length >= 4) {
    ROOT_COMBINATIONS_LOOP: for (const combinations of WINNING_COMBINATIONS) {
      const isWinner = combinations.every((combination) =>
        gameTurns.some(
          (turn) =>
            turn.row === combination.row &&
            turn.col === combination.column &&
            turn.playerSymbol === playerSymbol
        )
      );

      if (isWinner) return playerSymbol;
    }
  }

  return false;
}
const useGameTurns = () => {
  const [winners, setWinners] = useState<{ x: number; o: number }>({
    x: 0,
    o: 0,
  });
  const [gameTurns, setGameTurns] = useState<GameTurn[]>([]);
  const activePlayerSymbol = gameTurns[0]?.playerSymbol === "X" ? "O" : "X";
  const winner = checkWinner(gameTurns);

  useEffect(() => {
    if (winner)
      setWinners((prevWinners) => {
        const updatedWinners = { ...prevWinners };

        if (winner === "X") updatedWinners.x += 1;
        else if (winner === "O") updatedWinners.o += 1;
        else return prevWinners;

        return updatedWinners;
      });
  }, [winner]);

  /**
   * Handles a player's turn by updating the game turns state.
   *
   * If the square is already occupied, the turn is ignored.
   *
   * @param {number} rowIndex - The row index of the square
   * @param {number} colIndex - The column index of the square
   */
  function handleTurn(rowIndex: number, colIndex: number) {
    if (winner) return;
    setGameTurns((prevTurns) => {
      const updatedTurns = [...prevTurns];

      const isSquareOccupied = updatedTurns.some(
        (turn) => turn.row === rowIndex && turn.col === colIndex
      );

      if (isSquareOccupied) return prevTurns;

      updatedTurns.unshift({
        row: rowIndex,
        col: colIndex,
        playerSymbol: activePlayerSymbol,
      });

      return updatedTurns;
    });
  }

  /**
   * Resets the game turns state to an empty array, effectively starting a new game.
   */
  function playAgain() {
    setGameTurns(() => []);
  }

  return {
    gameTurns,
    setGameTurns,
    activePlayerSymbol,
    handleTurn,
    winner,
    playAgain,
    winners,
  };
};

export default useGameTurns;
