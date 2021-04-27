import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

function DadosUsuario({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit({ email, senha });
        }}
      >
        <TextField
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          id="email"
          label="email"
          type="email"
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
          type="password"
          fullWidth
          variant="outlined"
          margin="normal"
          required
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Cadastrar
        </Button>
      </form>
    </>
  );
}

export default DadosUsuario;
