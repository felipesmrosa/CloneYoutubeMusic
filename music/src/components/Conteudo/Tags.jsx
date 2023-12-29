export function Tags({ tags }) {
  return (
    <div className="conteudo__tags">
      {tags.map((tag) => (
        <p className="conteudo__tags--tag">{tag.nome}</p>
      ))}
    </div>
  );
}
