import "./App.css";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TelaPrincipal from "./pages/TelaPrincipal/TelaPrincipal";
import FormTelaPerguntas from "./components/FormTelaPerguntas/FormTelaPerguntas";
import TelaEscolhaAgentes from "./pages/TelaEscolhaAgentes/TelaEscolhaAgentes";
import TelaVerificarAluno from "./pages/TelaVerificarAluno/TelaVerificarAluno.jsx";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const handleSnackbarMessage = (message) => {
    toast.error(message);
  };

  const handleSave = (data) => {
    console.log('Dados salvos:', data);
  };

  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<TelaPrincipal onSave={handleSave} onSnackbarMessage={handleSnackbarMessage} />} />
        <Route path="/confirmacao" element={<TelaVerificarAluno />} />
        <Route path="/form" element={<FormWrapper />} />
        <Route path="/agente" element={<ConfirmacaoWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
