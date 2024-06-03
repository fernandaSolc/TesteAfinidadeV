import { useState } from 'react';
import FormTelaPrincipal from '../../components/FormTelaPrincipal/FormTelaPrincipal';
import './TelaPrincipal.css';

const TelaPrincipal = () => {
  const [pdx, setPdx] = useState('');
  const [turno, setTurno] = useState('');

  return (
    <div className='telaPrincipal'>
      <FormTelaPrincipal
        pdx={pdx}
        setPdx={setPdx}
        turno={turno}
        setTurno={setTurno}
      />
    </div>
  );
};

export default TelaPrincipal;
