import ProductCard from './ProductCard.jsx';

function ProductsPanel({
  products,
  quantityValue,
  selectedMeasurement,
  onQuantityChange,
  onProductSelect,
  onMeasurementPreview,
}) {
  const isUnitMode = selectedMeasurement === 'unit';
  const labelText = isUnitMode ? 'Cantidad (uds)' : 'Peso (kg)';
  const helperText = isUnitMode
    ? 'Modo actual: productos por unidad. El valor del campo se aplicará como cantidad.'
    : 'Modo actual: productos por peso. El valor del campo se aplicará en kilogramos.';

  return (
    <div className="products-panel">
      <h1>🛒 Punto de Venta</h1>

      <div className="weight-input">
        <label htmlFor="peso">{labelText}</label>
        <input
          id="peso"
          type="number"
          step={isUnitMode ? '1' : '0.1'}
          min={isUnitMode ? '1' : '0.1'}
          value={quantityValue}
          onChange={onQuantityChange}
        />
      </div>
      <p className="measurement-helper">{helperText}</p>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onPreview={onMeasurementPreview}
            onSelect={onProductSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsPanel;
