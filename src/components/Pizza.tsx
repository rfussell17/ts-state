import { useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState({
    name: "Pepperoni",
    toppings: ["pepperoni", "cheese"],
  });

  const handleClick = () => {
    setPizza({
      ...pizza,
      toppings: [...pizza.toppings, "mushrooms", "extra cheese"],
    });
  };

  return (
    <>
      <h1>Pizza</h1>
      Toppings: {pizza.toppings.join(", ")}
      <button onClick={handleClick}>Add topping</button>
    </>
  );
};

export default Pizza;
