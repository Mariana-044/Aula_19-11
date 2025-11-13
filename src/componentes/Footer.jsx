import "./footer.css";

function Footer () {
    const ano = new Date().getFullYear(); //Função para a data


    return (
        <footer>
            <p> Meu Site em React - Técnico em Desenvolvimento de Sistemas. {ano} </p>
            </footer>
    ) //Fecha retorno
} //Fecha Função


export default Footer;
