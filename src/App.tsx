import { useState } from "react";
import "./App.css";
import Bugs from "./components/Bugs";
import Cart from "./components/Cart";
import Customer from "./components/Customer";
import ExpandableText from "./components/ExpandableText";
import NavBar from "./components/NavBar";
import Order from "./components/Order";
import Pizza from "./components/Pizza";
import Tags from "./components/Tags";
import UpdateCart from "./components/UpdateCart";

function App() {
  const [cartItems, setCartItems] = useState(["Item 1", "Item 2", "Item 3"]);

  return (
    <div className="App">
      <Order title="Cappuccino" price={3.5} />
      <Customer />
      <Tags />
      <Bugs />
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      <Pizza />
      <UpdateCart />
      <ExpandableText maxChars={30}>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Tenetur facere
        nostrum commodi quis voluptatum voluptas, quasi temporibus, iure dolor
        iste quos cupiditate. Nostrum, obcaecati illo. Consectetur deleniti
        doloribus molestiae reiciendis facilis nam sapiente magni cupiditate,
        totam repudiandae id laboriosam fuga? Minima vitae laborum sed quo
        deserunt! Perspiciatis numquam voluptas distinctio.
      </ExpandableText>
    </div>
  );
}

export default App;
