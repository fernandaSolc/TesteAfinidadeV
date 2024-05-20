import CardRespostas from '../../components/CardRespostas/CardRespostas';
import CardTelaPerguntas from '../../components/CardTelaPerguntas/CardTelaPerguntas';
import TitleTelaPerguntas from '../../components/TitleTelaPerguntas/TitleTelaPerguntas';

const TelaPerguntas = () => {
  return (
    <>
      <CardTelaPerguntas>
        <TitleTelaPerguntas />
        <CardRespostas />
        <button className='btnAnterior'>Anterior</button>
        <button className='btnProxima'>Próxima</button>
      </CardTelaPerguntas>
    </>
  );
};

export default TelaPerguntas;
