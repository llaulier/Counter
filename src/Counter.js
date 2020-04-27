import React, { useState } from "react";

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count

  const [count, setCount] = useState(0);

  const handleChange = (event) => {
    setCount(Number(event.target.value));
  };

  const handleIcr = () => {
    setCount(count + 1);
  };
  const handleDecr = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>
        <p>
          Le compteur est à :
          <input
            type="texte"
            name="counter"
            value={count}
            onChange={handleChange}
          />
          <button onClick={handleIcr}>+1</button>
          <button onClick={handleDecr}>-1</button>
        </p>
      </div>
    </>
  );
}
export default Counter;
