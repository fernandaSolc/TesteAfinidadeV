import './App.css';
import TelaPerguntas from './pages/TelaPerguntas/TelaPerguntas';
import LogoTelaPerguntas from './components/LogoTelaPerguntas/LogoTelaPerguntas';
// import TelaPrincipal from './pages/TelaPrincipal/TelaPrincipal';

function App() {
  return (
    <>
      <header>{LogoTelaPerguntas()}</header>
      <div className='container'>
        {/* <TelaPrincipal /> */}
        <TelaPerguntas />
      </div>
    </>
  );
}

export default App;
