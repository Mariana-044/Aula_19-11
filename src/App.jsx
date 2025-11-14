import "./style.css";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import CadastroEvento from "./paginas/CadastroEvento"; 



function AppContent() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Header />

      {/* Menu de Navegação */}
      <nav className="nav-centralizada">
        <button onClick={() => navigate("/inicio")}>Início</button>
        <button onClick={() => navigate("/sobre")}>Sobre</button>
        <button onClick={() => navigate("/cadastro-evento")}>Cadastrar Evento</button>
      </nav>

      {/* Rotas da página */}
      <Routes>
        <Route path="/inicio" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/cadastro-evento" element={<CadastroEvento />} />
      </Routes>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
