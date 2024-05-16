import Card from '../../components/Card/Card';
import FormTelaPrincipal from '../../components/FormTelaPrincipal/FormTelaPrincipal';
import Title from '../../components/Title/Title';
import Logo from '../../components/Logo/Logo';
import './TelaPrincipal.css';

const TelaPrincipal = () => {
  return (
    <div className='telaPrincipal'>
      <Title />
      <Card>
        <Logo />
        <FormTelaPrincipal />
        <button>Iniciar Quiz</button>
      </Card>
    </div>
  );
};

export default TelaPrincipal;
