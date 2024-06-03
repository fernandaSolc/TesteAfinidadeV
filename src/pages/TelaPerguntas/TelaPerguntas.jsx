import CardRespostas from '../../components/CardRespostas/CardRespostas';
import CardTelaPerguntas from '../../components/CardTelaPerguntas/CardTelaPerguntas';
import TitleTelaPerguntas from '../../components/TitleTelaPerguntas/TitleTelaPerguntas';

const TelaPerguntas = () => {
  return (
    <>
      <CardTelaPerguntas>
        <TitleTelaPerguntas />
        <CardRespostas />
      </CardTelaPerguntas>
    </>
  );
};

export default TelaPerguntas;