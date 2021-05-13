import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import { validarCPF, validarSenha } from "./models/cadastro";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

function App() {
  return (
    <>
      <Container element="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de Cadastro
        </Typography>
        <ValidacoesCadastro.Provider
          value={{ cpf: validarCPF, senha: validarSenha }}
        >
          <FormularioCadastro onSubmit={onSubmit} />
        </ValidacoesCadastro.Provider>
      </Container>
    </>
  );
}

function onSubmit(dados) {
  console.log(dados);
}

export default App;
