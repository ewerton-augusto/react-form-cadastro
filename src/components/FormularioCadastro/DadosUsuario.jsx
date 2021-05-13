import { Button, TextField } from "@material-ui/core";
import React, { useState, useContext } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro);

  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if(possoEnviar()) {
            onSubmit({ email, senha });
          }
        }}
      >
        <TextField
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          id="email"
          label="email"
          type="email"
          name="email"
          fullWidth
          variant="outlined"
          margin="normal"
          required
        />
        <TextField
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
          id="senha"
          label="senha"
          name="senha"
          type="password"
          fullWidth
          variant="outlined"
          margin="normal"
          onBlur={validarCampos}
          error={!erros.senha.valido}
          helperText={erros.senha.msg}
          required
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Próximo
        </Button>
      </form>
    </>
  );
}

export default DadosUsuario;
