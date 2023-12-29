export function Radio({ musicasRadio }) {
  return (
    <div className="conteudo__radio">
      <p className="conteudo__radio--smallText">INICIAR RÁDIO COM UMA MÚSICA</p>
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
  );
}
