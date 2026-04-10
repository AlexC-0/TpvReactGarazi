import CartPanel from './components/CartPanel.jsx';
import ProductsPanel from './components/ProductsPanel.jsx';
import { products } from './data/products.js';

function App() {
  return (
    <div className="pos-container">
      <ProductsPanel products={products} />
      <CartPanel />
    </div>
  );
}

export default App;
