import { useEffect, useState } from "react";
import { IcadastraSala } from "./cadastra-sala";
import { api } from "../variaveis";
import { CardReservaSala } from "../components/card-sala-reserva";
import { SearchField } from "../components/search";

function VisualizaSala() {
  const [salasReservadas, setSalasReservadas] = useState<IcadastraSala[]>([]);
  const [salasSearch, setSalaSearch] = useState<IcadastraSala[]>([]);

  useEffect(() => {
    api.get("reserva-sala").then((resp) => {
      console.log(resp);
      setSalasReservadas(resp.data);
      setSalaSearch(resp.data);
    });
  }, []);

  const Search = (text: string) => {
    const salas: IcadastraSala[] = [];
    salasReservadas.forEach((sala) => {
      if (sala.nomeSala.toLowerCase().includes(text.toLowerCase())) {
        salas.push(sala);
      }
    });
    setSalaSearch(salas);
  };

  return (
    <div>
    <SearchField callback={Search}></SearchField>
      <div className="flex flex-wrap m-5">
        {salasSearch.map((sala) => {
          return (
            <CardReservaSala
              key={sala.id}
              url={sala.url}
              nomeSala={sala.nomeSala}
              nomeResponsavel={sala.nomeResponsavel}
              localSala={sala.localSala}
              dataUso={sala.dataUso}
              horaInicio={sala.horaInicio}
              horaFinal={sala.horaFinal}
              motivoUso={sala.motivoUso}
              informacaoGeral={sala.informacaoGeral}
              convidados={sala.convidados}
            />
          );
        })}
      </div>
    </div>
  );
}

export default VisualizaSala;
