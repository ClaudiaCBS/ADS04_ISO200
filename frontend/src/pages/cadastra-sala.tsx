import React, { useState } from "react";
import { TextField } from "../components/text-field";
import { TextAreaField } from "../components/text-area";
import { HourField } from "../components/hour-field";
import { DateField } from "../components/date-field";
import { InputFile } from "../components/input-files";
import { api } from "../variaveis";
import { ConfirmationModal } from "../components/modal-confirmation";
import { ErrorModal } from "../components/modal-error";

export interface IcadastraSala {
  id ?: number
  nomeResponsavel: String;
  nomeSala: String;
  localSala: String;
  dataUso: Date;
  horaInicio: String;
  horaFinal: String;
  motivoUso: String;
  informacaoGeral: String;
  convidados: String;
  url ?: string
}

const CadastraSala = () => {
  const [usuarioResponsavel, setUsuarioResponsavel] = useState<string>("");
  const [nomeSala, setNomeSala] = useState<string>("");
  const [localSala, setLocalSala] = useState<string>("");
  const [dataUso, setDataUso] = useState<Date>(new Date());
  const [horaInicio, setHoraInicio] = useState<string>("");
  const [horaFinal, setHoraFinal] = useState<string>("");
  const [motivoUso, setMotivoUso] = useState<string>("");
  const [infoGeral, setInfoGeral] = useState<string>("");
  const [convidadoField, setConvidadoField] = useState<string>("");
  const [convidados, setConvidados] = useState<string[]>([]);
  const [fotos, setFoto] = useState<File[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [modalError, setModalError] = useState<boolean>(false);

  const salvaSala = async () => {
    const sala: IcadastraSala = {
      nomeResponsavel: usuarioResponsavel,
      nomeSala: nomeSala,
      localSala: localSala,
      dataUso: dataUso,
      horaInicio: horaInicio,
      horaFinal: horaFinal,
      motivoUso: motivoUso,
      informacaoGeral: infoGeral,
      convidados: JSON.stringify(convidados),
    };

    api
      .post("reserva-sala", sala)
      .then((resp) => {
        console.log("resposta:" + resp);
        if (resp.status === 201) {
          setModal(true);
          setTimeout(() => setModal(false), 3000);
          salvaFoto(resp.data.id);
        }
        setUsuarioResponsavel("");
        setNomeSala("");
        setLocalSala("");
        setDataUso(new Date());
        setHoraInicio("");
        setHoraFinal("");
        setMotivoUso("");
        setInfoGeral("");
        setConvidados([]);
        setConvidadoField("");
      })
      .catch(() => {
        setModalError(true);
        setTimeout(() => setModalError(false), 3000);
      });
  };

  const salvaConvidado = () => {
    setConvidados([...convidados, convidadoField]);
    setConvidadoField("");
  };

  const salvaFoto = (id: number) => {
    fotos.forEach((foto) => {
      const form = new FormData();
      form.append("file", foto);
      try {
        api.post(`imagem/upload/${id}`, form);
      } catch (error) {
        console.log("Não foi possível carregar a Imagem!");
      }
    });
  };

  const mudancaArquivo = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const arquivoSelecionado: File[] = Array.from(event.target.files);
      const arquivoFiltrado: File[] = [];

      arquivoSelecionado.forEach((f) => {
        const tipoArquivo = f.type.split("/")[1];
        if (
          tipoArquivo == "jpeg" ||
          tipoArquivo == "png" ||
          tipoArquivo == "svg"
        ) {
          arquivoFiltrado.push(f);
        } else {
          alert(`${f.name} não é uma imagem!`);
        }
      });
      setFoto(arquivoFiltrado);
    }
  };

  return (
    <>
      <div className="flex flex-col h-full w-full items-center space-y-4">
        <h2 className="text-3xl font-bold">Cadastro de Reserva de Sala</h2>
        <div className="h-1/2 w-1/4 space-y-2">
          <TextField
            nome="Nome do Responsável pelo Uso da Sala: "
            setValor={setUsuarioResponsavel}
            valor={usuarioResponsavel}
          ></TextField>
          <TextField
            nome="Nome da Sala: "
            setValor={setNomeSala}
            valor={nomeSala}
          ></TextField>
          <TextField
            nome="Local da Sala: "
            setValor={setLocalSala}
            valor={localSala}
          ></TextField>
        </div>

        <div className="h-1/2 w-1/4 space-y-2">
          <DateField nome="Data de Uso: " setValor={setDataUso}></DateField>
          <HourField
            nome="Hora Início do Uso: "
            setValor={setHoraInicio}
            valor={horaInicio}
          ></HourField>
          <HourField
            nome="Hora Final do Uso: "
            setValor={setHoraFinal}
            valor={horaFinal}
          ></HourField>
        </div>

        <div className="h-1/2 w-1/4 space-y-2">
          <TextAreaField
            nome="Motivo do Uso da Sala: "
            setValor={setMotivoUso}
            valor={motivoUso}
          ></TextAreaField>
          <TextAreaField
            nome="Informações Gerais: "
            setValor={setInfoGeral}
            valor={infoGeral}
          ></TextAreaField>
          <div className="flex flex-row">
            <TextField
              nome="Convidados: "
              setValor={setConvidadoField}
              valor={convidadoField}
            ></TextField>
            <button className="btn" onClick={salvaConvidado}>
              +
            </button>
            <ul className="flex flex-col">
              {convidados.map((convidado) => {
                return <li>{convidado}</li>;
              })}
            </ul>
          </div>
        </div>
        <div>
          <InputFile
            label="Foto da Sala: "
            setFiles={mudancaArquivo}
            files={fotos}
          ></InputFile>
        </div>

        <button className="btn" onClick={salvaSala}>
          Cadastrar
        </button>
      </div>
      {modal && (
        <ConfirmationModal mensagem="Sala Reservada Com Sucesso!"></ConfirmationModal>
      )}
      {modalError && (
        <ErrorModal mensagem="Não foi possível Reservar essa Sala!" />
      )}
    </>
  );
};

export default CadastraSala;
