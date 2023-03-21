import "./App.css";
import Order from "./components/Order";

function App() {
  return (
    <div className="App">
      <Order title="Cappuccino" price={3.5} />
    </div>
  );
}

export default App;
