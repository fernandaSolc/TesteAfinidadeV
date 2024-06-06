import './TelaEscolhaAgentes.css';
import Title from '../../components/Title/Title';
import CardEscolhaAgente from '../../components/CardEscolhaAgente/CardEscolhaAgente';
import Logo from '../../components/Logo/Logo';
import CardMonitores from '../../components/CardMonitores/CardMonitores';

const TelaEscolhaAgentes = () => {
  return (
    <div className='telaEscolhaAgente'>
      <Title />
      <CardEscolhaAgente>
        <Logo />
        <CardMonitores nome='Gustavo' sobrenome='Felippe' />
        <CardMonitores nome='Fernanda' sobrenome='Fedida' />
        <CardMonitores nome='Larissa' sobrenome='Felipe' />
        <button className='btnConfirmar'>Confirmar</button>
      </CardEscolhaAgente>
    </div>
  );
};

export default TelaEscolhaAgentes;
