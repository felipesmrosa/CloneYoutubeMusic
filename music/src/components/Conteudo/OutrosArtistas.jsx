export function OutrosArtistas({ artistas }) {
  return (
    <div className="conteudo__albumDestaque">
      <h1>Artistas</h1>
      <div className="conteudo__albumDestaque--album">
        {artistas.map((artista) => (
          <div className="conteudo__albumDestaque--album-infos">
            <img
              className="conteudo__albumDestaque--album-infos-imgAr"
              src={artista.image}
              alt=""
            />
            <p>{artista.nome}</p>
            <p className="conteudo__albumDestaque--album-descricao">
              {artista.descricao}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
