import React from "react";
import { GlobalContext } from "../GlobalContext";

const Buttons = () => {
  const { getProduto } = React.useContext(GlobalContext);

  return (
    <div>
      <button onClick={() => getProduto("smartphone")}>smartphone</button>
      <button onClick={() => getProduto("tablet")}>tablet</button>
      <button onClick={() => getProduto("notebook")}>notebook</button>
    </div>
  );
};

export default Buttons;
