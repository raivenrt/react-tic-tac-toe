import { useState } from "react";

const usePlayer = (name: string) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [playerName, setPlayerName] = useState<string>(name);

  function handleEditClick() {
    setIsEditing((prev) => !prev);
  }

  function handleNameChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setPlayerName(ev.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let editButtonCaption = "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required minLength={2} maxLength={74} value={playerName} onChange={handleNameChange} />
    );
    editButtonCaption = "Save";
  }

  return {
    handleEditClick,
    handleNameChange,
    editablePlayerName,
    editButtonCaption,
    isEditing,
    playerName,
    setIsEditing,
    setPlayerName,
  };
};

export default usePlayer;
