import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormTelaPrincipal.css';
import axios from 'axios';

const FormTelaPrincipal = ({ registrationCode, setregistrationCode, turno, setTurno }) => {
// Função de debounce (não será usada neste exemplo, mas mantida para referência futura)
function debounce(func, wait) {
  let timeout;

  return function (...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const HomePage = ({ onSave, onSnackbarMessage }) => {
  const [registrationCode, setregistrationCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [turno, setTurno] = useState("");
  const navigate = useNavigate();

  const handleStartQuiz = async () => {
    if (registrationCode) {
      try {
        const config = {
          headers: {
            'Api-Key': import.meta.env.VITE_API_KEY,
          },
        };

        const data = response.data;
        console.log('Nome do aluno:', data.nameCompleto); // Ajuste conforme o campo correto na resposta da API
        navigate('/confirmacao');
      } catch (error) {
        console.error("Erro ao verificar registrationCode:", error);
        let errorMessage = "Erro ao verificar matrícula";
        if (
          axios.isAxiosError(error) &&
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          errorMessage += `: ${error.response.data.message}`;
        }
        onSnackbarMessage(errorMessage); // Exibe uma mensagem de erro para o usuário
      } finally {
        setIsLoading(false);
      }
    } else {
      onSnackbarMessage("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div className='form'>
      <form>
        <div className='input-field'>
          <input
            type='text'
            placeholder='Matrícula'
            required
            value={registrationCode}
            onChange={e => setregistrationCode(e.target.value)}
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
        <button className='iniciarQuiz' type='button' onClick={handleStartQuiz} disabled={isLoading}>
          {isLoading ? 'Carregando...' : 'Iniciar Quiz'}
        </button>
      </form>
    </div>
  );
};

export default FormTelaPrincipal;
