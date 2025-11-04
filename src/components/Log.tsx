import type { GameTurn } from "../hooks/useGameTurns";

const Log = ({ turns }: { turns: GameTurn[] }) => {
  return <ol id="log">Log</ol>;
};

export default Log;
