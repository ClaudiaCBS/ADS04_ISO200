import { IcadastraSala } from "../pages/cadastra-sala";


export const CardReservaSala = (props : IcadastraSala) => {
  const ano = props.dataUso.toString().split('-')[0]
  const mes = props.dataUso.toString().split('-')[1]
  const dia = props.dataUso.toString().split('-')[2].split(`T`)[0]
  return (
      <div className="card w-96 bg-base-100 shadow-xl m-8">
        <figure>
          <img
            src={props.url}
            alt="Sala"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.nomeSala}</h2>
          <ul>
            <li>Responsável: {props.nomeResponsavel}</li>
            <li>Local: {props.localSala}</li>
            <li>Data de Uso: {dia}/{mes}/{ano}</li> 
            <li>Hora Início: {props.horaInicio}</li>
            <li>Hora Final: {props.horaFinal}</li>
          </ul>
        </div>
      </div>
  );
};