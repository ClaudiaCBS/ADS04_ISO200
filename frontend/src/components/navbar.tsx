import { AiOutlineHome } from "react-icons/ai";
import { GrLogout } from "react-icons/gr";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export function NavBar() {
  const auth = useAuth()
  return (
    <>
      <div className="navbar max-w- bg-pink-300 justify-end max-w-full">
        <div className="flex flex-row space-x-4">
          <Link to="/home">
            <AiOutlineHome className="w-8 h-8" />
          </Link>

          <button onClick={() => auth?.logout()}>
            <GrLogout className="w-8 h-8" />
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
