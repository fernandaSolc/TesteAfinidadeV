import BotaoAnterior from '../../components/BotaoAnterior/BotaoAnterior';
import BotaoProxima from '../../components/BotaoProxima/BotaoProxima';
import CardRespostas from '../../components/CardRespostas/CardRespostas';
import CardTelaPerguntas from '../../components/CardTelaPerguntas/CardTelaPerguntas';
import TitleTelaPerguntas from '../../components/TitleTelaPerguntas/TitleTelaPerguntas';

const TelaPerguntas = () => {
  return (
    <>
      <CardTelaPerguntas>
        <TitleTelaPerguntas />
        <CardRespostas />
        <div className='buttons'>
          <BotaoAnterior />
          <BotaoProxima />
        </div>
      </CardTelaPerguntas>
    </>
  );
};

export default TelaPerguntas;
