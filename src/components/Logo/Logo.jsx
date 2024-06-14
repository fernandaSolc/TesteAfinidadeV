import LogoPD from '../../img/logoPD.svg';
import './Logo.css';

const Logo = () => {
  return (
    <div className='logoPD'>
      <img src={LogoPD} alt='Início do Quiz' className='logoTelaInicial' />
    </div>
  );
};

export default Logo;
