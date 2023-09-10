const HistoryList = ({ History, moveTo, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {History.map((_, index) => (
          <li key={index}>
            <button className={`btn-move ${currentMove === index ? 'active': ""}`} onClick={() => { moveTo(index) }}>
              {index === 0 ? "New Game" : `Go to move #${index}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HistoryList
