import "./App.css";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TelaPrincipal from "./pages/TelaPrincipal/TelaPrincipal";
import FormTelaPerguntas from "./components/FormTelaPerguntas/FormTelaPerguntas";
import TelaEscolhaAgentes from "./pages/TelaEscolhaAgentes/TelaEscolhaAgentes";
import TelaVerificarAluno from "./pages/TelaVerificarAluno/TelaVerificarAluno.jsx";

const FormWrapper = () => {
  const location = useLocation();
  const turno = location.state?.turno;

  return <FormTelaPerguntas turno={turno} />;
};

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<TelaPrincipal />} />
        <Route path="/confirmacao" element={<TelaVerificarAluno />} />
        <Route path="/form" element={<FormWrapper />} />
        <Route path="/agente" element={<TelaEscolhaAgentes />} />
      </Routes>
    </Router>
  );
}

export default App;
