const statusMessage = ({ isXNext, winner, squares }) => {

    const noMovesLeft = squares.every((val) => val !== null)

    const nextPlayer = isXNext ? "X" : "O"


    const renderStatusMessage = () => {
        if (winner) {
            return <div>Winner is ${winner}</div>
        }
        if (!winner && noMovesLeft) {
            return (
                <div>
                    <span className="text-orange">O</span> and
                    <span className="text-green">X</span> Tied
                </div>)
        }
        if (!winner && !noMovesLeft) {
            return <div>Next Player is ${nextPlayer}</div>
        }
    }

    return (<h2 className="status-message">{renderStatusMessage()}</h2>)
}
export default statusMessage