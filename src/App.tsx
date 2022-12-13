import React, { useState } from "react";
import "./App.css";

import { Start } from "./components/Start";
import { InGame } from "./components/InGame";
import { End } from "./components/End";
import quizData from "./data/questions.json";

function App() {
  const [step, setStep] = useState(1);
  const [result, setResult] = useState(0);

  const onQuizStart: any = () => {
    setStep(2);
  };

  return (
    <div className="App">
      {step === 1 && <Start onQuizStart={onQuizStart} />}
      {step === 2 && (
        <InGame
          data={quizData}
          onSetStep={setStep}
          result={result}
          setResult={setResult}
        />
      )}
      {step === 3 && <End result={result} onSetStep={setStep} />}
    </div>
  );
}

export default App;
