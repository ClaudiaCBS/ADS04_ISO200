import React, { useState } from "react";
import { PasswordField } from "../components/password-field";
import { EmailField } from "../components/email-field";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { ISignInDto } from "../services/services.auth";

const LoginForm: React.FC = () => {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const nav = useNavigate();
  const auth = useAuth();

  const mudancaLogin = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const data: ISignInDto = {
      email: nomeUsuario,
      senha: senha,
    };
    await auth?.login(data);
    nav("/home");
  };

  return (
    <>
      <div className="flex flex-col h-full w-full items-center space-y-4">
        <h2 className="text-3xl font-bold">Página de Login</h2>
        <div className="h-1/2 w-1/4 space-y-2">
          <EmailField
            nome="Email: "
            setValor={setNomeUsuario}
            valor={nomeUsuario}
          ></EmailField>
        </div>
        <div className="h-1/2 w-1/4 space-y-2">
          <PasswordField
            nome="Senha: "
            setValor={setSenha}
            valor={senha}
          ></PasswordField>
        </div>
        <button className="btn" onClick={(e) => mudancaLogin(e)}>
          Entrar
        </button>
      </div>
    </>
  );
};

export default LoginForm;
