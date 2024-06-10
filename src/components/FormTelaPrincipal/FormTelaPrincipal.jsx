import { useNavigate } from 'react-router-dom';
import './FormTelaPrincipal.css';
import axios from 'axios';

const FormTelaPrincipal = ({ pdx, setPdx, turno, setTurno }) => {
  const navigate = useNavigate();

  const handleStartQuiz = async () => {
    if (pdx && turno) {
      try {
        const response = await axios.get(`/api/verify-pdx/${pdx.toUpperCase()}`, {
          headers: {
            'api-key': process.env.REACT_APP_API_KEY, // Use a variável de ambiente para a chave da API
          },
        });
        const data = response.data;
        console.log('Nome do aluno:', data.name); // Exibe o nome do aluno no console
        navigate('/confirmacao');
      } catch (error) {
        console.error("Erro ao verificar PDX:", error);
        let errorMessage = "Erro ao verificar PDX";
        if (
          axios.isAxiosError(error) &&
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          errorMessage += `: ${error.response.data.message}`;
        }
        alert(errorMessage); // Exibe uma mensagem de erro para o usuário
      }
    }
  };

  return (
    <div className='form'>
      <form>
        <div className='input-field'>
          <input
            type='text'
            placeholder='PDX'
            required
            value={pdx}
            onChange={e => setPdx(e.target.value)}
          />
        </div>
        <div className='input-field'>
          <select
            name='turno'
            value={turno}
            onChange={e => setTurno(e.target.value)}
          >
            <option value=''>Selecione o turno</option>
            <option value='turno-manha'>De 09:00 às 15:00</option>
            <option value='turno-noite'>De 15:00 às 21:00</option>
          </select>
        </div>
        <button className='iniciarQuiz' type='button' onClick={handleStartQuiz}>
          Iniciar Quiz
        </button>
      </form>
    </div>
  );
};

export default FormTelaPrincipal;
