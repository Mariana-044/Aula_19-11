import React, { useState } from "react";
import { TextField, Container, Button, List, ListItem } from "@mui/material";
import { useNavigate } from "react-router-dom"; // import para navegação
import "./cadastroEvento.css";

function CadastroEvento() {
  const [evento, setEvento] = useState({
    nome: "",
    data: "",
    local: "",
    descricao: ""
  });

  const [eventos, setEventos] = useState([]);

  const navigate = useNavigate(); // hook para navegação

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvento({ ...evento, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEventos([...eventos, evento]);
    setEvento({ nome: "", data: "", local: "", descricao: "" });
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

      {/* Botão de voltar ao Home */}
      <Button
        variant="contained"
        onClick={() => navigate("/")}
        sx={{
          color: "white",              // texto branco
          backgroundColor: "#1976d2",  // azul padrão MUI
          mt: 2,                       // margem superior
          "&:hover": {
            backgroundColor: "#115293" // cor no hover
          }
        }}
      >
        Voltar ao Home
      </Button>

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
