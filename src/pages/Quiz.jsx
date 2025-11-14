// src/pages/Quiz.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import questionList from "../data/Questions";
import QuestionCard from "../components/QuestionCard";
import '../index.css'

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  
  useEffect(() => {
    setCurrentIndex(0);
    setScore(0);
  }, []);

  const handleAnswer = (selected) => {
    // This checks if the user’s selected answer is the same as the correct answer of the current question.
    const isCorrect = selected === questionList[currentIndex].answer; // correct answer of this question
    const updatedScore = isCorrect ? score + 1 : score; // return false or true
    setScore(updatedScore);

    if (currentIndex + 1 < questionList.length) { // Checks if there are more questions ahead.
      setCurrentIndex((i) => i + 1); //If the next index is still inside the list → continue the quiz.
    } else {
      navigate("/result", { state: { score: updatedScore, total: questionList.length } });
    }
  };

  return (
    <main className="page quiz-page">
      <div className="quiz-container">
        <QuestionCard
          questionObj={questionList[currentIndex]}
          onAnswer={handleAnswer}
          questionNumber={currentIndex + 1}
          total={questionList.length}
        />

        <div className="quiz-footer">
          <p>Score actuel : {score} / {questionList.length}</p>
          <p className="small">Réponds pour passer à la question suivante.</p>
        </div>
      </div>
    </main>
  );
};

export default Quiz;
