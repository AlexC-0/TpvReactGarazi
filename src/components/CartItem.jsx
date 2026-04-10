function CartItem({ item, formatCurrency }) {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <p className="cart-item-name">{item.name}</p>
        <p className="cart-item-meta">{item.quantityLabel}</p>
      </div>
      <span className="cart-item-total">{formatCurrency(item.total)}</span>
    </div>
  );
}

export default CartItem;
