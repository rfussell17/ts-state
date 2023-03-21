import { useState } from "react";

interface Props {
  title: string;
  price: number;
}

const Order = ({ title, price }: Props) => {
  const [drink, setDrink] = useState({
    title: "Cappuccino",
    price: 3.5,
  });

  const handleClick = () => {
    setDrink({ ...drink, price: 4.5 });
  };

  return (
    <div>
      <h1>Order</h1>
      <p>
        {drink.title} - ${drink.price}
      </p>
      <button onClick={handleClick}>Change drink</button>
    </div>
  );
};

export default Order;
