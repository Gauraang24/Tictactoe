import './components/styles.scss'
import { useState } from "react"
import Board from './components/Board'
import { calculateWinner } from './components/winner'
import StatusMessage from './components/statusMessage'
import HistoryList from './components/History'


function App() {
  // const [squares, setSquares] = useState(Array(9).fill(null))
  // const [isXNext, setIsXNext] = useState(false)
  const [History, setHistory] = useState([{ squares: Array(9).fill(null), isXNext: false }])
  const [currentMove, setCurrentMove] = useState(0)

  const gamingBoard = History[currentMove]

  const winner = calculateWinner(gamingBoard.squares)

  const handleSquareClick = (clickedPosition) => {

    if (gamingBoard.squares[clickedPosition] || winner) {
      return
    }

    setHistory((currHistory) => {
      const isTraversing = currentMove + 1 !== currHistory.length



      const lastGamingState = isTraversing ? currHistory[currentMove] : History[History.length - 1]


      const nextSquaresState = lastGamingState.squares.map((Val, pos) => {
        if (clickedPosition === pos) {
          return lastGamingState.isXNext ? "X" : "O";
        }
        return Val;
      })

      const base = isTraversing ? currHistory.slice(0, currHistory.indexOf(lastGamingState) + 1) : currHistory

      return base.concat({ squares: nextSquaresState, isXNext: !lastGamingState.isXNext })
    })


    // setIsXNext(!isXNext)
    setCurrentMove(currentMove + 1)
  }


  const moveTo = (move) => {
    setCurrentMove(move)
  }

  return (

    <div className='app'>
      <StatusMessage winner={winner} gamingBoard={gamingBoard} />
      <Board squares={gamingBoard.squares} handleSquareClick={handleSquareClick} />
      <h2>Current Game History</h2>
      <HistoryList History={History} moveTo={moveTo} currentMove={currentMove} />
    </div>

  )
}

export default App
