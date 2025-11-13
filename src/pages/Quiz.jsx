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
    // calcule nouveau score localement (pour s'assurer du bon chiffre avant navigation)
    const isCorrect = selected === questionList[currentIndex].answer;
    const updatedScore = isCorrect ? score + 1 : score;
    setScore(updatedScore);

    // si ce n'est pas la dernière, avancer
    if (currentIndex + 1 < questionList.length) {
      setCurrentIndex((i) => i + 1);
    } else {
      // dernière question → aller à Résultat en passant le score et le total
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
