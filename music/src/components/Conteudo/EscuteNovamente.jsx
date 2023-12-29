import { useState } from "react";

export function EscuteNovamente({ escuteNovamente }) {
  const [startIndex, setStartIndex] = useState(0);

  const nextImage = () => {
    setStartIndex((prevIndex) =>
      prevIndex === escuteNovamente.length - 6 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? escuteNovamente.length - 6 : prevIndex - 1
    );
  };

  return (
    <>
      <h1>Ouvir novamente</h1>
      <button onClick={prevImage} className="arrow prev">
        &#8249;
      </button>
      <button onClick={nextImage} className="arrow next">
        &#8250;
      </button>
      <div className="gallery">
        <div className="image-container">
          {escuteNovamente
            .slice(startIndex, startIndex + 6)
            .map((item, index) => (
              <div key={index} className="image-wrapper">
                <img src={item.imagem} alt={`Imagem ${index}`} />
                <div className="info">
                  <h3>{item.nome}</h3>
                  <p className="banda">{item.banda}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
