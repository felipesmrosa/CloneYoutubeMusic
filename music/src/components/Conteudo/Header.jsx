import { CiStreamOn } from "react-icons/ci";

export function Header() {
  return (
    <header className="conteudo__header">
      <input
        placeholder="Pesquise músicas, álbuns, artistas, podcasts"
        type="text"
      />
      <div className="conteudo__header__icones">
        <CiStreamOn />
        <img
          className="conteudo__header__icones--perfil"
          src="../src/img/perfil.png"
          alt=""
        />
      </div>
    </header>
  );
}
