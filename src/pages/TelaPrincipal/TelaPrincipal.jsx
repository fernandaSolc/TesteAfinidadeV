import { useState } from 'react';
import axios from 'axios';
import Card from '../../components/Card/Card';
import FormTelaPrincipal from '../../components/FormTelaPrincipal/FormTelaPrincipal';
import Title from '../../components/Title/Title';
import Logo from '../../components/Logo/Logo';
import './TelaPrincipal.css';

const TelaPrincipal = () => {
  const [name, setName] = useState(''); // TODO não terá necessidade de nome e sim uma confirmação se o nome de fulano é esse
  const [pdx, setPdx] = useState('');
  const [turno, setTurno] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'http://api-hml.pdcloud.dev/enrolled/matricula/:PDX',
        { name, pdx, turno }
      );
      console.log('Resposta do servidor:', response.data);
    } catch (error) {
      console.error(
        'Erro ao enviar dados:',
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className='telaPrincipal'>
      <Title />
      <Card>
        <Logo />
        <FormTelaPrincipal
          name={name}
          setName={setName}
          pdx={pdx}
          setPdx={setPdx}
          turno={turno}
          setTurno={setTurno}
        />
        <button onClick={handleSubmit}>Iniciar Quiz</button>
      </Card>
    </div>
  );
};

export default TelaPrincipal;
