import React, { useState } from "react";
import Produto from "./components/Produto";

const App = () => {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(null);

  const getProduto = async (produto) => {
    setLoading(true);

    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${produto}`
    );
    const json = await response.json();
    setDados(json);
    setLoading(false);
  };

  return (
    <>
      <button onClick={() => getProduto("smartphone")}>smartphone</button>
      <button onClick={() => getProduto("tablet")}>tablet</button>
      <button onClick={() => getProduto("notebook")}>notebook</button>
      {loading && <p>Carregando...</p>}
      {!loading && dados && <Produto dados={dados} />}
    </>
  );
};

export default App;
