import { useState } from "react";

interface PlayerProps {
  name: string;
  symbol: string;
}

const Player: React.FC<PlayerProps> = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [playerName, setPlayerName] = useState<string>(name);

  function handleEditClick() {
    setIsEditing((prev) => !prev);
  }

  function handleNameChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setPlayerName(ev.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let editButton = "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required minLength={2} maxLength={74} value={playerName} onChange={handleNameChange} />
    );
    editButton = "Save";
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{editButton}</button>
    </li>
  );
};

export default Player;
