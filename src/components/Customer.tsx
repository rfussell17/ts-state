import { useState } from "react";

const Customer = () => {
  const [customer, setCustomer] = useState({
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Boston",
      state: "MA",
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, city: "New York" },
    });
  };

  return (
    <div>
      <h1>Customer</h1>
    </div>
  );
};

export default Customer;
