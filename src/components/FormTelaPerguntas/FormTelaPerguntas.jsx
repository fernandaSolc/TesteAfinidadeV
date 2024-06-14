import './FormTelaPerguntas.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TitleTelaPerguntas from '../TitleTelaPerguntas/TitleTelaPerguntas';
import CardTelaPerguntas from '../CardTelaPerguntas/CardTelaPerguntas';
import { findBestMatch } from './matchService';

const perguntas = [
  'Como você costuma passar seu tempo livre?',
  'Qual dessas descrições se encaixa melhor com sua personalidade?',
  'O que você mais gosta na tecnologia?',
  'No trabalho ou na escola, você é mais conhecido por…',
  'Qual dessas disciplinas mais te chama atenção?',
  'E qual o melhor horário para você realizar monitoria?',
];

const opcoes = [
  [
    'Jogando videogames',
    'Relaxando em casa com um bom livro, filmes ou séries',
    'Praticando esportes ou atividades físicas',
    'Socializando com amigos em festas ou eventos',
  ],
  [
    'Aventureiro(a) e ousado(a)',
    'Calmo(a) e reservado(a)',
    'Energético(a) e extrovertido(a)',
    'Organizado(a) e metódico(a)',
  ],
  [
    'Produtos e invenções tecnológicas',
    'Soluções para o nosso dia a dia',
    'Internet e armazenamento na nuvem',
    'A capacidade de criar experiências visuais e interativas',
  ],
  ['Ser adaptável', 'Ser cuidadoso', 'Ser perspicaz', 'Ser analítico'],
  [
    'No code',
    'Interface e Introdução à Programação Web',
    'Sistema Operacional Linux',
    'Linguagem Python',
  ],
  ['Entre 09:00 às 15:00', 'Entre 15:00 às 21:00'],
];

const FormTelaPerguntas = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [respostas, setRespostas] = useState({});
  const navigate = useNavigate();

  const handleNextQuestion = () => {
    if (!respostas[currentQuestionIndex]) {
      toast.error('Por favor, selecione uma opção antes de continuar.');
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
        turno: respostas[5] === 'Entre 09:00 às 15:00' ? 'manha' : 'tarde',
      };

      const bestMonitor = findBestMatch(aluno);

      navigate('/agente', { state: { monitorID: bestMonitor.monitor_id } });
    }
  };

  const handleOptionChange = e => {
    setRespostas({
      ...respostas,
      [currentQuestionIndex]: e.target.value,
    });
  };

  return (
    <div className='formContainer'>
      <ToastContainer />
      <CardTelaPerguntas>
        <TitleTelaPerguntas pergunta={perguntas[currentQuestionIndex]} />
        <div className='opcoes'>
          {opcoes[currentQuestionIndex].map((opcao, index) => (
            <>
              <label
                key={index}
                className={
                  respostas[currentQuestionIndex] === opcao ? 'clicked' : ''
                }
              >
                <div>
                  <input
                    type='radio'
                    name={`question-${currentQuestionIndex}`}
                    value={opcao}
                    checked={respostas[currentQuestionIndex] === opcao}
                    onChange={handleOptionChange}
                  />
                </div>

                {opcao}
              </label>
            </>
          ))}
        </div>
        <div className='buttons'>
          <button
            className='btnSimNao'
            disabled={currentQuestionIndex === 0}
            onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
          >
            Anterior
          </button>
          <button onClick={handleNextQuestion} className='btnSimNao'>
            {currentQuestionIndex < perguntas.length - 1 ? 'Próxima' : 'Enviar'}
          </button>
        </div>
        <div className='progress-dots'>
          {perguntas.map((_, index) => (
            <span
              key={index}
              className={`dot ${
                currentQuestionIndex === index ? 'active' : ''
              }`}
            ></span>
          ))}
        </div>
      </CardTelaPerguntas>
    </div>
  );
};

export default FormTelaPerguntas;
