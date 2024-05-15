import Card from '../../components/Card/Card';
import Form from '../../components/Form/Form';
import Title from '../../components/Title/Title';
import Logo from '../../components/Logo/Logo';
import './TelaPrincipal.css';

const TelaPrincipal = () => {
  return (
    <div className='telaPrincipal'>
      <Title />
      <Card>
        <Logo />
        <Form />
        <button>Iniciar Quiz</button>
      </Card>
    </div>
  );
};

export default TelaPrincipal;
