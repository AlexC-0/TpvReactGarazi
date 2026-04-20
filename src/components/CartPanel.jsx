import CartItem from './CartItem.jsx';

function CartPanel({
  cartItems,
  subtotal,
  discount,
  total,
  couponCode,
  onCouponChange,
  onApplyCoupon,
  onReset,
  onRemoveItem,
  statusMessage,
  formatCurrency,
}) {
  return (
    <div className="cart-panel">
      <h2>🧾 Carrito</h2>

      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p className="cart-empty">Todavía no hay productos seleccionados.</p>
        ) : (
          cartItems.map((item) => (
            <CartItem key={item.id} item={item} formatCurrency={formatCurrency} onRemove={onRemoveItem} />
          ))
        )}
      </div>

      <div className="totals">
        <div className="row">
          <span>Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div className="row discount">
          <span>Descuento</span>
          <span>-{formatCurrency(discount)}</span>
        </div>
        <div className="row total">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </div>

      <div className="coupon-area">
        <input type="text" placeholder="Código de cupón" value={couponCode} onChange={onCouponChange} />
        <button type="button" onClick={onApplyCoupon}>
          Aplicar Cupón
        </button>
      </div>
      <p className="coupon-feedback">{statusMessage}</p>

      <button type="button" className="checkout" onClick={onReset}>
        💳 Cobrar / Reset
      </button>
    </div>
  );
}

export default CartPanel;
