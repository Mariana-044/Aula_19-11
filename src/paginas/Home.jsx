import Evento from "../componentes/Evento";
import "./Home.css";

function Home() {
  return (
    <main>
      <h1> Bem vindo ao Gerenciador de Eventos </h1>
      <p> Aqui você fica por dentro dos eventos. </p>
      
      {/*Exibindo os eventos*/}
      <Evento nome="Mundo Senai" data="05/11/2025" local="Auditório" />
      <Evento nome="EFAPI" data="10/10/2025" local="EFAPI" />
      <Evento nome="Tecnologia e Cia" data="03/09/2025" local="Passo dos Fortes"
      />
    </main>
  )
}

export default Home;