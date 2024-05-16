import './App.css';
import TelaPerguntas from './pages/TelaPerguntas/TelaPerguntas';
import TelaPrincipal from './pages/TelaPrincipal/TelaPrincipal';

function App() {
  return (
    <div className='container'>
      <TelaPrincipal />
      <TelaPerguntas />
    </div>
  );
}

export default App;
