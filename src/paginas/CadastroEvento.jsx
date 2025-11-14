import React, { useState } from "react";
import { TextField, Container, Button, List, ListItem } from "@mui/material";
import "./cadastroEvento.css";

function CadastroEvento() {
  const [evento, setEvento] = useState({
    nome: "",
    data: "",
    local: "",
    descricao: ""
  });

  const [eventos, setEventos] = useState([]); // lista de eventos cadastrados

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvento({ ...evento, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEventos([...eventos, evento]); // adiciona evento na lista
    setEvento({ nome: "", data: "", local: "", descricao: "" }); // limpa formulário
  };

  return (
    <Container maxWidth="sm">
      <h2>Cadastro de Evento</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nome do Evento"
          name="nome"
          value={evento.nome}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Data"
          type="date"
          name="data"
          value={evento.data}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          required
        />
        <TextField
          label="Local"
          name="local"
          value={evento.local}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Descrição"
          name="descricao"
          value={evento.descricao}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary">
          Cadastrar
        </Button>
      </form>

      {/* Lista de eventos cadastrados */}
      <h3>Eventos cadastrados:</h3>
      <List>
        {eventos.map((ev, index) => (
          <ListItem key={index}>
            {ev.nome} - {ev.data} - {ev.local}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default CadastroEvento;
