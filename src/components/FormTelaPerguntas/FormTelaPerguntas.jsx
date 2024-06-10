import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TitleTelaPerguntas from "../TitleTelaPerguntas/TitleTelaPerguntas";
import CardTelaPerguntas from "../CardTelaPerguntas/CardTelaPerguntas";
import { findBestMatch } from "./matchService";
import "./FormTelaPerguntas.css";

const perguntas = [
  "Como você costuma passar seu tempo livre?",
  "Qual dessas descrições se encaixa melhor com sua personalidade?",
  "O que você mais gosta na tecnologia?",
  "No trabalho ou na escola, você é mais conhecido por…",
  "Qual dessas disciplinas mais te chama atenção?",
  "E qual o melhor horário para você realizar monitoria?",
];

const opcoes = [
  [
    "Jogando videogames",
    "Relaxando em casa com um bom livro, filmes ou séries",
    "Praticando esportes ou atividades físicas",
    "Socializando com amigos em festas ou eventos",
  ],
  [
    "Aventureiro(a) e ousado(a)",
    "Calmo(a) e reservado(a)",
    "Energético(a) e extrovertido(a)",
    "Organizado(a) e metódico(a)",
  ],
  [
    "Produtos e invenções tecnológicas",
    "Soluções para o nosso dia a dia",
    "Internet e armazenamento na nuvem",
    "A capacidade de criar experiências visuais e interativas",
  ],
  ["Ser adaptável", "Ser cuidadoso", "Ser perspicaz", "Ser analítico"],
  [
    "No code",
    "Interface e Introdução à Programação Web",
    "Sistema Operacional Linux",
    "Linguagem Python",
  ],
  ["Entre 09:00 às 15:00", "Entre 15:00 às 21:00"],
];

const FormTelaPerguntas = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [respostas, setRespostas] = useState({});
  const navigate = useNavigate();

  const handleNextQuestion = () => {
    // Verifica se a resposta para a pergunta atual foi selecionada
    if (!respostas[currentQuestionIndex]) {
      alert("Por favor, selecione uma opção antes de continuar.");
      return;
    }

    if (currentQuestionIndex < perguntas.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const aluno = {
        hobbies: [respostas[0]],
        personality: respostas[1],
        technology_interest: respostas[2],
        known_for: respostas[3],
        favorite_subject: respostas[4],
        turno: respostas[5] === "Entre 09:00 às 15:00" ? "manha" : "tarde",
      };

      const bestMonitor = findBestMatch(aluno);
      console.log("Melhor monitor para o aluno:", bestMonitor);

      // Enviar o formulário
      fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(aluno),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Success:", data);
          navigate("/agente", { state: { bestMonitor } });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const handleOptionChange = (e) => {
    setRespostas({
      ...respostas,
      [currentQuestionIndex]: e.target.value,
    });
  };

  return (
    <div className="formContainer">
      <CardTelaPerguntas>
        <TitleTelaPerguntas pergunta={perguntas[currentQuestionIndex]} />
        <div className="opcoes">
          {opcoes[currentQuestionIndex].map((opcao, index) => (
            <label
              key={index}
              className={
                respostas[currentQuestionIndex] === opcao ? "clicked" : ""
              }
            >
              <input
                type="radio"
                name={`question-${currentQuestionIndex}`}
                value={opcao}
                checked={respostas[currentQuestionIndex] === opcao}
                onChange={handleOptionChange}
              />
              {opcao}
            </label>
          ))}
        </div>
        <div className="buttons">
          <button
            disabled={currentQuestionIndex === 0}
            onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
          >
            Anterior
          </button>
          <button onClick={handleNextQuestion}>
            {currentQuestionIndex < perguntas.length - 1 ? "Próxima" : "Enviar"}
          </button>
        </div>
        <div className="progress-dots">
          {perguntas.map((_, index) => (
            <span
              key={index}
              className={`dot ${
                currentQuestionIndex === index ? "active" : ""
              }`}
            ></span>
          ))}
        </div>
      </CardTelaPerguntas>
    </div>
  );
};

export default FormTelaPerguntas;
