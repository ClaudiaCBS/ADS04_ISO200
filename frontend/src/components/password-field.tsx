import React from "react";
interface PasswordFieldProps {
  nome: String;
  valor: string | number | readonly string[] | undefined;
  setValor: Function;
}

export function PasswordField(props: PasswordFieldProps) {
  return (
    <div className="flex flex-col items-start">
      <label>{props.nome}</label>
      <input
        className="w-full h-10 bg-white p-1 border-2 border-white rounded-lg mt-1"
        type="password"
        value={props.valor}
        onChange={(e) => props.setValor(e.target.value)}
      />
    </div>
  );
}
