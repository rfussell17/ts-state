import "./App.css";
import Customer from "./components/Customer";
import Order from "./components/Order";
import Tags from "./components/Tags";

function App() {
  return (
    <div className="App">
      <Order title="Cappuccino" price={3.5} />
      <Customer />
      <Tags />
    </div>
  );
}

export default App;
