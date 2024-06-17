import CardRespostas from '../../components/CardRespostas/CardRespostas';
import CardTelaPerguntas from '../../components/CardTelaPerguntas/CardTelaPerguntas';
import TitleTelaPerguntas from '../../components/TitleTelaPerguntas/TitleTelaPerguntas';

const TelaPerguntas = () => {
  return (
    <div id='telaPerguntas'>
      <CardTelaPerguntas>
        <TitleTelaPerguntas />
        <CardRespostas />
        <div className='buttons'>
          <div>
            <button id='botaoAnterior'>Anterior</button>
          </div>
          <div>
            <button id='botaoProximo'>Próximo</button>
          </div>
        </div>
      </CardTelaPerguntas>
    </div>
  );
};

export default TelaPerguntas;
