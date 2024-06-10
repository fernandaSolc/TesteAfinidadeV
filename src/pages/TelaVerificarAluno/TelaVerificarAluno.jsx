import { useNavigate, useLocation } from 'react-router-dom';
import CardTelaVerificarAluno from '../../components/CardTelaVerificarAluno/CardTelaVerificarAluno';
import Title from '../../components/Title/Title';
import './TelaVerificarAluno.css';

const TelaVerificarAluno = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { nomeCompleto } = location.state || {};

  const handleConfirm = () => {
    navigate('/form');
  };

  const handleDeny = () => {
    navigate('/');
  };

  return (
    <div className='telaVerificarAluno'>
      <Title />
      <CardTelaVerificarAluno>
        <h2 className='titleAluno'>Aluno(a):</h2>
        <h2 className='pipipiAluno'>{nomeCompleto || 'Nome não disponível'}</h2>
        <div className='btnsVerificarAluno'>
          <button className='btnNao' onClick={handleDeny}>Não</button>
          <button className='btnSim' onClick={handleConfirm}>Sim</button>
        </div>
      </CardTelaVerificarAluno>
    </div>
  );
};

export default TelaVerificarAluno;
