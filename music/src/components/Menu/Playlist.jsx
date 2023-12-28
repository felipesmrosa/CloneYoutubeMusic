import { MdPushPin } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

const playlist = [
  {
    title: "loop infinito",
    subTitle: "Bruu",
  },
  {
    title: "Kpop",
    subTitle: "Bruu",
  },
  {
    title: "kpop playlist longa",
    subTitle: "Bruu",
  },
  {
    title: "teste",
    subTitle: "Bruu",
  },
];

export function Playlist() {
  return (
    <div className="menu__playlist">
      <button className="menu__playlist--newPlaylist">
        <FaPlus />
        Nova playlist
      </button>
      <div className="menu__playlist__criada">
        <p className="menu__playlist__criada--title">
          Música marcada como "Gost...
        </p>
        <p className="menu__playlist__criada--subTitle">
          <MdPushPin />
          Playlist automática
        </p>
        <br />
        {playlist.map((musicas) => (
          <span className="menu__playlist__criada--span" key={musicas.title}>
            <p className="menu__playlist__criada--title">{musicas.title}</p>
            <p className="menu__playlist__criada--subTitle">
              {musicas.subTitle}
            </p>
            <br />
          </span>
        ))}
        <p className="menu__playlist__criada--title">
          Episódios para ver depois
        </p>
        <p className="menu__playlist__criada--subTitle">Playlist automática</p>
      </div>
    </div>
  );
}
