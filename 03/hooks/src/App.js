import React from "react";
import Produto from "./components/Produto";
import Buttons from "./components/Buttons";
import { GlobalStorage } from "./GlobalContext";

const App = () => {
  return (
    <>
      <GlobalStorage>
        <Buttons />
        <Produto />
      </GlobalStorage>
    </>
  );
};

export default App;
