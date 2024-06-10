import './TelaMonitorEscolhido.css';
import { AiOutlineDiscord } from 'react-icons/ai';
import { BiLogoGmail } from 'react-icons/bi';
import { SiCalendly } from 'react-icons/si';
import Logo from '../../components/Logo/Logo';
import Title from '../../components/Title/Title';

const TelaMonitorEscolhido = () => {
  return (
    <div className='telaMonitorEscolhido'>
      <div className='cardMonitorEscolhido'>
        <Logo />
        <img src='/path/{monitorEscolhido}' alt='' />
        <Title />
        <div className='infosMonitor'>
          <AiOutlineDiscord className='icon discord' />
          <h2 className='texto'>agentedesucesso</h2>
        </div>
        <div className='infosMonitor'>
          <BiLogoGmail className='icon gmail' />
          <h2 className='texto'>agentedesucesso@gmail.com.br</h2>
        </div>
        <div className='infosMonitor'>
          <SiCalendly className='icon calendly' />
          <h2 className='texto'>Link de agendamento</h2>
        </div>
      </div>
    </div>
  );
};

export default TelaMonitorEscolhido;
