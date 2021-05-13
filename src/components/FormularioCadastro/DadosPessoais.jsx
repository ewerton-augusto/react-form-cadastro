import React, { useState, useContext } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from "../../hooks/useErros";

function DadosPessoais({ onSubmit }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setsobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (possoEnviar()) {
            onSubmit({ nome, sobrenome, cpf, promocoes, novidades });
          }
        }}
      >
        <TextField
          id="nome"
          label="Nome"
          name="nome"
          fullWidth
          variant="outlined"
          margin="normal"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          required
        />
        <TextField
          id="sobrenome"
          label="Sobrenome"
          name="sobrenome"
          fullWidth
          variant="outlined"
          margin="normal"
          value={sobrenome}
          onChange={(event) => setsobrenome(event.target.value)}
          required
        />
        <TextField
          id="cpf"
          label="CPF"
          name="cpf"
          fullWidth
          variant="outlined"
          margin="normal"
          value={cpf}
          onChange={(event) => setCpf(event.target.value)}
          error={!erros.cpf.valido}
          helperText={erros.cpf.msg}
          onBlur={validarCampos}
          required
        />

        <FormControlLabel
          control={
            <Switch
              checked={promocoes}
              onChange={(event) => setPromocoes(event.target.checked)}
              name="promocoes"
              color="primary"
            />
          }
          label="Promoções"
        />
        <FormControlLabel
          control={
            <Switch
              checked={novidades}
              onChange={(event) => setNovidades(event.target.checked)}
              name="novidades"
              color="primary"
            />
          }
          label="Novidades"
        />

        <Button variant="contained" color="primary" type="submit" fullWidth>
          Próximo
        </Button>
      </form>
    </>
  );
}

export default DadosPessoais;
