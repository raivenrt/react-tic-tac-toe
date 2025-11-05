interface GameOverProps {
  winner: string;
  playAgain: () => void;
}

const GameOver = ({ winner, playAgain }: GameOverProps) => {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      <p>{winner === "draw" ? "It's a draw!" : `The winner is ${winner}`} </p>
      <button onClick={() => playAgain()}>Play again</button>
    </div>
  );
};

export default GameOver;
