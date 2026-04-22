function ProductCard({ product, onPreview, onSelect }) {
  const measurementLabel = product.measurement === 'weight' ? 'Por kg' : 'Unidad';

  const handleInteraction = () => {
    onPreview(product.measurement);
  };

  return (
    <button
      type="button"
      className={`product-button ${product.color}`}
      onMouseEnter={handleInteraction}
      onFocus={handleInteraction}
      onClick={() => onSelect(product)}
    >
      <span className="product-measurement-badge">{measurementLabel}</span>
      <img src={product.image} alt={product.name} />
      <div>
        <p className="product-name">{product.name}</p>
        <p className="product-price">{product.price}</p>
      </div>
    </button>
  );
}

export default ProductCard;
