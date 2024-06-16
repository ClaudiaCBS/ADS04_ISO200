import React, { useState } from "react";
import { TextField } from "../components/text-field";
import { PasswordField } from "../components/password-field";
import { api } from "../variaveis";
import { ConfirmationModal } from "../components/modal-confirmation";
import { EmailField } from "../components/email-field";
import { ErrorModal } from "../components/modal-error";

interface Iusuario {
  nome: string;
  email: string;
  senha: string;
}

const FormularioUsuario: React.FC = () => {
  const [nomeUsuario, setNomeUsuario] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);
  const [modalError, setModalError] = useState<boolean>(false);

  const salvaUsuario = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const usuario: Iusuario = {
      nome: nomeUsuario,
      email: email,
      senha: senha,
    };
    await api
      .post("usuario", usuario)
      .then((resp) => {
        console.log("resposta: " + resp);
        if (resp.status === 201) {
          setModal(true);
          setTimeout(() => setModal(false), 3000);
        }
        setNomeUsuario("");
        setEmail("");
        setSenha("");
      })
      .catch(() => {
        setModalError(true);
        setTimeout(() => setModalError(false), 3000);
      });
  };

  return (
    <>
      <div className="flex flex-col h-full w-full items-center space-y-4">
        <h1 className="text-3xl font-bold">Cadastro de Usuário</h1>
        <div className="h-1/2 w-1/4 space-y-2">
          <TextField
            nome="Nome do Usuário: "
            setValor={setNomeUsuario}
            valor={nomeUsuario}
          ></TextField>
        </div>
        <div className="h-1/2 w-1/4 space-y-2">
          <EmailField
            nome="Email do Usuário: "
            setValor={setEmail}
            valor={email}
          ></EmailField>
        </div>
        <div className="h-1/2 w-1/4 space-y-2">
          <PasswordField
            nome="Senha: "
            setValor={setSenha}
            valor={senha}
          ></PasswordField>
        </div>
        <button className="btn" onClick={(e) => salvaUsuario(e)}>
          Cadastrar
        </button>
      </div>

      {modal && (
        <ConfirmationModal mensagem="Usuário Cadastrado Com Sucesso!"></ConfirmationModal>
      )}
      {modalError && (
        <ErrorModal mensagem="Não foi possível Cadastrar esse Usuário!" />
      )}
    </>
  );
};

export default FormularioUsuario;
