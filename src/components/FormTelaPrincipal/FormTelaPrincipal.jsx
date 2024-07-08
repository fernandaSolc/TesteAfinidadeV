import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormTelaPrincipal.css';
import axios from 'axios';

const FormTelaPrincipal = ({ registrationCode, setregistrationCode, turno, setTurno }) => {
const FormTelaPrincipal = ({ onSave, onSnackbarMessage }) => {
  const [registrationCode, setregistrationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleStartQuiz = async () => {
    if (registrationCode) {
      try {
        const config = {
          headers: {
            'Api-Key': import.meta.env.VITE_API_KEY,
          },
        };

        console.log(`Iniciando chamada API com registrationCode: ${registrationCode.toUpperCase()}`);
        console.log(`Usando a chave da API: ${import.meta.   env.VITE_API_KEY}`);

        const response = await axios.get(
          `https://api-hml.pdcloud.dev/enrolled/matricula/${registrationCode.toUpperCase()}`,
          config
        );

        const data = response.data;
        console.log('Dados do aluno:', data);

        // Salvando os dados do aluno
        onSave({
          name: data.nomeCompleto,
          registrationCode: data.registrationCode,
          preferredName: data.hasPreferredName === true ? data.preferredName : "",
          hasPreferredName: data.hasPreferredName,
          agenteDoSucesso: data.agenteDoSucesso,
        });

        // Navegar para a página de confirmação
        navigate('/confirmacao', { state: { nomeCompleto: data.nomeCompleto } });
      } catch (error) {
        console.error('Erro ao verificar registrationCode:', error);
        let errorMessage = 'Erro ao verificar matrícula';
        if (
          axios.isAxiosError(error) &&
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          errorMessage += `: ${error.response.data.message}`;
        }
        if (onSnackbarMessage) {
          onSnackbarMessage(errorMessage); // Exibe uma mensagem de erro para o usuário
        }
      } finally {
        setIsLoading(false);
      }
    } else {
      if (onSnackbarMessage) {
        onSnackbarMessage('Por favor, preencha todos os campos.');
      }
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
        <div className='btnIniciarQuiz'>
          <button
            className='iniciarQuiz'
            type='button'
            onClick={handleStartQuiz}
            disabled={isLoading}
          >
            {isLoading ? 'Carregando...' : 'Iniciar Quiz'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormTelaPrincipal;
