import CardRespostas from '../../components/CardRespostas/CardRespostas';
import CardTelaPerguntas from '../../components/CardTelaPerguntas/CardTelaPerguntas';
import LogoTelaPerguntas from '../../components/LogoTelaPerguntas/LogoTelaPerguntas';
import TitleTelaPerguntas from '../../components/TitleTelaPerguntas/TitleTelaPerguntas';

const TelaPerguntas = () => {
  return (
    <>
      <LogoTelaPerguntas />
      <CardTelaPerguntas>
        <TitleTelaPerguntas />
        <CardRespostas />
      </CardTelaPerguntas>
    </>
  );
};

export default TelaPerguntas;
