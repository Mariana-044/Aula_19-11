import "./evento.css";


function Evento(props) {
    return (
        <div>
            <h3> {props.nome} </h3> {/*Exibe o nome do evento */}
            <p> Data: {props.data} </p> {/* Mostra a data do evento */}
            <p> Local: {props.local} </p> {/* Mostra o local do evento*/}
        </div>
    );
}


export default Evento;
