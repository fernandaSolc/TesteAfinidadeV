import './TelaMonitorEscolhido.css';
import { AiOutlineDiscord } from 'react-icons/ai';
import { BiLogoGmail } from 'react-icons/bi';
import { SiCalendly } from 'react-icons/si';
import Logo from '../../components/Logo/Logo';
import monitores from './monitores'; // Importar os dados dos monitores

const TelaMonitorEscolhido = ({ monitorID }) => {
  const monitor = monitores.find((m) => m.monitor_id === monitorID);

  if (!monitor) {
    return (
      <div className='cardMonitorEscolhido'>
        <Logo />
        <div className='notFound'>Monitor não encontrado</div>
        <button className='backButton'>Voltar à Tela Inicial</button>
      </div>
    );
  }

  return (
    <div className='telaMonitorEscolhido'>
      <h1 className='titleMonitor'>Seu Agente de Sucesso é:</h1>
      <div className='cardMonitorEscolhido'>
        <img
          src={monitor.image}
          alt={monitor.firstName}
          className='monitorImage'
        />
        <h2 className='nomeSobrenome'>{monitor.firstName}</h2>
        <h3 className='nomeSobrenome sobrenome'>{monitor.lastName}</h3>
        <div className='infosMonitor'>
          <SiCalendly className='icon calendly' />
          <h2 className='texto'>
            <a
              href={monitor.calendlyLink}
              target='_blank'
              rel='noopener noreferrer'
              className='links'
            >
              Link de agendamento
            </a>
          </h2>
        </div>
        <div className='infosMonitor'>
          <AiOutlineDiscord className='icon discord' />
          <h2 className='texto'>
            <a
              href={`https://discordapp.com/users/${monitor.discordID}`}
              target='_blank'
              rel='noopener noreferrer'
              className='links'
            >
              {monitor.discordHandle}
            </a>
          </h2>
        </div>
        <div className='infosMonitor'>
          <BiLogoGmail className='icon gmail' />
          <h2 className='texto'>
            <a href={`mailto:${monitor.email}`} className='links'>
              {monitor.email}
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TelaMonitorEscolhido;
