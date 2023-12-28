import { Menu } from "./Menu";
import { Musicas } from "./Musicas";

export function Conteudo() {
  return (
    <div className="grid">
      <div className="grid__menu">
        <Menu />
      </div>

      <div className="grid__conteudo">
        <Musicas />
      </div>
    </div>
  );
}
