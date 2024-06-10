import './TitleTelaPerguntas.css';

const TitleTelaPerguntas = ({ pergunta }) => {
  return (
    <div className='titleTelaPerguntas'>
      <h1>{pergunta}</h1>
    </div>
  );
};

export default TitleTelaPerguntas;
