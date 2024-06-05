import { Box, Button, CircularProgress, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const Verificacao = ({ onSave, onSnackbarMessage }) => {
  const [pdx, setPdx] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setPdx(e.target.value);
  };

  const handleVerify = async () => {
    if (pdx) {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://api-hml.pdcloud.dev/enrolled/matricula/${pdx.toUpperCase()}`, {
          headers: {
            'api-key': import.meta.env.VITE_API_KEY,
          },
        });
        const data = response.data;
        setName(data.name);
        onSave(data); // Salva os dados do aluno
      } catch (error) {
        console.error("Error fetching student:", error);
        let errorMessage = "Erro ao verificar PDX";
        if (
          axios.isAxiosError(error) &&
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          errorMessage += `: ${error.response.data.message}`;
        }
        onSnackbarMessage(errorMessage);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Verifique seu PDX
      </Typography>
      <TextField
        label="PDX"
        variant="outlined"
        value={pdx}
        onChange={handleInputChange}
        sx={{ mb: 3 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleVerify}
        disabled={isLoading || !pdx}
      >
        {isLoading ? <CircularProgress size={24} /> : "Verificar"}
      </Button>
      {name && (
        <Typography variant="h6" sx={{ mt: 3 }}>
          Nome: {name}
        </Typography>
      )}
    </Box>
  );
};

export default Verificacao;
