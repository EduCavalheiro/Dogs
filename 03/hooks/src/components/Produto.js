import React from "react";
import { GlobalContext } from "../GlobalContext";

const Produto = () => {
  const global = React.useContext(GlobalContext);

  return (
    <>
      {global.dados && (
        <div>
          <h1>{global.dados.nome}</h1>
          <p>R$ {global.dados.preco}</p>
          {global.dados.fotos.map((foto, index) => {
            return <img key={index} src={foto.src} alt={foto.titulo} />;
          })}
        </div>
      )}
    </>
  );
};

export default Produto;
