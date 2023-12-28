import { IoMdHome } from "react-icons/io";
import {
  MdOutlineExplore,
  MdOutlineLibraryMusic,
  MdPushPin,
} from "react-icons/md";

export function Nav() {
  return (
    <div className="menu__nav">
      <button className="menu__nav--btnNav">
        <IoMdHome /> Início
      </button>
      <button className="menu__nav--btnNav disabled">
        <MdOutlineExplore /> Explorar
      </button>
      <button className="menu__nav--btnNav disabled">
        <MdOutlineLibraryMusic /> Biblioteca
      </button>
    </div>
  );
}
