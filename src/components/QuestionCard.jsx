// src/components/QuestionCard.jsx
import React from "react";

/**
 * Affiche la question + options en boutons.
 * Props:
 * - questionObj: { question, options }
 * - onAnswer: function(optionSelected)
 * - questionNumber, total
 */
const QuestionCard = ({ questionObj, onAnswer, questionNumber, total }) => {
  return (
    <div className="question-card">
      <div className="q-header">
        <h2>Question {questionNumber} / {total}</h2>
      </div>

      <div className="q-body">
        <p className="q-text">{questionObj.question}</p>

        <div className="options">
          {questionObj.options.map((opt, idx) => (
            <button
              key={idx}
              className="option-btn"
              onClick={() => onAnswer(opt)}
              aria-label={`Réponse ${idx + 1}`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
