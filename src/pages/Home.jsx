import { Link } from "react-router-dom";
import "../index.css"
const Home = () => {
  return (
    <main className="page home-page">
      <section className="hero">
        <h2>Bienvenue sur React Quiz App 🎯</h2>
        <p>Testez vos connaissances en début de formation. Ce quiz est court, pédagogique et amusant.</p>
        <Link to="/quiz">
          <button className="primary-btn">Commencer le quiz</button>
        </Link>
      </section>

      <section className="how">
        <h3>Comment ça marche ?</h3>
        <ol>
          <li>Cliquer sur "Commencer le quiz".</li>
          <li>Répondre à chaque question (une à la fois).</li>
          <li>Voir le score final et rejouer si désiré.</li>
        </ol>
      </section>
    </main>
  );
};

export default Home;
