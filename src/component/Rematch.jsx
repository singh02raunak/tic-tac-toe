import React from "react";

export default function Rematch({ reset, winner }) {
  return (
    <div id="game-over">
      {winner === "draw" ? (
        <p>Game over Draw</p>
      ) : (
        <p>Game over {winner} wins</p>
      )}

      <p>
        <button onClick={reset}>Rematch</button>
      </p>
    </div>
  );
}
