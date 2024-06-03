import {
  Box,
  Button,
  CircularProgress,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import axios from "axios";

// Função de debounce para atrasar a execução da pesquisa
function debounce(func, wait) {
  let timeout;

  return function (...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const HomePage = ({ onStageChange, onSave, onSnackbarMessage }) => {
  // Estado para controlar a matrícula pesquisada
  const [matricula, setMatricula] = useState("");
  
  // Estado para controlar o carregamento dos dados
  const [isLoading, setIsLoading] = useState(false);

  const debouncedMatricula = debounce((nextMatricula) => {
    setIsLoading(false);
    setMatricula(nextMatricula);
  }, 1000);

  // Função para lidar com a mudança no input de matrícula
  const handleInputChange = (e) => {
    const input = e.target.value;
    const isNumeric = /^[0-9.,\/-]+$/;
    if (isNumeric.test(input)) {
      const cleanedInput = input.replace(/\D/g, "");
      debouncedMatricula(cleanedInput);
    } else {
      debouncedMatricula(input);
    }
  };

  // Função para redirecionar para a página de cadastro
  const cadastrar = () => {
    onStageChange(3);
  };

  // Função para redirecionar para a página de edição
  const editar = () => {
    onStageChange(6);
  };

  // Efeito que é executado quando o estado de matrícula muda
  useEffect(() => {
    if (matricula) {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const config = {
            headers: {
              "Api-Key": import.meta.env.VITE_API_KEY,
            },
          };

          const response = await axios.get(
            `https://api-hml.pdcloud.dev/enrolled/matricula/${matricula.toUpperCase()}`,
            config
          );

          const data = response.data;

          // Salvando os dados do aluno
          onSave({
            id: data.id,
            city: data.cityId,
            name: data.nomeCompleto,
            cpf: data.cpf,
            dataNasc: data.dataNasc,
            cel: data.cel,
            emailPd: data.emailPd,
            patrimony: data.patrimony,
            registrationCode: data.registrationCode,
            preferredName:
              data.hasPreferredName === true ? data.preferredName : "",
            hasPreferredName: data.hasPreferredName,
            agenteDoSucesso: data.agenteDoSucesso,
            cep: data.cep,
            rua: data.rua,
            bairro: data.bairro,
            numero: data.numero,
            complemento: data.complemento,
            status: data.status,
            usingNotebook: data.usingNotebook,
            monitoringDay: data.monitoringDay,
            monitoringLink: data.monitoringLink,
          });

          // Muda o estágio para a página de confirmação
          onStageChange(1);
        } catch (error) {
          console.error("Error fetching candidate:", error);

          let errorMessage = "Erro ao enviar dados";
          if (
            axios.isAxiosError(error) &&
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            errorMessage += `: ${error.response.data.message}`;
          } else {
            errorMessage += ".";
          }

          // Exibindo mensagem de erro no Snackbar
          onSnackbarMessage(errorMessage);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    } else {
      setIsLoading(false);
    }
  }, [matricula, setMatricula]);

  return (
    <>
      <Typography
        fontWeight={700}
        color={"#1F2937"}
        sx={{
          pb: 2,
          fontSize: {
            xs: "2.5rem",
            sm: "2.5rem",
            md: "2.5rem",
            lg: "2.8rem",
            xl: "2.8rem",
          },
        }}
      >
        O que você deseja fazer?
      </Typography>

      {/* Input para pesquisar por matrícula */}
      <TextField
        label="Pesquisar por matrícula"
        placeholder="Pesquisar por matrícula"
        id="outlined-start-adornment"
        variant="outlined"
        onChange={handleInputChange}
        sx={{
          m: 1,
          width: { xs: "80%", sm: "80%", md: "60%", lg: "50%", xl: "50%" },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      {/* Renderização condicional do indicador de carregamento */}
      {isLoading ? (
        // Indicador de carregamento enquanto os dados estão sendo buscados
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: "20vh" }}
        >
          <CircularProgress />
        </Box>
      ) : (
        // Botões para cadastrar ou editar aluno
        <Box display={"flex"} alignItems={"center"}>
          <Button
            variant="contained"
            color="primary"
            onClick={cadastrar}
            sx={{
              m: 2,
            }}
          >
            Cadastrar aluno
          </Button>

          <Button
            variant="contained"
            color="secondary"
            onClick={editar}
            sx={{
              m: 2,
            }}
          >
            Editar aluno
          </Button>
        </Box>
      )}
    </>
  );
};

export default routeApi;