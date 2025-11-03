interface PlayerProps {
  name: string;
  symbol: string;
}

const Player: React.FC<PlayerProps> = ({ name, symbol }) => {
  return (
    <li>
      <span className="player">
        <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button>Edit</button>
    </li>
  );
};

export default Player;
