// src/pages/Result.jsx
import { useLocation, useNavigate, Link } from "react-router-dom";

const Result = () => {
  const location = useLocation(); // gives you access to the current URL
  const navigate = useNavigate(); // allows you to move to another page programmatically
  const state = location.state || {};
  const score = typeof state.score === "number" ? state.score : 0;
  const total = typeof state.total === "number" ? state.total : 0;

  const handleReplay = () => {
    // Navigue vers Quiz — Quiz remontera son état initial grâce au useEffect dans Quiz.jsx
    navigate("/quiz");
  };

  return (
    <main className="page result-page">
      <div className="result-card">
        <h2>Résultat du Quiz</h2>
        <p className="big">{score} / {total}</p>

        <div className="result-actions">
          <button onClick={handleReplay} className="primary-btn">Rejouer</button>
          <Link to="/">
            <button className="secondary-btn">Retour à l'accueil</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Result;
