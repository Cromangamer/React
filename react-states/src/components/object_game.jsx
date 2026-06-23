import { useState } from "react";
import "./object_game.css";

function initMoves() {
  let obj = {
    blue: 0,
    green: 0,
    red: 0,
    yellow: 0,
  };
  return obj;
}

export default function ObjectGame() {
  const [winner, setWinner] = useState(null);
  let [moves, setMoves] = useState(initMoves);

  let updateMoves = (color) => {
    if (winner) return; // stop game after someone wins

    setMoves((prev) => {
      const newMoves = {
        ...prev,
        [color]: prev[color] + 1,
      };

      if (newMoves[color] >= 100) {
        alert(`${color.toUpperCase()} wins! 🎉`);
        setWinner(color);
        setMoves(initMoves());
      }

      return newMoves;
    });
  };

  return (
    <div className="object-game">
      <h2>Object Game</h2>
      <div id="board">
        <div id="blue">
          <p>Blue Count : {moves.blue}</p>
          <button
            id="blue-btn"
            onClick={() => {
              updateMoves("blue");
            }}
          >
            Point
          </button>
        </div>
        <div id="green">
          <p>Blue Count : {moves.green}</p>
          <button
            id="green-btn"
            onClick={() => {
              updateMoves("green");
            }}
          >
            Point
          </button>
        </div>
        <div id="red">
          <p>Blue Count : {moves.red}</p>
          <button
            id="red-btn"
            onClick={() => {
              updateMoves("red");
            }}
          >
            Point
          </button>
        </div>
        <div id="yellow">
          <p>Blue Count : {moves.yellow}</p>
          <button
            id="yellow-btn"
            onClick={() => {
              updateMoves("yellow");
            }}
          >
            Point
          </button>
        </div>
      </div>
    </div>
  );
}
