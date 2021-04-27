import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function DadosPessoais({ onSubmit, validarCPF }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setsobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ cpf: { valido: true, msg: "" } });

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit({ nome, sobrenome, cpf, promocoes, novidades });
        }}
      >
        <TextField
          id="nome"
          label="Nome"
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
          fullWidth
          variant="outlined"
          margin="normal"
          value={cpf}
          onChange={(event) => setCpf(event.target.value)}
          error={!erros.cpf.valido}
          helperText={erros.cpf.msg}
          onBlur={event => {
            let validandoCPF = validarCPF(event.target.value);
            setErros({cpf:validandoCPF});
          }}
          required
        />

        <FormControlLabel
          control={
            <Switch              
              checked={promocoes}
              onChange={event => setPromocoes(event.target.checked)}              
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
          Cadastro
        </Button>
      </form>
    </>
  );
}

export default DadosPessoais;
