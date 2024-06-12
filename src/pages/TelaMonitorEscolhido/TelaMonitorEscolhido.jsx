import './TelaMonitorEscolhido.css';
import Logo from '../../components/Logo/Logo';
import monitores from './monitores';
import { AiOutlineDiscord } from 'react-icons/ai';
import { BiLogoGmail } from 'react-icons/bi';
import { SiCalendly } from 'react-icons/si';
<<<<<<< HEAD
import Logo from '../../components/Logo/Logo';
import monitores from './monitores'; // Importar os dados dos monitores
import { useLocation, useNavigate } from 'react-router-dom';
=======
>>>>>>> origin/Larissa

const TelaMonitorEscolhido = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const monitorID = location.state?.monitorID;

  const monitor = monitores.find(m => m.monitor_id === monitorID);

  if (!monitor) {
    return (
      <div className='cardMonitorEscolhido'>
        <Logo />
        <div className='notFound'>Monitor não encontrado</div>
        <button className='backButton' onClick={() => navigate('/')}>
          Voltar à Tela Inicial
        </button>
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
        <h2 className='textosMonitor'>{monitor.firstName}</h2>
        <h3 className='textosMonitor'>{monitor.lastName}</h3>
        <div className='linksMonitor'>
          <div className='infosMonitor'>
            <AiOutlineDiscord className='icon discord' />
            <h2 className='textosMonitor textoDiscord'>
              {monitor.discordHandle}
            </h2>
          </div>
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
            <BiLogoGmail className='icon gmail' />
            <h2 className='texto'>
              <a href={`mailto:${monitor.email}`} className='links'>
                {monitor.email}
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelaMonitorEscolhido;