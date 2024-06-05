import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TelaPerguntas from './pages/TelaPerguntas/TelaPerguntas';
import TelaPrincipal from './pages/TelaPrincipal/TelaPrincipal';
import CardTelaVerificarAluno from './components/CardTelaVerificarAluno/CardTelaVerificarAluno'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<TelaPrincipal />} />
        <Route path='/confirmacao' element={<CardTelaVerificarAluno />} />
      </Routes>
    </Router>
  );
}

export default App;
