
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container } from "@material-ui/core";

function App() {
  return (
    <>
      <Container element="article" maxWidth="sm">
        <h1>Formulário de Cadastro</h1>
        <FormularioCadastro onSubmit={onSubmit} validarCPF={validarCPF} />
      </Container>

    </>
  );
}

function onSubmit(dados){
  console.log(dados);
}

function validarCPF(cpf){
  if(cpf.length !== 11){
    return {valido: false, msg: "CPF deve ter 11 digitos."};
  }else{
    return {valido: true, msg: ""};
  }
}

export default App;
