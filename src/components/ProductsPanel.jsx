import ProductCard from './ProductCard.jsx';

function ProductsPanel({ products }) {
  return (
    <div className="products-panel">
      <h1>Punto de Venta</h1>

      <div className="weight-input">
        <label htmlFor="peso">Peso (kg)</label>
        <input id="peso" type="number" step="0.1" defaultValue={1} />
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPanel;
