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
        <div className='cardRespostas'>
          <CircularButton onClick={() => handleSelect('HTML')} clicked={selected === 'HTML'} />
          <label onClick={() => handleSelect('HTML')}>HTML</label>
        </div>
        <div className='cardRespostas'>
          <CircularButton onClick={() => handleSelect('CSS')} clicked={selected === 'CSS'} />
          <label onClick={() => handleSelect('CSS')}>CSS</label>
        </div>
        <div className='cardRespostas'>
          <CircularButton onClick={() => handleSelect('pipi')} clicked={selected === 'pipi'} />
          <label onClick={() => handleSelect('JavaScript')}>pipi</label>
        </div>
        <div className='cardRespostas'>
          <CircularButton onClick={() => handleSelect('JavaScript')} clicked={selected === 'JavaScript'} />
          <label onClick={() => handleSelect('JavaScript')}>JavaScript</label>
        </div>
      </form>
    </div>
  );
};

export default CardRespostas;
