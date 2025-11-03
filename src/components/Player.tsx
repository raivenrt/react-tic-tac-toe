import usePlayer from "../hooks/usePlayer";

interface PlayerProps {
  name: string;
  symbol: string;
  activePlayer: string;
}

const Player: React.FC<PlayerProps> = ({ name, symbol, activePlayer }) => {
  const { editButtonCaption, editablePlayerName, handleEditClick } = usePlayer(name);
  const isActivePlayer = activePlayer === symbol;

  return (
    <li className={isActivePlayer ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{editButtonCaption}</button>
    </li>
  );
};

export default Player;
