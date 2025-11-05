interface GameOverProps {
  winner: string;
  playAgain: () => void;
}

const GameOver = ({ winner, playAgain }: GameOverProps) => {
  return (
    <div id="game-over">
      <h2>Loser {winner === "O" ? "X" : "O"}</h2>
      <p>Good game! Winner: {winner}</p>
      <button onClick={() => playAgain()}>Play again</button>
    </div>
  );
};

export default GameOver;
