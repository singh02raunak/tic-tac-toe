export default function Gameboard({ gameBoard, clickHandler }) {
  return (
    <ol id="game-board">
      {gameBoard.map((item, index) => {
        return (
          <li key={index}>
            <button onClick={() => clickHandler(index)}>{item}</button>
          </li>
        );
      })}
    </ol>
  );
}
