import './components/styles.scss'
import { useState } from "react"
import Board from './components/Board'
import { calculateWinner } from './components/winner'
import StatusMessage from './components/statusMessage'


function App() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(false)

  const winner = calculateWinner(squares)

  const handleSquareClick = (clickedPosition) => {

    if (squares[clickedPosition] || winner){
        return
    }

    setSquares((currSquares) => {
        return currSquares.map((Val, pos) => {
            if (clickedPosition === pos) {
                return isXNext ? "X" : "O";
            }
            return Val;
        })
    })

    
    setIsXNext(!isXNext)
}

  return (
    <><div className='app'>
      <StatusMessage winner={winner} isXNext={isXNext} squares={squares}/>
      <Board squares={squares} handleSquareClick={handleSquareClick}/>

    </div>
    </>
  )
}

export default App
