import './TitleTelaPerguntas.css';

const TitleTelaPerguntas = ({ pergunta }) => {
  return (
    <div className='titleTelaPerguntas'>
      <h1 className='titlePergunta'>{pergunta}</h1>
    </div>
  );
};

export default TitleTelaPerguntas;
