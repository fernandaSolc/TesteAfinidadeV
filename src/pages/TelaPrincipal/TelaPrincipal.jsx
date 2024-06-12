import { useState } from "react";
import FormTelaPrincipal from "../../components/FormTelaPrincipal/FormTelaPrincipal";
import Card from "../../components/Card/Card";
import Logo from "../../components/Logo/Logo";
import Title from "../../components/Title/Title";
import "./TelaPrincipal.css";

const TelaPrincipal = () => {
  const [registrationCode, setregistrationCode] = useState("");

  return (
    <div className="telaPrincipal">
      <Title />
      <Card>
        <Logo />
        <FormTelaPrincipal
          registrationCode={registrationCode}
          setregistrationCode={setregistrationCode}
        />
      </Card>
    </div>
  );
};

export default TelaPrincipal;
