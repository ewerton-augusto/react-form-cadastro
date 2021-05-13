import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ onSubmit }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dados, setDados] = useState({});

  useEffect(() => {
    if (etapaAtual === formulario.length - 1) {
      onSubmit(dados);
    }
  });

  function adicionarDados(novosDados) {
    setDados({ ...dados, ...novosDados });
    proximaEtapa();
  }

  function proximaEtapa() {
    setEtapaAtual(etapaAtual + 1);
  }

  const formulario = [
    <DadosUsuario onSubmit={adicionarDados}  />,
    <DadosPessoais onSubmit={adicionarDados} />,
    <DadosEntrega onSubmit={adicionarDados} />,
    <Typography variant="h5">Obrigado por se cadastrar!</Typography>,
  ];

  return <>
  <Stepper activeStep={etapaAtual}>
    <Step><StepLabel>Login</StepLabel></Step>
    <Step><StepLabel>Pessoal</StepLabel></Step>
    <Step><StepLabel>Entrega</StepLabel></Step>
    <Step><StepLabel>Finalização</StepLabel></Step>
  </Stepper>
  {formulario[etapaAtual]}</>;
}

export default FormularioCadastro;
