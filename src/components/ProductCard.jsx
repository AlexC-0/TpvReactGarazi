function ProductCard({ product, onSelect }) {
  return (
    <button type="button" className={`product-button ${product.color}`} onClick={() => onSelect(product)}>
      <img src={product.image} alt={product.name} />
      <div>
        <p className="product-name">{product.name}</p>
        <p className="product-price">{product.price}</p>
      </div>
    </button>
  );
}

export default ProductCard;
