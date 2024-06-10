import './App.css';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TelaPrincipal from './pages/TelaPrincipal/TelaPrincipal';
import CardTelaVerificarAluno from './components/CardTelaVerificarAluno/CardTelaVerificarAluno';
import FormTelaPerguntas from './components/FormTelaPerguntas/FormTelaPerguntas';
import TelaEscolhaAgentes from './pages/TelaEscolhaAgentes/TelaEscolhaAgentes';

const FormWrapper = () => {
  const location = useLocation();
  const turno = location.state?.turno;

  return <FormTelaPerguntas turno={turno} />;
};

const ConfirmacaoWrapper = () => {
  const location = useLocation();
  const bestMonitor = location.state?.bestMonitor;

  return <TelaEscolhaAgentes bestMonitor={bestMonitor} />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<TelaPrincipal />} />
        <Route path='/confirmacao' element={<CardTelaVerificarAluno />} />
        <Route path='/form' element={<FormWrapper />} />
        <Route path='/agente' element={<ConfirmacaoWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
