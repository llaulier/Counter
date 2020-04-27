import React from "react";
import Counter from "./Counter";

const App = () => {
  const title = "Compteur";

  return (
    <div>
      <h1>{title}</h1>
      <Counter />
    </div>
  );
};

export default App;
