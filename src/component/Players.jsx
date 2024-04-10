import React, { useState } from "react";

export default function Players({ player, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerNmae] = useState(player);

  const editHandler = () => {
    setIsEditing((prevState) => !prevState);
  };

  const onchangeHandler = (e) => {
    setPlayerNmae(e.target.value);
  };

  //   const handleClick = () => {

  //   };

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            value={playerName}
            required
            onChange={onchangeHandler}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
        <button onClick={editHandler}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
