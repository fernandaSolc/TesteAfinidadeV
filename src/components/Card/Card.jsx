import LogoPD from '../../img/logoPD.svg';
import Form from '../Form/Form';
import './Card.css';

const Card = () => {
  return (
    <div className='card'>
      <img src={LogoPD} alt='Início do Quiz' />
      <Form />
      <button>Iniciar Quiz</button>
    </div>
  );
};

export default Card;
