import ProductCard from './ProductCard.jsx';

function ProductsPanel({ products, quantityValue, onQuantityChange, onProductSelect }) {
  return (
    <div className="products-panel">
      <h1>Punto de Venta</h1>

      <div className="weight-input">
        <label htmlFor="peso">Peso (kg)</label>
        <input id="peso" type="number" step="0.1" min="0.1" value={quantityValue} onChange={onQuantityChange} />
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onSelect={onProductSelect} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPanel;
