import './TelaMonitorEscolhido.css';
import { AiOutlineDiscord } from 'react-icons/ai';
import { BiLogoGmail } from 'react-icons/bi';
import { SiCalendly } from 'react-icons/si';
import Logo from '../../components/Logo/Logo';
import monitores from './monitores'; // Importar os dados dos monitores
// import { useNavigate, useParams } from 'react-router-dom';

const TelaMonitorEscolhido = () => {
  // const { id } = useParams(); // Obter o ID do monitor a partir da URL
  // const monitorID = parseInt(id, 10); // Converter o ID para número
  // const navigate = useNavigate(); // Usar useNavigate para navegação;
  const monitor = monitores.find(m => m.monitor_id);

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
      <div className='cardMonitorEscolhido'>
        <Logo />
        <img
          src={monitor.image}
          alt={monitor.firstName}
          className='monitorImage'
        />
        <h2 className='nomeSobrenome'>{monitor.firstName}</h2>
        <h3 className='nomeSobrenome sobrenome'>{monitor.lastName}</h3>
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
      </div>
    </div>
  );
};

export default TelaMonitorEscolhido;
