import type { GameTurn } from "../hooks/useGameTurns";

const Log = ({ turns }: { turns: GameTurn[] }) => {
  return (
    <ol id="log">
      {turns.slice(0, 5).map((turn) => (
        <li key={`${turn.row}${turn.col}`}>
          {turn.playerSymbol} at {turn.row}, {turn.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;
