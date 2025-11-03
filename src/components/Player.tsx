import usePlayer from "../hooks/usePlayer";

interface PlayerProps {
  name: string;
  symbol: string;
}

const Player: React.FC<PlayerProps> = ({ name, symbol }) => {
  const { editButtonCaption, editablePlayerName, handleEditClick } = usePlayer(name);

  return (
    <li>
      <span className="player">
        {editablePlayerName}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{editButtonCaption}</button>
    </li>
  );
};

export default Player;
