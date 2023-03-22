import { useState } from "react";

const UpdateCart = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      {
        id: 1,
        title: "Item 1",
        quantity: 10,
      },
      {
        id: 2,
        title: "Item 2",
        quantity: 5,
      },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) => {
        if (item.id === 1) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      }),
    });
  };

  return (
    <>
      <div>UpdateCart</div>
      <button onClick={handleClick}>Update cart</button>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.title} - {item.quantity}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UpdateCart;
