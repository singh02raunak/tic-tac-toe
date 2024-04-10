import { useState } from "react";
import Gameboard from "./component/Gameboard";
import Players from "./component/Players";
import Rematch from "./component/Rematch";

function App() {
  const [gameBoard, setGameBoard] = useState(Array(9).fill(null));
  const [isTurn, setTurn] = useState(false);

  const winner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (
        gameBoard[a] !== null &&
        gameBoard[a] === gameBoard[b] &&
        gameBoard[a] === gameBoard[c]
      ) {
        return gameBoard[a];
      }
    }
    if (gameBoard.every((square) => square !== null)) {
      return "draw";
    }
    return false;
  };
  const isWinner = winner();
  console.log(isWinner);

  const reset = () => {
    setGameBoard(Array(9).fill(null));
  };

  const clickHandler = (index) => {
    const newBoard = [...gameBoard];
    if (newBoard[index]) {
      return;
    }
    newBoard[index] = isTurn ? "X" : "O";
    setTurn(!isTurn);
    setGameBoard(newBoard);
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Players player="player 1" symbol="X" />
          <Players player="player 2" symbol="O" />
        </ol>
        <Gameboard gameBoard={gameBoard} clickHandler={clickHandler} />
        {isWinner && <Rematch reset={reset} winner={isWinner} />}
      </div>
    </main>
  );
}

export default App;
