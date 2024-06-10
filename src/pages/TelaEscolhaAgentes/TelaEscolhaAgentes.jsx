import './TelaEscolhaAgentes.css';
import LogoPD_testando from '../../img/logoPD_testando.svg';
import Title from '../../components/Title/Title';
import CardEscolhaAgente from '../../components/CardEscolhaAgente/CardEscolhaAgente';
import Logo from '../../components/Logo/Logo';
import CardMonitores from '../../components/CardMonitores/CardMonitores';

const TelaEscolhaAgentes = () => {
  return (
    <span className='telaEscolhaAgente'>
      <Title />
      <CardEscolhaAgente>
        <Logo />
        <span className='cardCompletoMonitor'>
          <span>
            <img className='logoTeste' src={LogoPD_testando} alt='' />
          </span>
          <span>
            <CardMonitores nome='Gustavo' sobrenome='Felippe' />
          </span>
          <span>
            <img className='logoTeste' src={LogoPD_testando} alt='' />
          </span>
          <span>
            <CardMonitores nome='Fernanda' sobrenome='Sabrina' />
          </span>

          <span>
            <img className='logoTeste' src={LogoPD_testando} alt='' />
          </span>
          <span>
            <CardMonitores nome='Larissa' sobrenome='Felipe' />
          </span>
        </span>
        <button className='btnConfirmar'>Confirmar</button>
      </CardEscolhaAgente>
    </span>
  );
};

export default TelaEscolhaAgentes;
