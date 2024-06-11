import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import TelaPrincipal from './pages/TelaPrincipal/TelaPrincipal';
import FormTelaPerguntas from './components/FormTelaPerguntas/FormTelaPerguntas';
import TelaVerificarAluno from './pages/TelaVerificarAluno/TelaVerificarAluno.jsx';
import TelaMonitorEscolhido from './pages/TelaMonitorEscolhido/TelaMonitorEscolhido.jsx';

const FormWrapper = () => {
  const location = useLocation();
  const turno = location.state?.turno;

  return <FormTelaPerguntas turno={turno} />;
};

const ConfirmacaoWrapper = () => {
  const location = useLocation();
  const monitorID = location.state?.monitorID;

  return <TelaMonitorEscolhido monitorID={monitorID} />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<TelaPrincipal />} />
        <Route path='/confirmacao' element={<TelaVerificarAluno />} />
        <Route path='/form' element={<FormWrapper />} />
        <Route path='/agente' element={<ConfirmacaoWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
