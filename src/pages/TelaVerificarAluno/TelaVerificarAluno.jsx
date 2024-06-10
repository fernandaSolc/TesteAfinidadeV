import { useLocation } from 'react-router-dom';
import CardTelaVerificarAluno from '../../components/CardTelaVerificarAluno/CardTelaVerificarAluno';
import Title from '../../components/Title/Title';
import './TelaVerificarAluno.css';

const TelaVerificarAluno = () => {
  const location = useLocation();
  const { nomeCompleto } = location.state || {};

  return (
    <div className='telaVerificarAluno'>
      <Title />
      <CardTelaVerificarAluno>
        <h2 className='titleAluno'>Aluno(a):</h2>
        <h2 className='pipipiAluno'>{nomeCompleto || 'Nome não disponível'}</h2>
        <div className='btnsVerificarAluno'>
          <button className='btnNao'>Não</button>
          <button className='btnSim'>Sim</button>
        </div>
      </CardTelaVerificarAluno>
    </div>
  );
};

export default TelaVerificarAluno;