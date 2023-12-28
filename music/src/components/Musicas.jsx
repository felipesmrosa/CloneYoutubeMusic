import { CiStreamOn } from "react-icons/ci";

const tags = [
  {
    nome: "sertanejo",
  },
  {
    nome: "funk",
  },
  {
    nome: "pop",
  },
  {
    nome: "rap",
  },
  {
    nome: "eletronica",
  },
];

const musicasRadio = [
  {
    nome: "If You... (Disco Mix)",
    banda: "Magic Box • If You...",
    imagem:
      "https://lastfm.freetls.fastly.net/i/u/ar0/d5cccac822f85fc663881d81a48230cf.jpg",
  },
  {
    nome: "Thnks fr th Mmrs",
    banda: "Fall Out Boy • Level II",
    imagem:
      "https://lastfm.freetls.fastly.net/i/u/ar0/d5cccac822f85fc663881d81a48230cf.jpg",
  },
  {
    nome: "LONELY MACHINES",
    banda: "30H!3 e 100 gecs • LONELY MACHINES",
    imagem:
      "https://lastfm.freetls.fastly.net/i/u/ar0/d5cccac822f85fc663881d81a48230cf.jpg",
  },
  {
    nome: "Castle In The Sky (Da Brozz Remix Edit)",
    banda: "DJ Satomi • Castle In the Sky (2010 Remixes)",
    imagem:
      "https://lastfm.freetls.fastly.net/i/u/ar0/d5cccac822f85fc663881d81a48230cf.jpg",
  },
  {
    nome: "Chasing That Feeling",
    banda: "TOMORROW X TOGETH... • The Name Chapter: FR...",
    imagem:
      "https://lastfm.freetls.fastly.net/i/u/ar0/d5cccac822f85fc663881d81a48230cf.jpg",
  },
  {
    nome: "The Night Is Still Young",
    banda: "Nicki Minaj • The Pinkprint (Deluxe)",
    imagem:
      "https://lastfm.freetls.fastly.net/i/u/ar0/d5cccac822f85fc663881d81a48230cf.jpg",
  },
  {
    nome: "Way Back Home [Sam Feldt Edit] (part. Conor Mayn...",
    banda: "SHAUN • Way Back Home [Sam Feldt Edit]",
    imagem:
      "https://lastfm.freetls.fastly.net/i/u/ar0/d5cccac822f85fc663881d81a48230cf.jpg",
  },
  {
    nome: "Little Kandi Raver 2012",
    banda: "S3rl • Little Kandi Raver 2012",
    imagem:
      "https://lastfm.freetls.fastly.net/i/u/ar0/d5cccac822f85fc663881d81a48230cf.jpg",
  },
  {
    nome: "Boom (German Bonus Extended Mix by Rob & Chris)",
    banda: "ItaloBrothers feat.Carlprit • Hands Up Forever (The...",
    imagem:
      "https://lastfm.freetls.fastly.net/i/u/ar0/d5cccac822f85fc663881d81a48230cf.jpg",
  },
  {
    nome: "If You Love Someone",
    banda: "The Veronicas • The Veronicas",
    imagem:
      "https://lastfm.freetls.fastly.net/i/u/ar0/d5cccac822f85fc663881d81a48230cf.jpg",
  },
  {
    nome: "Turn The Lights Off",
    banda: "EQRIC, VADDS e Lonnel • Turn The Lights Off",
    imagem:
      "https://lastfm.freetls.fastly.net/i/u/ar0/d5cccac822f85fc663881d81a48230cf.jpg",
  },
  {
    nome: "fall apart",
    banda: "renforshot e glaive • gold on I still want you",
    imagem:
      "https://lastfm.freetls.fastly.net/i/u/ar0/d5cccac822f85fc663881d81a48230cf.jpg",
  },
];

const lancamentos = [
  {
    nome: "Joga Pra Lua",
    descricao: "Single • Anitta",
    image:
      "https://s2-g1.glbimg.com/2LV1GWbfWLXqscmaOfsGpz8Eziw=/0x0:1200x1200/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/A/3/mBXMiyQEOFiWpAkvkDiw/anittacapa.jpg",
  },
  {
    nome: "Naldo Ben Romântico (Deluxe)",
    descricao: "EP • Naldo Benny",
    image:
      "https://www.jornaldorap.com.br/wp-content/uploads/2023/12/Capa-Album-Naldo.jpg",
  },
  {
    nome: "Então Toma Toma",
    descricao: "Single • MC Pipokinha",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    nome: "Amiga Que e Amiga Senta na Mesma Pica",
    descricao: "Single",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/df/5f/a8/df5fa8a6-f46c-11bb-1859-d10aba5c9910/0.jpg/1200x1200bb.jpg",
  },
  {
    nome: "Set Final de Ano",
    descricao: "Single • DJ Blakes e Love",
    image:
      "https://i.ytimg.com/vi/PWxEOFgBWqU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD7mLZUWJEwMWXg5Hk0J8StZBzu4A",
  },
  {
    nome: "Vai Fofoqueira 2",
    descricao: "Single • DJ DUARTE, MC",
    image:
      "data:image/jpeg;base64,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",
  },
];

export function Musicas() {
  return (
    <div className="conteudo">
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
      <div className="conteudo__tags">
        {tags.map((tag) => (
          <p className="conteudo__tags--tag">{tag.nome}</p>
        ))}
      </div>
      <div className="conteudo__radio">
        <p className="conteudo__radio--smallText">
          INICIAR RÁDIO COM UMA MÚSICA
        </p>
        <h1>Escolhas rápidas</h1>
        <div className="conteudo__radio__listaDeMusicas">
          {musicasRadio.map((musica) => (
            <div className="conteudo__radio__listaDeMusicas--musica">
              <img src={musica.imagem} alt="" />
              <span>
                <p>{musica.nome}</p>
                <p className="conteudo__radio__listaDeMusicas--musica--banda">
                  {musica.banda}
                </p>
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="conteudo__albumDestaque">
        <h1>Lançamentos</h1>
        <div className="conteudo__albumDestaque--album">
          {lancamentos.map((lancamento) => (
            <div className="conteudo__albumDestaque--album-infos">
              <img
                className="conteudo__albumDestaque--album-infos-img"
                src={lancamento.image}
                alt=""
              />
              <p>{lancamento.nome}</p>
              <p className="conteudo__albumDestaque--album-descricao">{lancamento.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
