import './App.css';
// import TelaEscolhaAgentes from './pages/TelaEscolhaAgentes/TelaEscolhaAgentes';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import TelaPerguntas from './pages/TelaPerguntas/TelaPerguntas';
// import TelaPrincipal from './pages/TelaPrincipal/TelaPrincipal';
// import CardTelaVerificarAluno from './components/CardTelaVerificarAluno/CardTelaVerificarAluno';
import TelaMonitorEscolhido from './pages/TelaMonitorEscolhido/TelaMonitorEscolhido';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path='/' element={<TelaPrincipal />} />
    //     <Route path='/confirmacao' element={<CardTelaVerificarAluno />} />
    //   </Routes>
    // </Router>
    <TelaMonitorEscolhido />
  );
}

export default App;
