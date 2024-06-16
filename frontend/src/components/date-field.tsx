import React from "react";

interface DateFieldProps {
  nome: string;
  setValor: (value: Date) => void;
}

export function DateField({ nome, setValor }: DateFieldProps) {
  const handleDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValor(new Date(event.target.value));
  };

  return (
    <div className="flex flex-col items-start">
      <label>{nome}</label>
      <input
        className="w-full h-10 bg-white border border-white rounded-lg mt-1"
        type="date"
        onChange={(e) => handleDate(e)}
      />
    </div>
  );
}
