import { useState } from "react";

const Square = ({ value, onSquareClick }) => {
  return (
    <button
      onClick={onSquareClick}
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg "
    >
      {value}
    </button>
  );
};

function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = "Next Player " + (xIsNext ? "X" : "O");
  }
  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) {
      return;
    }
    const currentSquare = squares.map((singleSquare) => singleSquare);
    if (xIsNext) {
      currentSquare[index] = "X";
    } else {
      currentSquare[index] = "O";
    }
    onPlay(currentSquare);
  };
  return (
    <div>
      <p>{status}</p>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquare = history[currentMove];
  function handlePlay(nextSquares) {
    setXIsNext(!xIsNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const jumpTo = (move) => {
    setCurrentMove(move);
    setXIsNext(move % 2 === 0);
  };

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to the move # ${move}`;
    } else {
      description = `start your first move`;
    }
    return (
      <li className="bg-gray-700 mb-2 p-2 text-white rounded-lg" key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  return (
    <div className="flex justify-center p-4 gap-6">
      <div>
        <Board xIsNext={xIsNext} squares={currentSquare} onPlay={handlePlay} />
      </div>
      <div>
        <ol className="border border-gray-400 p-2">{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  // Define winning combinations
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  // Check each winning combination
  for (const pattern of winPatterns) {
    // console.log(pattern);
    const [a, b, c] = pattern;
    // console.log(a, b, c);
    // Check if all three squares in the current pattern are the same and not empty
    const symbolsMatch =
      squares[a] && squares[a] === squares[b] && squares[a] === squares[c];

    if (symbolsMatch) {
      return squares[a]; // Return the winning symbol
    }
  }

  return null; // No winner found
}
