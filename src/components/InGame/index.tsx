import React, { useEffect, useState } from "react";
import "./style.css";

export const InGame = ({ data, onSetStep, result, setResult }: any) => {
  const [dataQuestion, setDataQuestion] = useState<any[]>(data);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const preQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const chooseAnswer = (index: number) => {
    setDataQuestion((choose) => {
      choose[currentQuestion].selected = index;
      return [...choose];
    });
  };

  const endGame: any = () => {
    if (currentQuestion === 4) {
      if (window.confirm("Do you want to submit answers ?") === true) {
        onSetStep(3);
      } else {
        onSetStep(2);
      }
    }
  };

  useEffect(() => {
    const answerResult = dataQuestion.filter(
      (quest) =>
        quest.selected === quest.answers.findIndex((item: any) => item.correct)
    ).length;
    setResult(answerResult);
  }, [currentQuestion, dataQuestion, result, setResult]);

  return (
    <>
      <div className="inGame">
        <div className="btn-group">
          <button
            className={`btn pre-btn ${currentQuestion === 0 ? "disable" : ""}`}
            onClick={preQuestion}
          >
            Previous
          </button>
          <button
            className={`btn start-btn ${
              currentQuestion === 4 ? "disable" : ""
            }`}
            onClick={nextQuestion}
          >
            Next
          </button>
          <button
            className={`btn submit-btn ${
              currentQuestion !== 4 ? "hidden" : ""
            }`}
            onClick={endGame}
          >
            Submit
          </button>
        </div>
        <div className="question-group">
          <div className="total-question">
            <p>
              Question: <b>{currentQuestion + 1}</b> / {dataQuestion.length}
            </p>
          </div>
          <div className="question">
            <p>{dataQuestion[currentQuestion].question_content}</p>
          </div>
        </div>
        <div className="answer-group">
          {dataQuestion[currentQuestion].answers.map(
            (item: any, index: number) => {
              return (
                <div
                  className="answer"
                  key={index}
                  tabIndex={index}
                  onClick={() => chooseAnswer(index)}
                >
                  <p>
                    {index + 1}, {item.answer_content}
                  </p>
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};
