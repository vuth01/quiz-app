import "./style.css";

export const Start = ({ onQuizStart }: any) => {
  return (
    <div className="startGame">
      <h1>Welcome to React Quiz Game!</h1>
      <button onClick={onQuizStart}>Start</button>
    </div>
  );
};
