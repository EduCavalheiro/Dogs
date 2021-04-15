import React, { useState } from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = useState(null);

  // Faz a busca do produto através da API
  const getProduto = async (produto) => {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${produto}`
    );
    const json = await response.json();
    setDados(json);
  };

  React.useEffect(() => {
    getProduto("smartphone");
  }, []);

  return (
    <GlobalContext.Provider value={{ getProduto, dados }}>
      {children}
    </GlobalContext.Provider>
  );
};
