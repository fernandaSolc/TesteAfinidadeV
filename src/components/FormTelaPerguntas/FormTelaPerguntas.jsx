import TitleTelaPerguntas from '../TitleTelaPerguntas/TitleTelaPerguntas';
import CardTelaPerguntas from '../CardTelaPerguntas/CardTelaPerguntas';
import { findBestMatch } from './matchService';
import './FormTelaPerguntas.css';

const perguntas = [
  "Como você costuma passar seu tempo livre?",
  "Qual dessas descrições se encaixa melhor com sua personalidade?",
  "O que você mais gosta na tecnologia?",
  "No trabalho ou na escola, você é mais conhecido por…",
  "Qual dessas disciplinas mais te chama atenção?"
];

const opcoes = [
  ["Jogando videogames", "Relaxando em casa com um bom livro, filmes ou séries", "Praticando esportes ou atividades físicas", "Socializando com amigos em festas ou eventos"],
  ["Aventureiro(a) e ousado(a)", "Calmo(a) e reservado(a)", "Energético(a) e extrovertido(a)", "Organizado(a) e metódico(a)"],
  ["Produtos e invenções tecnológicas", "Soluções para o nosso dia a dia", "Internet e a forma como as coisas podem ser armazenadas na nuvem", "A capacidade de criar experiências visuais e interativas inovadoras"],
  ["Ser adaptável", "Ser cuidadoso", "Ser perspicaz", "Ser analítico"],
  ["No code", "Interface e Introdução à Programação Web", "Sistema Operacional Linux", "Linguagem Python"]
];

const FormTelaPerguntas = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [respostas, setRespostas] = useState({});
  const [turno, setTurno] = useState("");

  const handleNextQuestion = () => {
    if (currentQuestionIndex < perguntas.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const aluno = {
        hobbies: respostas[0],
        personality: respostas[1],
        technology_interest: respostas[2],
        known_for: respostas[3],
        favorite_subject: respostas[4],
        turno: turno
      };

      const bestMonitor = findBestMatch(aluno);
      console.log("Melhor monitor para o aluno:", bestMonitor);

      // Enviar o formulário
      fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(aluno),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  };

  const handleOptionChange = (e) => {
    setRespostas({
      ...respostas,
      [currentQuestionIndex]: e.target.value
    });
  };

  return (
    <CardTelaPerguntas>
      <TitleTelaPerguntas pergunta={perguntas[currentQuestionIndex]} />
      <div className="opcoes">
        {opcoes[currentQuestionIndex].map((opcao, index) => (
          <label key={index}>
            <input
              type="radio"
              value={opcao}
              checked={respostas[currentQuestionIndex] === opcao}
              onChange={handleOptionChange}
            />
            {opcao}
          </label>
        ))}
      </div>
      {currentQuestionIndex === perguntas.length - 1 && (
        <div className="turno">
          <label>
            <input
              type="radio"
              value="manha"
              checked={turno === "manha"}
              onChange={(e) => setTurno(e.target.value)}
            />
            9 às 15
          </label>
          <label>
            <input
              type="radio"
              value="tarde"
              checked={turno === "tarde"}
              onChange={(e) => setTurno(e.target.value)}
            />
            15 às 21
          </label>
        </div>
      )}
      <button onClick={handleNextQuestion}>
        {currentQuestionIndex < perguntas.length - 1 ? "Próxima" : "Enviar"}
      </button>
    </CardTelaPerguntas>
  );
};

export default FormTelaPerguntas;
