import React, {useState, useEffect} from 'react'
import './main.css'

function TicTacToe() {

  const emptyGameBoard = Array(9).fill("");

  const[board, setBoard] = useState(emptyGameBoard);
  const[actualPlayer, setActualPlayer] = useState("X")
  const[winner, setWinner] = useState(null);

  const cellClick = (index) =>{
    if(winner){return null};
    if(board[index]!==""){return null};

    setBoard(
      board.map((item, itemIndex) => itemIndex === index ? actualPlayer : item));

      setActualPlayer(actualPlayer === "X" ? "O" : "X")
  
      winnerCheck()
  }

  const winnerCheck = () => {
    const possibleWin = [
      //horizontal wins
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],

      //vertical wins
      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],

      //diagonal wins
      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]],
    ];

    possibleWin.forEach(cells => {
      if (cells.every(cell => cell === "X")) setWinner("X")
      if (cells.every(cell => cell === "O")) setWinner("O")
      if (board.every(item => item !== "")) setWinner("D")
    })

  }
  
  useEffect(winnerCheck, [board]);

  const reset = () =>{
    setActualPlayer("X")
    setBoard(emptyGameBoard)
    setWinner(null)
    
  }

  return (
    <main>
      <h1 className='tittle'>Jogo da velha !</h1>

      <div className={`board ${winner ? "game-over" : " "}`}>
        {board.map((item, index) => (
          <div
          key={index}
          className={`cell ${item}`}
          onClick={() => cellClick(index)}
          >
            {item}
          </div>
        ))}
      </div>
      {winner &&
        <footer>
          {winner === "D" ?
          <h2 className='winner-msg'>
            <span className={winner}>Empatou!</span>
          </h2>
          :
          <h2 className='winner-msg'>
            <span className={winner}>{winner} </span>
            venceu!
          </h2>
          } 
          <button onClick={reset}>Recomeçar o jogo!</button>
        </footer>
      }
    </main>
  );
}

export default TicTacToe