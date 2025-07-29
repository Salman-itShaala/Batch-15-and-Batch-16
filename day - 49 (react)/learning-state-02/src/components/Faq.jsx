import React, { useState } from "react";

function Faq({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="faq">
      <div className="question">
        <p>{question}</p>
        <button onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? "X" : "+"}
        </button>
      </div>
      {showAnswer && <div>{answer}</div>}
    </div>
  );
}

export default Faq;
