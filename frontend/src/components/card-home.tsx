import { useNavigate } from "react-router-dom";

interface Props {
  icon: any;
  titleCard: string;
  buttonLink: string;
}

export const CardHome = (props: Props) => {
  const nav = useNavigate();

  return (
    <>
      <div
        onClick={() => nav(props.buttonLink)}
        className="flex flex-col bg-pink-300 w-60 h-60 justify-center rounded-lg cursor-pointer hover:bg-pink-600"
      >
        <div className="">
          <div className="flex justify-center">{props.icon}</div>
          <span className="text-2xl"> {props.titleCard} </span>
        </div>
      </div>
    </>
  );
};
