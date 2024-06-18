interface TextFieldProps {
  nome: string;
  valor: string;
  setValor: Function;
}

export function TextField(props: TextFieldProps) {
  return (
    <div className="flex flex-col items-start">
      <label>{props.nome}</label>
      <input
        className="w-full h-10 bg-white border border-white rounded-lg mt-1"
        type="text"
        value={props.valor}
        onChange={(e) => props.setValor(e.target.value)}
      />
    </div>
  );
}
