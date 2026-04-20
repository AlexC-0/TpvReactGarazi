function CartItem({ item, formatCurrency, onRemove }) {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <p className="cart-item-name">{item.name}</p>
        <p className="cart-item-meta">{item.quantityLabel}</p>
      </div>
      <div className="cart-item-actions">
        <span className="cart-item-total">{formatCurrency(item.total)}</span>
        <button type="button" className="remove-item-button" onClick={() => onRemove(item.id, item.name)}>
          X
        </button>
      </div>
    </div>
  );
}

export default CartItem;
