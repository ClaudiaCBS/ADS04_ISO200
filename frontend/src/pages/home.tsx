import { FaRegUser } from "react-icons/fa";
import { CardHome } from "../components/card-home";
import { SlPencil } from "react-icons/sl";
import { TfiAgenda } from "react-icons/tfi";


export function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen space-x-10">
        <div>
          <CardHome
            icon={<FaRegUser className="w-10 h-10" />}
            titleCard={"Cadastrar Usuário"}
            buttonLink={"/form-user"}
          ></CardHome>
        </div>
        <div>
          <CardHome
            icon={<SlPencil className="w-10 h-10" />}
            titleCard={"Cadastrar e Reservar Salas"}
            buttonLink={"/cadastra-sala"}
          ></CardHome>
        </div>
        <div>
          <CardHome
            icon={<TfiAgenda className="w-10 h-10" />}
            titleCard={"Visualizar Salas Reservadas"}
            buttonLink={"/lista-reserva"}
          ></CardHome>
        </div>
      </div>
    </>
  );
}

export default Home;
