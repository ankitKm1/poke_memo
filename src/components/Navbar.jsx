
const Navbar = ({score, bestScore}) => {
  return (
    <header>
      <div className="logo">PokeMemo</div>
      <div className="scores">
        <div className="bestScore">
          Best Score: {bestScore}
        </div>
        <div className="score">
          Score: {score}
        </div>
      </div>
    </header>
  )
}

export default Navbar
