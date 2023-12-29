export function Album({ lancamentos }) {
  return (
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
            <p className="conteudo__albumDestaque--album-descricao">
              {lancamento.descricao}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
