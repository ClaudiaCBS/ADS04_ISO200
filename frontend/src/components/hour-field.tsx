import React from "react";

interface TimeFieldProps {
  nome: string;
  valor: string;
  setValor: (value: string) => void;
}

export function HourField(props: TimeFieldProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setValor(event.target.value);
  };

  return (
    <div className="flex flex-col items-start">
      <label>{props.nome}</label>
      <input
        className="w-full h-10 bg-white border border-white rounded-lg mt-1"
        type="time"
        value={props.valor}
        onChange={handleChange}
      />
    </div>
  );
}
