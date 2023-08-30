import './components/styles.scss'
import { useState } from "react"
import Board from './components/Board'
import { calculateWinner } from './components/winner'


function App() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(false)

  const winner = calculateWinner(squares)
  console.log(winner)

  const nextPlayer = isXNext ? "X":"O"

  const statusMessage = winner ? `Winner is ${winner}`: `Next Player is ${nextPlayer}`

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
      <h2>{statusMessage}</h2>
      <Board squares={squares} handleSquareClick={handleSquareClick}/>

    </div>
    </>
  )
}

export default App
