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
        <div>
          <h2 className='titleAluno'>Você é:</h2>
          <h2 className='nomeAluno'>{nomeCompleto || 'Nome não disponível'}</h2>
        </div>
        <div className='btnsVerificarAluno'>
          <button className='btnNao' onClick={handleDeny}>
            Não
          </button>
          <button className='btnSim' onClick={handleConfirm}>
            Sim
          </button>
        </div>
      </CardTelaVerificarAluno>
    </div>
  );
};

export default TelaVerificarAluno;
