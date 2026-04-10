function CartPanel() {
  return (
    <div className="cart-panel">
      <h2>Carrito</h2>

      <div className="cart-items" />

      <div className="totals">
        <div className="row">
          <span>Subtotal</span>
          <span>€0.00</span>
        </div>
        <div className="row discount">
          <span>Descuento</span>
          <span>-€0.00</span>
        </div>
        <div className="row total">
          <span>Total</span>
          <span>€0.00</span>
        </div>
      </div>

      <div className="coupon-area">
        <input type="text" placeholder="Codigo de cupon" defaultValue="" />
        <button type="button">Aplicar Cupon</button>
      </div>

      <button type="button" className="checkout">
        Cobrar / Reset
      </button>
    </div>
  );
}

export default CartPanel;
