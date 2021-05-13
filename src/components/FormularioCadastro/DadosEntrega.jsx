import React, {useState} from "react";
import { TextField, Button } from "@material-ui/core";

function DadosEntrega({ onSubmit }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit({cep, endereco, numero, estado, cidade});
        }}
      >
        <TextField
          value={cep}
          onChange={(event) => setCep(event.target.value)}
          id="cep"
          label="CEP"
          name="cep"
          type="number"
          variant="outlined"
          margin="normal"
          required
        />
        <TextField
          value={endereco}
          onChange={(event) => setEndereco(event.target.value)}
          id="endereco"
          label="Endereço"
          name="endereco"
          type="text"
          fullWidth
          variant="outlined"
          margin="normal"
          required
        />
        <TextField
          value={numero}
          onChange={(event) => setNumero(event.target.value)}
          id="numero"
          label="Número"
          name="numero"
          type="number"
          variant="outlined"
          margin="normal"
          required
        />
        <TextField
          value={estado}
          onChange={(event) => setEstado(event.target.value)}
          id="estado"
          label="Estado"
          name="estado"
          type="text"
          variant="outlined"
          margin="normal"
          required
        />
        <TextField
          value={cidade}
          onChange={(event) => setCidade(event.target.value)}
          id="cidade"
          label="Cidade"
          name="cidade"
          type="text"
          variant="outlined"
          margin="normal"
          required
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Finalizar cadastro
        </Button>
      </form>
    </>
  );
}

export default DadosEntrega;
