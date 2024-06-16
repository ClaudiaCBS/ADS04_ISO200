import React from "react";

interface TextFieldProps {
  nome: string;
  valor: string;
  setValor: Function;
}

export function TextAreaField(props: TextFieldProps) {
  return (
    <div className="flex flex-col items-start">
      <label>{props.nome}</label>
      <textarea
        className="w-full h-32 bg-white border border-white rounded-lg mt-1"
        value={props.valor}
        onChange={(e) => props.setValor(e.target.value)}
      />
    </div>
  );
}
