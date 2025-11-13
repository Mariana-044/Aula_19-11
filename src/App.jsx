import "./style.css";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";

function AppContent() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Header />

      {/* Menu de Navegação */}
      <nav className="nav-centralizada">
    <button onClick={() => navigate("/inicio")}>Ir para Início</button>
    <button onClick={() => navigate("/sobre")}>Ir para Sobre</button>
    </nav>


      {/* Rotas da página */}
      <Routes>
        <Route path="/inicio" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
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
