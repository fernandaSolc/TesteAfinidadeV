import { useState } from 'react';
import './CardRespostas.css';
import CircularButton from '../botaoResposta/botaoResposta';

const CardRespostas = () => {
  const [selected, setSelected] = useState('');

  const handleSelect = (value) => {
    setSelected(value);
  };

  return (
    <div>
      <form>
      <div className={`cardRespostas ${selected === 'P1' ? 'selected' : ''}`} onClick={() => handleSelect('P1')}>
          <CircularButton clicked={selected === 'P1'} />
          <label>HTML</label>
        </div>
        <div className={`cardRespostas ${selected === 'P2' ? 'selected' : ''}`} onClick={() => handleSelect('P2')}>
          <CircularButton clicked={selected === 'P2'} />
          <label>CSS</label>
        </div>
        <div className={`cardRespostas ${selected === 'P3' ? 'selected' : ''}`} onClick={() => handleSelect('P3')}>
          <CircularButton clicked={selected === 'P3'} />
          <label>JavaScript</label>
        </div>
      </form>
    </div>
  );
};

export default CardRespostas;
