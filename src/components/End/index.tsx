import "./style.css";

export const End = ({ result, onSetStep }: any) => {
  const resetGame: any = () => {
    window.location.reload();
  };

  const reviewAnswer: any = () => {
    if (true) {
      onSetStep(2);
    }
  };

  return (
    <>
      <div className="endGame">
        <div className="score">
          <h1>
            Your Score Is: <b>{result}</b>
          </h1>
        </div>
        <div className="btn-end-group">
          <button className="btn btn-tryAgain" onClick={resetGame}>
            Try Again
          </button>
          <button className="btn btn-review" onClick={reviewAnswer}>
            Review
          </button>
        </div>
      </div>
    </>
  );
};
