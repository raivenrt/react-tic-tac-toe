import { useState } from "react";

export type GameTurn = { row: number; col: number; playerSymbol: string };

const useGameTurns = () => {
  const [gameTurns, setGameTurns] = useState<GameTurn[]>([]);
  const activePlayerSymbol = gameTurns[0]?.playerSymbol === "X" ? "O" : "X";

  function handleTurn(rowIndex: number, colIndex: number) {
    setGameTurns((prevTurns) => {
      // let currentPlayer = activePlayerSymbol ?? "X";

      // if (prevTurns.length > 0 && prevTurns[0].playerSymbol === "X") {
      //   currentPlayer = "O";
      // }

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
  return {
    gameTurns,
    setGameTurns,
    activePlayerSymbol,
    handleTurn,
  };
};

export default useGameTurns;
