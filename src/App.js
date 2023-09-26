import "./App.css";
import CartList from "./carts/Carts";
import ProductList from "./products/Products";

function App() {
  return (
    <div className="App">
      <ProductList />
      <CartList />
    </div>
  );
}

export default App;
